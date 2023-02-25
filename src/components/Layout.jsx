import React from 'react'

import Navbar from './Navbar';
import Footer from './Footer';

function Layout({children}) {
  return (
    <div className="px-24 py-3">
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout