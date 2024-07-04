import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './common/Header';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Loder from './common/Loder';
import LastFooter from './common/LastFooter';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading ? (
        <Loder />
      ) : (
        <>
          <Header />
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
          <LastFooter />
        </>
      )}
    </>
  );
}

export default App;
