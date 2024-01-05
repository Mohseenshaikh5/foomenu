import React from 'react';
import { Inter } from 'next/font/google';
import Navbar from './navbar';
import Footer from './footer';
import { ToastContainer, toast } from 'react-toastify';

import Providers from './redux/providers';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <Navbar />
      <Providers>{children}</Providers>
      {/* <Footer /> */}
      <ToastContainer />
    </body>
  </html>
);

export default RootLayout;
