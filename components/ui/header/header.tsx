import React from 'react'
import SearchBar from './searchbar'
import NavMenu from './menu'

export default function Header() {
  return (
    <div className="flex flex-row p-4 gap-10 justify-between items-center">
        <h1 className="font-black text-lg">BukuKita.ID</h1>

        <SearchBar />
        <NavMenu />
    </div>
  )
}
