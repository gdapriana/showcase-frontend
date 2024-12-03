export interface Profile {
  profile: ProfileClass;
}

export interface ProfileClass {
  name: string;
  fullName: string;
  firstName: string;
  lastName: string;
  highlight: string;
  about: string;
  phone: string;
  email: string;
  born: Date;
  age: number;
  profile: string;
  images: string[];
  socials: Social[];
  cv: string;
  studies: Study[];
}

export interface Social {
  name: string;
  username: string;
  url: string;
}

export interface Study {
  name: string;
  logo: string;
  from: Date;
  until: Date;
  target: string;
  status: string;
}

export interface Services {
  services: Service[];
}

export interface Service {
  name: string;
  slug: string;
  description: string;
}

export interface Works {
  works: Work[];
}

export interface Work {
  name: string;
  tech: string[];
  repositories: string[];
  mode: string;
  website: string;
  description: string;
}

export interface Blogs {
  blogs: Blog[];
}

export interface Blog {
  title: string;
  cover: string;
  slug: string;
  description: string;
  createdAt: Date;
  readingTime: number;
  body: string;
}

export interface Experiences {
  experiences: Experience[];
}

export interface Experience {
  name: string;
  company: Company;
  description: string;
  from: Date;
  until: Date;
  type: string;
  media?: string[];
}

export interface Company {
  slug: string;
  name: string;
  logo: string;
  highlight: string;
  location: string;
}
