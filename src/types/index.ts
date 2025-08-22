export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  readTime: string;
  source: string;
  url?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}