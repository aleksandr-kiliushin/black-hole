import { FC } from 'react';
import { Navbar } from '../../components/Navbar';
import { useState } from 'react';
import { GAME_NAME } from '../../utils/global';
import { AppLink } from '../../components/AppLink/AppLink';
import { Header } from '../../components/Header';

export const ForumList: FC = () => {
  const testList = [
    {
      title: 'Обсуждение игровых моментов',
      description:
        'Зарегистрируйтесь на форуме сообщества Apex Legends для обсуждения информации об игре, кодов предзаказа, обновлений и списков изменений.',
      countOfThemes: 2358,
      countOfAnswers: 18649,
      id: '2wtqosme50',
    },
    {
      title: 'Технические вопросы',
      description:
        'Проблема с активацией кода или подключением? Низкая производительность? Сбой, зависание или ошибка? Ищите решения проблем в нашем сообществе.',
      countOfThemes: 8114,
      countOfAnswers: 34412,
      id: 'uv2da0x5fz',
    },
    {
      title: 'Сообщения об ошибках',
      description:
        'Рассказывайте об ошибках, чтобы получить помощь сообщества.',
      countOfThemes: 2341,
      countOfAnswers: 7808,
      id: '95pkt1q2iy',
    },
  ];

  const [theme, setTheme] = useState({ data: testList });

  return (
    <>
      <Header />
      <main style={{ width: 1280, margin: '50px auto' }}>
        <h1 className="text-4xl py-3 text-slate-700">Сообщество {GAME_NAME}</h1>

        <div className="border-y border-slate-700 ">
          <div className="flex text-sm font-bold uppercase py-2 px-2">
            <div className="w-10/12">Название и описание форума</div>
            <div className="w-1/12 text-center">темы</div>
            <div className="w-1/12 text-center">ответы</div>
          </div>

          <div>
            {theme.data.map(
              ({ title, description, countOfThemes, countOfAnswers, id }) => {
                return (
                  <div className="odd:bg-slate-200 px-2">
                    <AppLink to={`/forum/${id}/topics`} key={id}>
                      <div className="py-3 flex cursor-pointer text-black">
                        <div className="w-10/12">
                          <div className="text-indigo-600 text-2xl hover:underline">
                            {title}
                          </div>
                          <div className="forum-item-discribe h-12">
                            {description}
                          </div>
                        </div>
                        <div className="w-1/12 flex justify-center items-center font-bold">
                          {countOfThemes}
                        </div>
                        <div className="w-1/12 flex justify-center items-center font-bold">
                          {countOfAnswers}
                        </div>
                      </div>
                    </AppLink>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </main>
    </>
  );
};
