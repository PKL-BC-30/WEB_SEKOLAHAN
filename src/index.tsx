/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
import SideNavbar from './Wb_Sekolahan/Admin/SideBar & Navbar-admin/SideNavbar';

//user
import DashboardUser from './Wb_Sekolahan/User/Dashboard/DashboardUser';
import Absensi from './Wb_Sekolahan/User/Absensi/absen';
import Penanggalan from './Wb_Sekolahan/User/Kalender/calendar';
import Jadwal from './Wb_Sekolahan/User/Akademik/Jadwal Pelajaran/jadwal';
import Tugas from './Wb_Sekolahan/User/Akademik/Penilaian dan Tugas/PenilaiandanTugas';
import TranscriptGrades from './Wb_Sekolahan/User/Akademik/Transkrip Nilai/TranskripNilai';







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
        <Route path="/Absensi-user" element={<Absensi/>} />
        <Route path="/Kalender-user" element={<Penanggalan/>} />
        <Route path="/Jadwal-user" element={<Jadwal/>} />
        <Route path="/Penilaian&Tugas-user" element={<Tugas/>} />
        <Route path="/TranskripNilai-user" element={<TranscriptGrades/>} />
        
      </Routes>

    </Router>
  ),
  root,
);
