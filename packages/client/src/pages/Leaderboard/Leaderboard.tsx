import { FC } from 'react';

import { Header } from '@components/Header';

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    score: 2000,
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    score: 1800,
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    score: 1344,
  },
];

export const Leaderboard: FC = () => {
  return (
    <>
      <h1 className="font-extrabold text-4xl">Leaderboard</h1>
      <ul className="divide-y divide-gray-200">
        {people.map((person, i) => (
          <li
            className="py-4 px-5 w-full flex flex-col sm:grid sm:grid-cols-[min-content_40px_30%_1fr_1fr] items-center gap-x-5"
            key={person.email}
          >
            <p>{i + 1}.&nbsp;</p>
            <img alt="" className="h-10 w-10 rounded-full" src={person.image} />
            <div>
              <p className="text-sm mx-auto sm:m-0 w-fit font-medium text-gray-900">
                {person.name}
              </p>
              <p className="text-sm text-gray-500">{person.email}</p>
            </div>
            <p className="mx-auto">Очки: {person.score}</p>
            <button className="btn btn-primary w-1/2 sm:w-full sm:ml-auto">Like</button>
          </li>
        ))}
      </ul>
    </>
  );
};
