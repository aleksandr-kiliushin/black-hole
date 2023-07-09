import { FC, useEffect, useState } from 'react';

import { leaderboardApi } from '@api/leaderboardApi/leaderboardApi';

import { randomAvatarPath } from '@utils/randomAvatarPath';

import { TLeaderboardItems } from './types';

export const Leaderboard: FC = () => {
  const [list, setList] = useState<TLeaderboardItems[]>([]);
  const [correctPage, setCorrectPage] = useState<number>(1);

  useEffect(() => {
    leaderboardApi
      .getLeaderBoard({
        ratingFieldName: 'score',
        cursor: (correctPage - 1) * 10,
        limit: 10,
      })
      .then((res) => setList(res.data));
  }, [correctPage]);

  return (
    <section className="overlay page-container my-6">
      <h1 className="mb-2 text-4xl font-black text-center md:text-start">Лидеры</h1>

      <ul className="flex my-4 text-center text-sm">
        <li className="w-1/12 flex items-center justify-center">№</li>
        <li className="w-4/12 flex items-center justify-center">Никнейм</li>
        <li className="w-3/12 flex items-center justify-center">Счёт</li>
        <li className="w-4/12 flex justify-center items-center">Поглощено объектов</li>
      </ul>

      <ul>
        {list.map(({ data: { userID, userDisplayName, score, consumedEnemies } }, place) => (
          <li className="py-2 flex text-center text-sm odd:bg-white/20" key={userID}>
            <p className="w-1/12 flex items-center justify-center">{place + 1}</p>

            <div className="w-4/12 flex items-center justify-center">
              <img alt="" className="h-10 w-10 rounded-full" src={randomAvatarPath} />

              <p className="ml-2 w-5/12 text-sm font-medium text-blue-200">
                {userDisplayName} id:{userID}
              </p>
            </div>

            <p className="w-3/12 flex items-center justify-center">{score}</p>

            <p className="w-4/12 flex items-center justify-center">{consumedEnemies}</p>
          </li>
        ))}
      </ul>

      <ul className="flex mt-2">
        <li
          className={
            1 === correctPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCorrectPage(1)}
        >
          1
        </li>
        <li
          className={
            2 === correctPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCorrectPage(2)}
        >
          2
        </li>
        <li
          className={
            3 === correctPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCorrectPage(3)}
        >
          3
        </li>
        <li
          className={
            4 === correctPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCorrectPage(4)}
        >
          4
        </li>
        <li
          className={
            5 === correctPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCorrectPage(5)}
        >
          5
        </li>
        <li
          className={
            6 === correctPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCorrectPage(6)}
        >
          6
        </li>
        <li
          className={
            7 === correctPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCorrectPage(7)}
        >
          7
        </li>
        <li
          className={
            8 === correctPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCorrectPage(8)}
        >
          8
        </li>
        <li
          className={
            9 === correctPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCorrectPage(9)}
        >
          9
        </li>
        <li
          className={
            10 === correctPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCorrectPage(10)}
        >
          10
        </li>
      </ul>
    </section>
  );
};
