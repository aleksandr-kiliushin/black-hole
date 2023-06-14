import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { randomAvatarPath } from '@utils/randomAvatarPath';

import { API_BASE_URL } from '@constants';

import { userApi } from '@src/api/userApi';

import { TAvatarProps } from './types';

export const Avatar: FC<TAvatarProps> = ({ avatar, fetchUserInfo }) => {
  const [isVisibleFormAvatar, setIsVisibleFormAvatar] = useState(false);
  const { register, handleSubmit } = useForm<{ picture: FileList }>();

  const onSubmit = (data: { picture: FileList }) => {
    const formData = new FormData();
    formData.append('avatar', data.picture[0]);

    const fetchServerData = async () => {
      const response = await userApi.changeAvatar(formData);
      if (response.status === 200) {
        fetchUserInfo();
        handleVisibleFormAvatar();
      }
    };

    fetchServerData();
  };

  const handleVisibleFormAvatar = () => {
    setIsVisibleFormAvatar((prev) => !prev);
  };

  const avatarUrl = avatar ? `${API_BASE_URL}/resources${avatar}` : randomAvatarPath;

  return (
    <div className="flex flex-col justify-center items-center flex-wrap">
      <div className="flex justify-center align-middle flex-wrap w-32 h-32 bg-slate-50 rounded-full relative overflow-hidden">
        <img
          alt="avatar"
          className="max-h-full max-w-full hover:bg-opacity-1 rounded-full hover:opacity-70 cursor-pointer"
          onClick={handleVisibleFormAvatar}
          src={avatarUrl}
        />
      </div>
      {isVisibleFormAvatar && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('picture')} type="file" />
          <button className="btn btn-primary">Отправить</button>
        </form>
      )}
    </div>
  );
};
