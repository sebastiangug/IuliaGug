export interface FeedbackItem {
  name: string;
  job: string;
  image: string;
  message: string;
}

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
  sliderImages: string[];
  feedback: FeedbackItem[];
}
