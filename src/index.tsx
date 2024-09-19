/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
import Dashboard from './Admin/Dashboard/Dashboard-admin';
import DataGuru from './Admin/Data Guru/DataGuru';
import DataSiswa from './Admin/Data Ekstrakulikuler/DataEkstrakulikuler';


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
        <Route path="/admin" element={<App />} />
         <Route path="/Dashboard-admin" element={<Dashboard />} />
         <Route path="/DataSiswa-admin" element={<DataSiswa/>} />
         <Route path="/DataGuru-admin" element={<DataGuru/>} />
      </Routes>

    </Router>
  ),
  root,
);
