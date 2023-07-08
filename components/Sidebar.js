'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const Sidebar = ({ children }) => {
  const currentRoute = usePathname();
  return (
    <div className="container">
      {/* <nav className="">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/info">Info</Link>
          </li>
        </ul>
      </nav> */}

      <div className="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-50 h-full text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link href="/" className={currentRoute == '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className={currentRoute == '/project' ? 'active' : ''}
              >
                Project
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
