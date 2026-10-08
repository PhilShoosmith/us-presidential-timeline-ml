import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in React tree:", error, errorInfo);
  }

  private handleReload = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {}
    if (typeof window !== 'undefined' && 'caches' in window) {
      try {
        caches.keys().then((keys) => {
          keys.forEach((key) => caches.delete(key));
        });
      } catch {}
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
            <div className="text-4xl mb-4">🏛️</div>
            <h1 className="text-xl sm:text-2xl font-bold text-amber-400 mb-2">US Presidents Timeline</h1>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              We encountered an issue loading this screen. Tap below to reload.
            </p>
            {this.state.error && (
              <pre className="text-xs text-red-400 bg-slate-950 p-3 rounded-lg overflow-x-auto text-left mb-6 max-h-32">
                {this.state.error.message || String(this.state.error)}
              </pre>
            )}
            <button
              onClick={this.handleReload}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95"
            >
              Reload App
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
