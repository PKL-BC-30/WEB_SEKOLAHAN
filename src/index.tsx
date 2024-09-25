/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
import SideNavbar from './Admin/SideBar & Navbar-admin/SideNavbar';
import DashboardUser from './User/Dashboard/DashboardUser';






const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router>
      
      <Routes>
      <Route path="/Dashboard-admin" element={<SideNavbar/>} />
        <Route path="/admin" element={<App />} />     

        <Route path="/Dashboard-user" element={<DashboardUser/>} />
      </Routes>

    </Router>
  ),
  root,
);
