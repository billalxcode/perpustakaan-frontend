import React from "react";
import { Input } from "../../input";
import { Button } from "../../button";

export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-2 mt-4">
      <div className="flex gap-2">
        <Input type="text" placeholder="Enter your name" />
        <Input type="email" placeholder="Enter your email" />
      </div>
      <Input type="password" placeholder="Enter your password" />
      <Input type="password" placeholder="Confirm your password" />

      <Button type="submit">Register</Button>
    </form>
  );
}
