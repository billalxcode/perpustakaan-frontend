import Image from "next/image";
import React from "react";
import { Badge } from "../../badge";

export default function ProfileWrapper() {
  return (
    <div className="relative w-1/6">
      <div className="flex flex-col flex-1 gap-3 items-center text-card-foreground bg-card p-4 rounded-xl">
        <Image
          src={"/avatars/1.jpg"}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full"
        />

        <div className="flex flex-col gap-0 items-center w-1/2 text-justify">
          <div className="text-lg font-bold text-center">John Doe</div>
          <Badge className="rounded-full w-full p-2 mx-auto">
            Anime Lover
          </Badge>
        </div>
      </div>
    </div>
  );
}
