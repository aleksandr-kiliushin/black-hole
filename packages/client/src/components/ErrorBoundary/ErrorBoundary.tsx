import { Component, ErrorInfo, PropsWithChildren } from 'react';

import { UnexpectedError } from './UnexpectedError';

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
      return <UnexpectedError />;
    }

    return this.props.children;
  }
}
