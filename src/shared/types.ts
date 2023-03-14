export enum SelectedPage {
  Home = "home",
  Benefites = "benefits",
  Ourclasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitsType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description: string;
  image: string;
}
