import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ButtonProps {
  href: string;
  text: string;
  btnType: string;
  target?: string;
}

export interface ImageGridProps {
  src1: StaticImageData;
  src2: StaticImageData;
  src3: StaticImageData;
  src4: StaticImageData;
  src5: StaticImageData;
}

export interface PageIntroProps {
  heading: string;
  copy: string;
  src: any;
  labelCopy?: string;
}

export interface BlogSectionProps {
  blogData: any;
}

export interface BlogData {
  meta: {
    category: string;
    thumbnaillUrl: string;
    date: string;
    readingTime: number;
    title: string;
    description: string;
  };
  slug: string;
}

export interface BlogPreviewProps {
  mapData: BlogData;
  key: number;
  featured?: boolean;
  column?: string;
  imgCol?: string;
  colPadding?: string;
  colTitle?: string;
  colImg?: string;
}
