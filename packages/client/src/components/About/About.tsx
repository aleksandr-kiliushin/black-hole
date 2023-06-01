import React from 'react'
import { GAME_NAME, Routes } from '../../utils/global'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="container m-auto max-w-screen-xl w-11/12 flex flex-col justify-center items-center md:items-start pb-8">
      <h2 className="font-black m-0 text-2xl my-6 text-center md:text-left">
        Исследуйте неизведанные глубины {GAME_NAME}!
      </h2>
      <p className="text-base my-2 text-zinc-900 text-center md:text-left">
        {GAME_NAME} - это игра, которая предлагает вам пережить захватывающее
        космическое приключение. Окунитесь в мир, где вы можете стать самым
        могущественным и загадочным явлением вселенной - черной дырой. Это не
        просто игра, это путешествие, которое изменит ваше представление о
        вселенной и покажет вам, как это быть всемогущим. Приготовьтесь к
        незабываемому путешествию!
      </p>
      <Link to={Routes.GAME_START} className="btn-primary my-6">
        Подробнее
      </Link>
    </section>
  )
}

export default About
