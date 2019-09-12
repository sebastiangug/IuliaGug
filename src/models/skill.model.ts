export interface ISkillPortfolio {
  name: string;
  link: string;
}

export interface ISkill {
  name: string;
  description: string;
  firstUsed: Date;
  image: string;
  portfolioItems: ISkillPortfolio[];
  tags: string[];
  id: string;
  createdAt: Date;
}
