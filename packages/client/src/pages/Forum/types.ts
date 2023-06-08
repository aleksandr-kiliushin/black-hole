import { Dispatch, SetStateAction } from 'react';

export interface NewTopicProps {
  setIsNewTopicOpen: Dispatch<SetStateAction<boolean>>;
}

export interface MessagesTypes {
  author: string;
  content: string;
  time: string;
  id: string;
}

export interface TopicTypes {
  title: string;
  author: string;
  answers: number;
  lastPublic: { time: string; author: string };
  id: string;
}

export interface ThemeTypes {
  title: string;
  description: string;
  countOfTopics: number;
  countOfAnswers: number;
  id: string;
}
