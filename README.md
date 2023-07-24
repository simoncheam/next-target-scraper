This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Prerequisites:
Before starting the development server, you must:

```
1. Ensure correct ChromeDriver is installed on your respective OS.
This is required to use Selenium WebDriver to scrape Target's site for product data:
```
[https://chromedriver.chromium.org/downloads](https://chromedriver.chromium.org/downloads)
(chromedriver_mac_arm64 recommended for macOS M1)

```
2. run `npm install`
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

How to use:
- Once your local server is started using Google Chrome, find the search input on the search page
- Enter and submit a search query, (example: water filters)
- Click on product title or image to navigate to product detail page
- Click reset to clear results or submit a new search query to find more products

Expectations:
- After submitting a search query, the app with fetch product information by opening up another browser window.
- Please wait for the results to be returned to the client
- The app will display 9 items on a product overview page in grid view
- If there is an error, restart the server and try again



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
