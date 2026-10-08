import './clear-cache';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { LanguageProvider } from './contexts/LanguageContext';

function mountApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', mountApp, { once: true });
      return;
    }
    console.error("Could not find root element to mount to");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (err: unknown) {
    console.error("Fatal error during React root mounting:", err);
    const message = err instanceof Error ? err.message : String(err);
    rootElement.innerHTML = `
      <div style="min-height:100vh;background:#0f172a;color:#f8fafc;display:flex;align-items:center;justify-content:center;padding:24px;text-align:center;font-family:system-ui,-apple-system,sans-serif;">
        <div style="background:#1e293b;border:1px solid #334155;border-radius:16px;padding:32px 24px;max-width:380px;width:100%;box-shadow:0 20px 25px -5px rgba(0,0,0,0.5);">
          <div style="font-size:36px;margin-bottom:12px;">🏛️</div>
          <h2 style="font-size:20px;font-weight:700;color:#fbbf24;margin-bottom:8px;">US Presidents Timeline</h2>
          <p style="color:#94a3b8;font-size:14px;line-height:1.5;margin-bottom:16px;">We encountered an issue launching the app.</p>
          <pre style="background:#020617;color:#f87171;padding:12px;border-radius:8px;font-size:12px;text-align:left;overflow-x:auto;margin-bottom:20px;white-space:pre-wrap;">${message}</pre>
          <button onclick="try{localStorage.clear();sessionStorage.clear();}catch(x){}location.reload();" style="background:#3b82f6;color:#ffffff;border:none;font-weight:700;font-size:15px;padding:12px 24px;border-radius:10px;cursor:pointer;width:100%;">Reload App</button>
        </div>
      </div>
    `;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp, { once: true });
} else {
  mountApp();
}
