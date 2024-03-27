import { StaticImageData } from "next/image";

export interface HeroSlideType {
    image: StaticImageData;
}

export interface onClickType {
    onClick?(): (event: React.MouseEvent<HTMLButtonElement>) => void;
  }

export interface FeaturedType {
   image: StaticImageData;
   title: string;
   description: string;
   
}
export interface FeedsType {
    image: StaticImageData
    title: string;
    subtitle: string;
    subjects: string;
    descriptionTitle: string;
    description: string;
    btnDescription: string;
}

export interface HowToType {
  image: StaticImageData;
  title: string;
  description: string
}
export interface ReviewType {
  image: StaticImageData;
  name : string;
  date: string;
  rating: JSX.Element;
  description: string
}
export interface SponsorsType {
  image: StaticImageData
}