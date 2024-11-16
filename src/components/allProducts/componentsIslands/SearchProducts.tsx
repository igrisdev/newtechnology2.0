
import { useState } from 'react'

import { useFilterAllProducts } from '@/hooks/useFilterAllProducts'

export const SearchProducts = () => {
  const { filter, handleSearch } = useFilterAllProducts()

  const { search } = filter

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    handleSearch({ search: value })
  }

  return (
    <div className="relative text-black bg-local_background_4 w-full max-w-lg flex items-center rounded-sm">
      <input
        type="text"
        className="bg-transparent w-full h-full p-2"
        placeholder="Buscar productos"
        value={search}
        onChange={handleChange}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute right-2 select-none pointer-events-none"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
      </svg>
    </div>
  )
}
