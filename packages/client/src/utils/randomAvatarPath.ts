// Этот http api возвращает рандомный аватар. Можно использовать, как постоянный аватар профиля или как заглушу аватарки пользователя, который не загрузил ничего
export const randomAvatarPath = `https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${Math.random()}&radius=20`;
