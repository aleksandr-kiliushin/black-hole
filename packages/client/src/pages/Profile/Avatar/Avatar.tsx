import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IAvatarProps } from './types';
import { UserApi } from '../../../api/UserApi/UserApi';

export const Avatar = ({ avatar, fetchUserInfo }: IAvatarProps) => {
  const [visibleFormAvatar, setVisibleFormAvatar] = useState(false);
  const { register, handleSubmit } = useForm<{ picture: FileList }>();

  const onSubmit = (data: { picture: FileList }) => {
    const formData = new FormData();
    formData.append('avatar', data.picture[0]);

    const fetchServerData = async () => {
      const response = await UserApi.changeAvatar(formData);
      if (response.status === 200) {
        fetchUserInfo();
        handleVisibleFormAvatar();
      }
    };

    fetchServerData();
  };

  const handleVisibleFormAvatar = () => {
    setVisibleFormAvatar(prev => !prev);
  };

  return (
    <div className="flex flex-col justify-center items-center flex-wrap">
      <div className="flex justify-center align-middle flex-wrap w-32 h-32 bg-slate-50 rounded-full relative overflow-hidden">
        <img
          src={`https://ya-praktikum.tech/api/v2/resources${avatar}`}
          alt="avatar"
          className="max-h-full max-w-full hover:bg-opacity-1 rounded-full hover:opacity-70 cursor-pointer"
          onClick={handleVisibleFormAvatar}
        />
      </div>
      {visibleFormAvatar && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('picture')} type="file" />
          <button className="text-white btn-primary">Отправить</button>
        </form>
      )}
    </div>
  );
};
