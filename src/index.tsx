/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
import Dashboard from './Admin/Dashboard/Dashboard-admin';
import DataGuru from './Admin/Data Guru/DataGuru';
import DataEkstrakurikuler from './Admin/Data Ekstrakulikuler/DataEkstrakulikuler';
import JadwalPelajaran from './Admin/Jadwal Pelajaran/JadwalPelajaran';


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
         <Route path="/DataEkstrakurikuler-admin" element={<DataEkstrakurikuler/>} />
         <Route path="/DataGuru-admin" element={<DataGuru/>} />
         <Route path="/JadwalPelajaran-admin"element={<JadwalPelajaran/>}/>
      
      </Routes>

    </Router>
  ),
  root,
);
