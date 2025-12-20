import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
          <div className="bg-card border border-destructive/20 p-8 rounded-2xl shadow-lg max-w-md w-full">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 text-destructive">
              <AlertTriangle size={32} />
            </div>
            <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">
              The application encountered an unexpected error. We've logged this issue.
            </p>
            
            {this.state.error && (
              <div className="bg-muted p-4 rounded-lg text-left mb-6 overflow-auto max-h-40 text-xs font-mono">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/'}
              >
                Go Home
              </Button>
              <Button 
                onClick={() => window.location.reload()}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Reload Page
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
