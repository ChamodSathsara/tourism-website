import Image, { StaticImageData } from "next/image";

export interface Package {
  id: string;
  title: string;
  duration: string;
  price: string;
  badge: string | null;
  tags: string[];
  description: string;
  image: StaticImageData;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: StaticImageData;
}