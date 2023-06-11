import { Component, ErrorInfo } from 'react';

import { UnexpectedError } from '../../components/UnexpectedError/UnexpectedError';
import { TErrorBoundaryProps, TErrorBoundaryState } from './types';

export class ErrorBoundary extends Component<TErrorBoundaryProps, TErrorBoundaryState> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <UnexpectedError />;
    }

    return children;
  }
}
