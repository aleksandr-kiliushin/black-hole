import { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Header } from '@components/Header';

import { NewTopic } from './components/NewTopic';
import { ITopicTypes } from './types';

export const TopicList: FC = () => {
  const testTopicList = [
    {
      title: 'Некоректное начисление бонусов за матч',
      author: 'FlexK1ngN1TTV',
      answers: 1,
      lastPublic: {
        time: '4 часа назад',
        author: 'Техническая поддержка',
      },
      id: '8bxnesczx4',
    },
    {
      title: 'Баг в меню, не работает кнопка играть',
      author: 'Falepton',
      answers: 5,
      lastPublic: {
        time: '5 часа назад',
        author: 'Техническая поддержка',
      },
      id: 'ie9q2fkvu8',
    },
    {
      title: 'Как пройти финальный уровень?',
      author: 'Dalsem',
      answers: 2,
      lastPublic: {
        time: '10 часов назад',
        author: 'Пользователь: Falepton',
      },
      id: 'afwnh0lmjv',
    },
    {
      title: 'Персонаж телепортируется во время игры',
      author: 'Copatich',
      answers: 0,
      lastPublic: {
        time: '1 день назад',
        author: '',
      },
      id: 'e7orkus6qo',
    },
    {
      title: 'Люблю вашу игру',
      author: 'Piligrim',
      answers: 1,
      lastPublic: {
        time: '2 дня назад',
        author: 'Техническая поддержка',
      },
      id: '43so7tojfk',
    },
  ];

  const { idTopicList } = useParams();
  const [topic] = useState<ITopicTypes[]>(testTopicList);
  const [isNewTopicOpen, setIsNewTopicOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="font-mono" style={{ width: 1280, margin: '50px auto' }}>
        <div className="w-full py-2 flex">
          <h1 className="w-10/12 text-3xl text-slate-700">Раздел: (название раздела)</h1>
          <button className="w-2/12 btn-primary" onClick={() => setIsNewTopicOpen(true)}>
            Создать новую тему
          </button>
        </div>
        <nav className="flex text-base px-2 py-2 font-bold uppercase">
          <div className="w-6/12 text-center">тема</div>
          <div className="w-4/12 text-center">ответы</div>
          <div className="w-2/12">последняя публикация</div>
        </nav>
        {topic.map(({ title, answers, author, lastPublic, id }) => {
          return (
            <div className="flex cursor-pointer px-2 odd:bg-slate-200" key={id}>
              <div className="w-1/12">
                <img
                  alt="Author_Icon"
                  className="h-24"
                  src="https://api.mozambiquehe.re/assets/ranks/gold1.png"
                />
              </div>
              <div className="w-5/12">
                <Link className="btn btn-primary" to={`/forum/${idTopicList}/topics/${id}`}>
                  <div className=" text-lg text-black font-bold hover:underline">{title}</div>
                </Link>
                <div className="text-xs mt-4 flex ">
                  <div className="text-black">Автор:</div>
                  <div className="font-bold text-indigo-600">{author}</div>
                </div>
              </div>
              <div className="w-4/12 flex items-center justify-center text-2xl font-bold text-black">
                {answers}
              </div>
              <div className="w-2/12 flex flex-col justify-center">
                <div className="text-black">Новое:</div>
                <div className="text-slate-500">{lastPublic.time}</div>
                <div>{lastPublic.author}</div>
              </div>
            </div>
          );
        })}
      </main>
      {isNewTopicOpen === true && <NewTopic setIsNewTopicOpen={setIsNewTopicOpen} />}
    </>
  );
};
