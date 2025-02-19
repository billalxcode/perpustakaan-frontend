import BookItem from '@/components/ui/book/item';
import Link from 'next/link';
import React from 'react'

export type WrapBooksProps = {
    title: string;
}

export default function WrapBooks(props: WrapBooksProps) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex w-full justify-between">
        <h1 className='font-semibold'>{ props.title }</h1>
        <Link
          href={'/books'}
          className='text-primary font-semibold'
        >
          Lihat semua
          </Link>
      </div>

        <div className="flex flex-row gap-2 overflow-x-scroll no-scrollbar">
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </div>
    </div>
  )
}
