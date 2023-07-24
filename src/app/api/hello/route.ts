import {  NextApiResponse } from 'next';
import { Builder, By } from 'selenium-webdriver';


export type Product = {
  index: number;
  productTitle?: string;
  productHref?: string;
  productImgLink?: string;
};

let productArr: Product[] = [];
let tempArr: Product[] = [];

export async function GET(request: Request, res: NextApiResponse) {
  let productArr: Product[] = [];
  const searchParams = new URL(request.url).searchParams;

  const searchTerms = searchParams.get('searchTerm')?.split(' ')?.join('+');

  const targetSearchURL = 'https://www.target.com/s?searchTerm=' + searchTerms;

  const driver = await new Builder().forBrowser('chrome').build();

  try {
    console.log('handleStartDriver');
    await handleStartDriver();
    await new Promise((resolve) => setTimeout(resolve, 4000));

    // incrementally scroll
    console.log('handleDriverScroll');
    await handleDriverScroll();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('handleDriverScroll');
    await handleDriverScroll();
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log('handleDriverEvents');
    await handleDriverEvents();
    await new Promise((resolve) => setTimeout(resolve, 6000));

    handleDriverQuit();

    //** All promised resolved, send response */  ;

    // console.log(productArr);

    return new Response(JSON.stringify(productArr), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    console.log(error);

    res.status(200).json({ message: 'A server errors occurred', error: error });
  }

  //* opens search page
  async function handleStartDriver() {
    await driver.get(targetSearchURL);
  }
  // ends webdriver
  async function handleDriverQuit() {
    await driver.quit();
  }

  //* scrolls down page to load items
  async function handleDriverScroll() {
    await driver.executeScript('window.scrollBy(0,1000)');
  }

  async function handleDriverEvents() {
    //* find array of product elements
    const productElements = await driver.findElements(By.css('div[data-test="product-details"]'));

    let count = 0;

    for (let element of productElements) {
      if (count < 10) {
        //*** */ get productTitle
        const productTitleEl = await element.findElement(By.css('a[data-test="product-title"]')); //✅ OK
        const productTitle = await productTitleEl.getText(); //✅ OK

        //*** */ get product Link
        const productHref = await element.findElement(By.linkText(`${productTitle}`)).getAttribute('href'); //✅ OK

        //** */ get product Image
        const imgElement = await driver.findElement(By.css(`img[alt="${productTitle}"]`)); //? this works in some cases
        const productImgLink = (await imgElement.getAttribute('srcset')) || (await imgElement.getAttribute('src'));

        //** */ replace image link with higher quality image
        let newProductImgLink = productImgLink.replace(
          /qlt=\d+&fmt=webp&hei=\d+&wid=\d+/,
          'qlt=85&fmt=webp&hei=325&wid=325'
        );

        let prodObj: Product = {
          index: count,
          productTitle: productTitle,
          productHref: productHref,
          productImgLink:
            newProductImgLink ?? 'https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq',
        };

        //push each prodObj into prodArray as loop continues
        await productArr.push(prodObj);
      }

      count++;

      //** */ if count is greater than 8, break loop
      if (count > 8) {
        // tempArr.push(...productArr);
        break;
      }

      continue;
    }
  }
}
