import background from '../../assets/images/backgrounds/background.jpg';

export const Background = () => {
  return (
    <img
      alt="бэкграунд"
      className="fixed z-0 top-0 left-0 w-screen h-screen object-cover"
      src={background}
    />
  );
};
