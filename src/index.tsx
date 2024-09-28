/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
//SEKOLAHAN
import SideNavbar from './Wb_Sekolahan/Admin/SideBar & Navbar-admin/SideNavbar';
import Calendar from './Wb_Sekolahan/Admin/Kalender/CalendarAdmin';

//user
import DashboardUser from './Wb_Sekolahan/User/Dashboard/DashboardUser';
import Absensi from './Wb_Sekolahan/User/Absensi/absen';
import Penanggalan from './Wb_Sekolahan/User/Kalender/kalender';
import Jadwal from './Wb_Sekolahan/User/Akademik/Jadwal Pelajaran/jadwal';
import Tugas from './Wb_Sekolahan/User/Akademik/Penilaian dan Tugas/PenilaiandanTugas';
import TranscriptGrades from './Wb_Sekolahan/User/Akademik/Transkrip Nilai/TranskripNilai';


//PEMERINTAHAN
import Dashboard from './WB_Pemerintahan/Admin/Dashboard/Dahboard';
import ManajemenPemerintahDaerah from './WB_Pemerintahan/Admin/Manajemen Pemerintah Daerah/localgoverment';
import ManajemenBeritaPengumuman from './WB_Pemerintahan/Admin/Manajemen Berita dan Pengumuman/newsannouncement';
import TambahBerita from './WB_Pemerintahan/Admin/Manajemen Berita dan Pengumuman/Tambah/addnews';
import TambahLayanan from './WB_Pemerintahan/Admin/Manajemen Berita dan Pengumuman/Tambah/adddigitalservice';
import EditBerita from './WB_Pemerintahan/Admin/Manajemen Berita dan Pengumuman/Edit/editnews';
import EditLayanan from './WB_Pemerintahan/Admin/Manajemen Berita dan Pengumuman/Edit/editservice';
import Footer from './WB_Pemerintahan/User/Footer/Footer';
import DetailBerita from './WB_Pemerintahan/User/Detail Berita-user/DetailBerita';
import PemerintahDaerah from './WB_Pemerintahan/User/Profile Daerah/PemerintahDaerah';
import ProfileDaerah from './WB_Pemerintahan/User/Profile Daerah/ProfileDaerah';
import Pengaduan from './WB_Pemerintahan/User/Pengaduan_User/PengaduanUser';








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
<<<<<<< HEAD
        <Route path="/ManajemenPemerintahDaerah-admin" element={<ManajemenPemerintahDaerah/>}/>
        <Route path="/ManajemenBeritaPengumuman-admin" element={<ManajemenBeritaPengumuman/>}/>
        <Route path="/TambahBerita-admin" element={<TambahBerita/>}/>
        <Route path="/TambahLayanan-admin" element={<TambahLayanan/>}/>
        <Route path="/EditBerita-admin" element={<EditBerita/>}/>
        <Route path="/EditLayanan-admin" element={<EditLayanan/>}/>

=======
>>>>>>> 41d53d16a6555e828dda3e4093b472744b6fb2b6

        <Route path="/Dashboard-user" element={<DashboardUser/>} />
        <Route path="/Absensi-user" element={<Absensi/>} />
        <Route path="/Kalender-user" element={<Penanggalan/>} />
        <Route path="/Jadwal-user" element={<Jadwal/>} />
        <Route path="/Penilaian&Tugas-user" element={<Tugas/>} />
        <Route path="/TranskripNilai-user" element={<TranscriptGrades/>} />
        <Route path="/PemerintahDaerah-user" element={<PemerintahDaerah/>} />




        <Route path="/Dashboard-Pemerintahan" element={<Dashboard/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/DetailBerita-user" element={<DetailBerita/>}/>
        <Route path="/ProfileDaerah-user" element={<ProfileDaerah/>} />
        <Route path="/Pengaduan-user" element={<Pengaduan/>} />
        <Route path="/ManajemenPemerintahDaerah-admin" element={<ManajemenPemerintahDaerah/>}/>


      </Routes>

    </Router>
  ),
  root,
);
