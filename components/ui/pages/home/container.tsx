import React from 'react'
import BooksWrapper from './books'
import ProfileWrapper from './profile'

export default function HomeContainer() {
  return (
    <div className="p-4 flex flex-row gap-4 w-full justify-between">
        <BooksWrapper />
        <ProfileWrapper />
    </div>
  )
}
