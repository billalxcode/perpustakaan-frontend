import Image from "next/image";
import React from "react";

export default function BookItem() {
  return (
    <div className="flex flex-col gap-4 p-2 bg-accent rounded-xl">
      <Image
        src={"/books/cover/254uuwz95w.jpg"}
        alt="book cover"
        width={150}
        height={150}
        className="rounded-xl"
      />

      <div className="mb-2 mx-2">
        <p className="text-[11px] text-gray-500">F. Scott Fitzgerald</p>
        <h1 className="text-sm font-bold">The Great Gatsby</h1>
        <div className="flex items-center mt-2 gap-1">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="text-xs text-gray-500">(4.0)</span>
        </div>
      </div>
    </div>
  );
}
