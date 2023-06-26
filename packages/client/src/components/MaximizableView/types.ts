export type TMaximizableViewProps = {
  backgroundColor: string;
};

export type TFullScreenElementProp =
  | 'fullscreenElement'
  | 'mozFullScreenElement'
  | 'msFullscreenElement'
  | 'webkitFullscreenElement';

export type TFsDocument = Document & {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
};
