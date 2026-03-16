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

  highlights?: string[];
  includes?: string[];
  excludes?: string[];
  images?: StaticImageData[];
  gallery?: GallerySlide[];
  itinerary?: DayItinerary[];
}

export interface DayItinerary {
  day: number;
  title: string;
  locations: string;
  description: string;
  highlights: string[];
}

export interface GallerySlide {
  image: StaticImageData;
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: StaticImageData;

 
  region?: string;
  bestTime?: string;
  climate?: string;
  longDescription?: string;
  highlights?: string[];
  travelTips?: string[];
  gallery?: GallerySlide[];

}

export interface Experience {
  id: string;
  name: string;
  description: string;
  tags: string[];
  icon?:any
  image: StaticImageData;
}

export interface Accommodation {
  id: string;
  name: string;
  location: string;
  description: string;
  image: StaticImageData;
  tagline?: string;
  rating?: number;
}