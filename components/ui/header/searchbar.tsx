import React from 'react'
import { CgSearch } from 'react-icons/cg'

export default function SearchBar() {
  return (
    <div className="flex flex-row gap-4 w-1/2 items-center bg-white px-4 p-2 rounded-full">
        <CgSearch size={20} className='text-foreground' />

        <input
            type="text"
            placeholder="Cari buku agama islam"
            className="bg-transparent border-none outline-none w-full font-semibold"
        />
    </div>
  )
}
