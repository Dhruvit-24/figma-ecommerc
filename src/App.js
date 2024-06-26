import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import Navbar from './common/Navbar';
import Footer from './common/Footer'


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
