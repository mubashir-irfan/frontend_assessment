
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights as VercelSpeedInsights } from '@vercel/speed-insights/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { I18nProvider } from './context/I18nContext';
import { ThemeProvider } from '../src/context';
import { Layout } from './components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      refetchOnReconnect: false,
      staleTime: 0,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nProvider>
          <div className="App">
            <Router>
              <Routes>
                <Route
                  path="/*"
                  element={
                    <Layout>
                      <VercelAnalytics />
                      <VercelSpeedInsights />
                      <Routes>
                        {/* <Route path="/" element={<Dashboard />} /> */}
                      </Routes>
                    </Layout>
                  }
                />
              </Routes>
            </Router>
          </div>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
