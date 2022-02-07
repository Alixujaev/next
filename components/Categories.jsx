import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories()
      .then(res => setCategories(res))
  }, [])
  return (
    <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      <div>
      {categories.map(category => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='transition block duration-200 flex-grow ml-4 text-indigo-800 hover:text-indigo-400 cursor-pointer mb-4'>
            {category.name}
          </span>
        </Link>
      ))}
      </div>
    </div>
  )
};

export default Categories;
