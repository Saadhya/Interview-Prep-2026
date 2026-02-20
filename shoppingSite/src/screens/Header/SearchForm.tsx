import { useAppDispatch, useAppSelector } from '@/store';
import React from 'react'

const SearchForm = () => {
 
  return (
    <div>
        <form
          className="ecom-header__search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="ecom-header__searchInput"
            type="search"
            placeholder="Search products, brands and more"
            aria-label="Search products"
          />
          <button className="ecom-header__searchButton" type="submit">
            Search
          </button>
        </form>
    </div>
  )
}

export default SearchForm
