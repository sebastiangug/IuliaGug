export interface IPortfolio {
  name: string;
  description: string;
  link: string;
  externalLink?: string;
  image: string;
  tags: string[];
  content?: string;
  id: string;
  createdAt: string;
}
