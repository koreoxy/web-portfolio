import React from 'react';
import Sidebar from './Sidebar';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="px-4 border border-white">
        <div className="container mx-auto">
          <div className="pt-10">
            <Image src="/img/logo.png" width={90} height={90} alt="logo" />
          </div>
          <Sidebar>
            <main>{children}</main>
          </Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Layout;
