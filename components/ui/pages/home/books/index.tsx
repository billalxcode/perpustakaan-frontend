import React from 'react'
import CategoriesWrapper from '../categories'
import WrapBooks from './wrap'

export default function BooksWrapper() {
  return (
    <div className="w-9/12 bg-card p-4 rounded-xl flex-1">
      <CategoriesWrapper />

      <div className="overflow-y-scroll no-scrollbar h-screen flex flex-col gap-4">
        <WrapBooks title='Popular Books' />
        <WrapBooks title='Buku Agama Islam' />
        <WrapBooks title='Buku Agama Kristen' />
        <WrapBooks title='Teknologi dan Sains' />
      </div>
    </div>
  )
}
