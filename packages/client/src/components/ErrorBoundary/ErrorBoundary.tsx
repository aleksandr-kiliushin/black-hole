import { Component, ErrorInfo, PropsWithChildren } from 'react';

import { Background } from '@components/Background';

export class ErrorBoundary extends Component<PropsWithChildren, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative flex align-middle justify-center h-screen mx-4">
          <Background />
          <div className="z-1 relative flex justify-center items-center max-w-md">
            <div className="flex flex-col justify-center items-center gap-8 overlay p-5">
              <p className="text-xl font-bold leading-8 text-rose-500 text-center">
                Упс! Кажется вы наткнулись на аномалию в нашем коде 😢
              </p>
              <p className="text-lg leading-8 text-center">
                Вместо того, чтобы позволить вам попасть в другое измерение (или, что еще хуже, в
                Internet Explorer), мы вернули вас обратно сюда
              </p>
              <p className="text-lg leading-8 text-center">
                Попробуйте обновить страницу, это должно все исправить
              </p>
              <button className="btn btn-primary ml-3" onClick={() => window.location.reload()}>
                Перезагрузить вселенную
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
