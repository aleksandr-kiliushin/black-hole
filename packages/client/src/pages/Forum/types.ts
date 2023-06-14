import { Dispatch, SetStateAction } from 'react';

export interface INewTopicProps {
  setIsNewTopicOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IMessagesTypes {
  author: string;
  content: string;
  time: string;
  id: string;
}

export interface ITopicTypes {
  title: string;
  author: string;
  answers: number;
  lastPublic: { time: string; author: string };
  id: string;
}

export interface IThemeTypes {
  title: string;
  description: string;
  countOfTopics: number;
  countOfAnswers: number;
  id: string;
}
