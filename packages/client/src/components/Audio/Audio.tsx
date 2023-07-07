import { FC, useEffect, useRef } from 'react';

import { soundActions } from '@store/slices/sound/soundSlice';

import { useAppDispatch } from '@utils/useAppDispatch';
import { useAppSelector } from '@utils/useAppSelector';

import volumeMinus from '@assets/images/icons/volume-minus.svg';
import volumeOff from '@assets/images/icons/volume-off.svg';
import volumeOn from '@assets/images/icons/volume-on.svg';
import volumePlus from '@assets/images/icons/volume-plus.svg';
import soundPath from '@assets/media/sound.mp3';

const roundToOne = (number: number) => {
  return Math.round(number * 10) / 10;
};

export const Audio: FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const isPlay = useAppSelector((state) => state.sound.isPlay);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isPlay) {
      audioRef.current?.play();
    }
  }, [isPlay]);

  useEffect(() => {
    const ref = audioRef.current;
    const handleTrackEnded = () => {
      ref?.play();
    };
    if (ref) {
      ref.addEventListener('ended', handleTrackEnded);
    }

    return () => {
      if (ref) {
        ref.removeEventListener('ended', handleTrackEnded);
      }
    };
  }, []);

  const handleSoundPlaySwitch = () => {
    if (isPlay) {
      audioRef.current?.pause();
      dispatch(soundActions.switchSoundPlay(false));
    } else {
      audioRef.current?.play();
      dispatch(soundActions.switchSoundPlay(true));
    }
  };

  const handleVolumeMinus = () => {
    if (audioRef.current && roundToOne(audioRef.current?.volume) !== 0.0) {
      audioRef.current.volume -= 0.1;
    }
  };

  const handleVolumePlus = () => {
    if (audioRef.current && roundToOne(audioRef.current?.volume) !== 1.0) {
      audioRef.current.volume += 0.1;
    }
  };

  return (
    <>
      <div>
        <div className="fixed top-20 right-10">
          <div>
            <img
              alt="sound"
              className="cursor-pointer h-9 w-9 bg-slate-200 hover:bg-slate-300 rounded-t-full"
              onClick={handleSoundPlaySwitch}
              src={isPlay ? volumeOn : volumeOff}
            />
          </div>
          <div className="flex justify-around">
            <img
              alt="minus"
              className="cursor-pointer h-4 w-4 bg-slate-200 hover:bg-slate-300 rounded-bl-lg grow"
              onClick={handleVolumeMinus}
              src={volumeMinus}
            />
            <img
              alt="plus"
              className="cursor-pointer h-4 w-4 bg-slate-200 hover:bg-slate-300 rounded-br-lg grow"
              onClick={handleVolumePlus}
              src={volumePlus}
            />
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={soundPath} />
    </>
  );
};
