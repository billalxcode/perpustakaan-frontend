import Image from 'next/image'
import React from 'react'

export default function NavProfile() {
  return (
    <div className="flex flex-col items-center justify-center p-[2px] border-2 border-primary rounded-full cursor-pointer">
      <Image
          src={"/avatars/1.jpg"}
          alt='profile'
          width={30}
          height={30}
          className='rounded-full'
      />
    </div>
  )
}
