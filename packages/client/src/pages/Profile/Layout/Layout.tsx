import { ILayoutProps } from './types';

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="min-h-[calc(100vh-1.75rem)] max-w-4xl my-0 mx-auto p-8 bg-white relative border border-gray-300">
      {children}
    </div>
  );
};
