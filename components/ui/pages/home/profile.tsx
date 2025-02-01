import Image from "next/image";
import React from "react";

export default function ProfileWrapper() {
  return (
    <div className="flex flex-col gap-3 items-center text-card-foreground w-1/2 bg-card p-4 rounded-xl">
      <Image
        src={"/avatars/1.jpg"}
        alt="profile"
        width={100}
        height={100}
        className="rounded-full"
      />

      <div className="flex flex-col gap-0 items-center w-1/2 text-justify">
        <h1 className="text-lg font-bold">John Doe</h1>
        <p className="text-sm font-semibold bg-primary text-primary-foreground p-1 px-2 rounded-full">
          Anime Lover
        </p>
      </div>
    </div>
  );
}
