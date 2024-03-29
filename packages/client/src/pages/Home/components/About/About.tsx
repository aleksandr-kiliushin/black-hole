import { Link } from 'react-router-dom';

import { GAME_NAME } from '@constants';

import { RoutePaths } from '@src/providers/AppRouter/constants';

export const About = () => {
  return (
    <section className="page-container flex flex-col justify-center items-center md:items-start overlay mb-6">
      <h2 className="font-black text-2xl mb-6 text-center md:text-left">
        Исследуйте неизведанные глубины {GAME_NAME}!
      </h2>
      <p className="text-base my-2 text-center md:text-left">
        {GAME_NAME} - это игра, которая предлагает вам пережить захватывающее космическое
        приключение. Окунитесь в мир, где вы можете стать самым могущественным и загадочным явлением
        вселенной - черной дырой. Это не просто игра, это путешествие, которое изменит ваше
        представление о вселенной и покажет вам, как это быть всемогущим. Приготовьтесь к
        незабываемому путешествию!
      </p>
      <Link className="btn btn-primary mt-6" to={RoutePaths.GAME_START}>
        Подробнее
      </Link>
    </section>
  );
};
