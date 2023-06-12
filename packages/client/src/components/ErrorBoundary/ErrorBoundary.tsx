import { Component, ErrorInfo, PropsWithChildren } from 'react';

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
        <div className="h-screen flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8 border border-gray-100 p-5 shadow-lg">
            <p className="text-lg font-medium leading-8 text-rose-500">
              Произошла непредвиденная ошибка
            </p>
            <button className="btn btn-primary ml-3" onClick={window.location.reload}>
              Обновить страницу
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
