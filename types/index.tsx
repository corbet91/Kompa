import { SelectProps } from "@radix-ui/react-select";
import type { VariantProps } from "class-variance-authority";

import React from "react";

export type TInputProps = {
  name: string;
  label: string;
  placeholder: string;
  control: any;
} & HTMLInputElement;

export type TFormField = {
  name: string;
  nameLabel?: string;
  description?: string;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
};

export type TTypography = {
  label?: string;
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface TUser {
  accessToken: string;
  email: string;
}

export type LoginPayload = {
  email: string;
  password: string;
};

export interface IUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  name: string;
  gender: string;
  birthday: Date;
  url: string;
  balance: number;
}

export interface ITeam {
  name: string;
  logo: React.ElementType;
  plan: string;
}

export interface IBaseNavItem {
  title: string;
  badge?: string;
  icon?: React.ElementType;
}

export type TNovel = {
  id: number;
  title: string;
  author: string;
  description: string;
  genre: string;
  coverImage: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
};

export type TTypeNovel = {
  id: number;
  title: string;
  genre: string;
  description: string;
  type_novel: string;
  main_character: string;
  world_setting: string;
  liu_faction: string;
  terms: boolean;
  author: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  image: string;
  number: number;
  url: string;
};

type TTData = {
  label: string;
  value: string;
};

export type TTableProps = {
  data: TTData[];
  children: React.ReactNode;
  isLoading: boolean;
};

export interface INovel {
  id: number;
  title: string;
  author: string;
  description: string;
  genre: string;
  type_novel: string;
  main_character: string;
  world_setting: string;
  liu_faction: string;
  terms: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}

export interface IChapter {
  title: string;
  content: string;
  slug: string;
}

export interface IAccount {
  name?: string;
  url?: string;
  gender?: string;
  birthday?: string;
}

export interface IUploadAvatar {
  file: File;
  fileType: string;
  fileName: string;
}

export interface IUpdateUser {
  name?: string;
  url?: string;
  gender?: string;
  birthday?: string;
  id: number;
  email?: string;
  password?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IResultUser {
  accessToken: string;
  email: string;
}

export interface IChapters {
  id: number;
  title: string;
  content: string;
  number: number;
  createdAt: Date;
  updatedAt: Date;
  novelId: number;
  author: string;
}

export interface IResultChapters {
  data: IChapters[];
  total: number;
  page: number;
  lastPage: number;
}

export interface IGoogle {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  nbf: number;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
  jti: string;
}

export interface IGoogleAuth {
  email: string;
  name: string;
  provider: string;
  url: string;
}

export interface ICreator {
  id: number;
  name: string;
  avatar: string;
}

export interface IComments {
  id: number;
  content: string;
  creator: ICreator;
  createdAt: Date;
  updatedAt: Date;
  novelId: number;
  userId: number;
}

export interface IResultComments {
  data: IComments[];
  total: number;
  page: number;
  lastPage: number;
}

export interface ICommentPayload {
  content: string;
  creator: ICreator;
  novelId: number;
}

export interface IPaymentPayload {
  order_description: string;
  order_amount: string;
  vnpOrderId: string;
  terms: boolean;
  merchant: string;
}

export type TTypeSelectProps = {
  data: TTData[];
  placeholder: string;
} & SelectProps;

export interface IReadingHistories {
  id: number;
  name: string;
  link: string;
  userId: number;
  chapterId: number;
  novelId: number;
  createdAt: Date;
}
