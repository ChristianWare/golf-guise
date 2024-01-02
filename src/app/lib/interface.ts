export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  slug: { current: string };
  categories: Array<Category>;
  _id: string;
}

export interface Category {
  name: string;
  slug: { current: string };
  _id: string;
}
