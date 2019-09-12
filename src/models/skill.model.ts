export interface ISkillProject {
  name: string;
  link: string;
}

export interface ISkill {
  name: string;
  description: string;
  firstUsed: Date;
  image: string;
  projects: ISkillProject[];
  tags: string[];
  id: string;
  createdAt: Date;
}
