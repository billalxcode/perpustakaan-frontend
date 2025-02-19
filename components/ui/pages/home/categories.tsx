import Link from "next/link";
import React from "react";

export type CategoryItemsType = {
  title: string;
  isActive: boolean;
};

export const categoryItems: CategoryItemsType[] = [
  {
    title: "All",
    isActive: true,
  },
  {
    title: "Agama",
    isActive: false,
  },
  {
    title: "Teknologi",
    isActive: false,
  },
  {
    title: "Matematika",
    isActive: false,
  },
  {
    title: "Filsafat",
    isActive: false,
  },
  {
    title: "Sains",
    isActive: false,
  },
];

export default function CategoriesWrapper() {
  const activeLink = "text-primary-foreground bg-primary";
  return (
    <div className="flex flex-row justify-between pr-4 items-center border-b">
      <div className="flex flex-row gap-1 pb-4">
        {categoryItems.map((item, index) => (
          <Link
            key={index}
            href={`?category=${item.title.toLowerCase()}`}
            className={`text-sm p-1 px-2 rounded-full font-medium ${
              item.isActive ? activeLink : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <Link
        href={'/categories'}
        className='text-primary text-sm font-semibold'
      >
        Semua kategori
      </Link>
    </div>
  );
}
