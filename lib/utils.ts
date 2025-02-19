import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const request = axios.create({
  baseURL: "http://localhost/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
