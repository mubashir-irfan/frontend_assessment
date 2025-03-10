import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '.';
import { useI18n } from '../context/I18nContext';

function Layout({ children }: { children: React.ReactNode }) {
  const { dir, i18n, i18nInitialized } = useI18n();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!i18nInitialized) {
    return <div>Loading...</div>;
  }

  const getHeaderTitle = () => {
    if (location.pathname === '/settings') {
      return 'settings.settings';
    }
    return 'dashboard.overview';
  };

  return (
    <div dir={dir} className="min-h-[100vh] flex flex-col">
      <Header title={i18n.t(getHeaderTitle())} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-grow overflow-y-auto no-scrollbar">
        <div className="container h-full mx-auto max-w-[100vw] lg:max-w-[calc(100vw-13rem)] overflow-y-auto no-scrollbar p-4 lg:px-8 bg-background-light dark:bg-background-dark">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
