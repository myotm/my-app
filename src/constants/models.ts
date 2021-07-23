export interface Subject {
  id: number;
  title: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
}

export interface Student {
  id: number;
  name: string;
  subjects: string[];
}

export interface Teacher {
  id: number;
  fullname: string;
  subject: string[];
}