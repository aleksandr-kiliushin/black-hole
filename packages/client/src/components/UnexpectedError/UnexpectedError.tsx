import { updatePage } from '../../utils/updatePage'

export const UnexpectedError = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 border border-gray-100 p-5 shadow-lg">
        <p className="text-lg font-medium leading-8 text-rose-500">
          Произошла непредвиденная ошибка
        </p>
        <button className="ml-3 btn-primary" onClick={updatePage}>
          Обновить страницу
        </button>
      </div>
    </div>
  )
}
