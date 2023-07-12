import { FC, useEffect, useState } from 'react';

import { leaderboardApi } from '@api/leaderboardApi/leaderboardApi';

import { randomAvatarPath } from '@utils/randomAvatarPath';

import { TLeaderboardItems } from './types';

export const Leaderboard: FC = () => {
  const [leaders, setLeaders] = useState<TLeaderboardItems[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    leaderboardApi
      .getLeaderBoard({
        ratingFieldName: 'score',
        cursor: (currentPage - 1) * 10,
        limit: 10,
      })
      .then((res) => {
        setLeaders(res.data);
        console.log(res.data);
      });
  }, [currentPage]);

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
        {leaders.map(
          ({ data: { userID, userDisplayName, userAvatar, score, consumedEnemies } }, place) => (
            <li className="py-2 flex text-center text-sm odd:bg-white/20" key={userID}>
              <p className="w-1/12 flex items-center justify-center">{place + 1}</p>

              <div className="w-4/12 flex items-center justify-center">
                <img
                  alt=""
                  className="h-10 w-10 rounded-full"
                  src={
                    userAvatar != null
                      ? 'https://ya-praktikum.tech/api/v2/resources/' + userAvatar
                      : randomAvatarPath
                  }
                />

                <p className="ml-2 w-5/12 text-sm font-medium text-blue-200">
                  {userDisplayName} id:{userID}
                </p>
              </div>

              <p className="w-3/12 flex items-center justify-center">{score}</p>

              <p className="w-4/12 flex items-center justify-center">{consumedEnemies}</p>
            </li>
          )
        )}
      </ul>

      <ul className="flex mt-2">
        <li
          className={
            1 === currentPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCurrentPage(1)}
        >
          1
        </li>
        <li
          className={
            2 === currentPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCurrentPage(2)}
        >
          2
        </li>
        <li
          className={
            3 === currentPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCurrentPage(3)}
        >
          3
        </li>
        <li
          className={
            4 === currentPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCurrentPage(4)}
        >
          4
        </li>
        <li
          className={
            5 === currentPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCurrentPage(5)}
        >
          5
        </li>
        <li
          className={
            6 === currentPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCurrentPage(6)}
        >
          6
        </li>
        <li
          className={
            7 === currentPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCurrentPage(7)}
        >
          7
        </li>
        <li
          className={
            8 === currentPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCurrentPage(8)}
        >
          8
        </li>
        <li
          className={
            9 === currentPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCurrentPage(9)}
        >
          9
        </li>
        <li
          className={
            10 === currentPage
              ? 'p-2 mr-1 bg-white/50 rounded-sm'
              : 'p-2 mr-1 cursor-pointer rounded-sm hover:bg-white/30'
          }
          onClick={() => setCurrentPage(10)}
        >
          10
        </li>
      </ul>
    </section>
  );
};
