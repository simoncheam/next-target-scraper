'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Product } from '../api/hello/route';
import ProductCard from '../../../components/ProductCard';

export let productJson = [];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newSearchURL, setNewSearchURL] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  let url = 'searchTerm=';

  useEffect(() => {
    if (!newSearchURL || !searchTerm) {
      return;
    }

    async function handleGetSearchResults() {
      setLoading(true);

      if (newSearchURL.length > 0) {
        try {
          await fetch(`/api/hello?${newSearchURL}`).then(async (res) => {
            const data: Product[] = await res.json();
            console.log('data received from backend: ');
            console.log(data); //* IT WORKS
            setResults(data);
            setLoading(false);
            return data;
          });
        } catch (error) {
          setLoading(false);
        }
      }
    }
    handleGetSearchResults();
  }, [newSearchURL, searchTerm]);

  async function handleReset() {
    setResults([]);
    setSearchTerm('');
    setNewSearchURL('');
  }

  function handleInputChange(event: any) {
    setSearchTerm(event.target.value);
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    const newSearchURL = url + formatQuery(searchTerm);
    setNewSearchURL(newSearchURL);
  }

  //** formats the search input */
  function formatQuery(str: string) {
    return str.trim().toLowerCase().split(' ').join('+');
  }

  if (loading) {
    return (
      <div className='spinner-container'>
        <div className='spinner'></div>
      </div>
    );
  }
  return (
    <main className='bg-slate-100 flex min-h-screen min-w-full flex-col items-center justify-between p-5 '>
      <div className='w-full sm:w-3/4 md:w-4/5 lg:w-1/2 mx-auto mt-3'>
        <div className=' text-center '>
          {/* <!-- child elements will be placed in the grid --> */}
          <div className=' flex justify-center md:flex md:items-center md:justify-between'>
            <div className='min-w-0 flex-1'>
              <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
                Target Scrapr
              </h2>
            </div>
          </div>
          <div className='flex justify-center mt-2 items-center w-full'>
            <form onSubmit={handleSubmit} className='w-full max-w-lg mx-auto'>
              <input
                value={searchTerm}
                onChange={handleInputChange}
                placeholder='what can we help you find?'
                type='text'
                name='search'
                id='search'
                className='block w-full rounded-md border-0 py-1.5 pr-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </form>
          </div>
          <div className='flex justify-center items-center my-3 '>
            <button
              onClick={handleSubmit}
              type='submit'
              className='mx-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Scrape
            </button>
            <button
              hidden={!results.length}
              onClick={handleReset}
              type='submit'
              className='mx-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Reset
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {results.map((product: Product) => (
            <div
              className='p-4 shadow-md flex flex-col justify-between border border-gray-300 rounded-lg '
              key={product.index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Page;
