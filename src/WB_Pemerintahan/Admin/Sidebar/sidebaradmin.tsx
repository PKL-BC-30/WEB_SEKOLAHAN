import { createSignal } from "solid-js";
import dashboard from '../Assets/dashboardetmin.svg';
import profildaerah from '../Assets/profildaerah.svg';
import visismisi from '../Assets/visimisi.svg';
import visimisiactive from '../Assets/visimisiactive.svg';
import datadaerah from '../Assets/datadaerah.svg';
import aspirasi from '../Assets/aspirasi.svg';
import info from '../Assets/info.svg';
import infoactive from '../Assets/infoactive.svg';
import konten from '../Assets/kelolakonten.svg';
import logo from '../Assets/Bandung.svg';
import logout from '../Assets/logout.svg';
import setting from '../Assets/setting.svg';
import line from '../Assets/linepart2.svg';
import search from '../Assets/search-normals.svg';
import { useNavigate, useLocation } from "@solidjs/router";
import './sidebaradmin.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showOptions, setShowOptions] = createSignal(false);
  const [isActive, setIsActive] = createSignal(false);


  const toggleOptions = () => {
    setShowOptions(!showOptions());
  };


  const handleClickVisiMisi = () => {
    navigate('/localgovernment');
  };

  const handleClickInfoPublik = () => {
    navigate('/newsannouncement');
  };
  

  // Mendapatkan URL saat ini
  const isLocalGovernmentPage = location.pathname === "/ManajemenPemerintahDaerah-admin";
const isNewsAnnouncementPage = location.pathname === "/newsannouncement" || location.pathname === "/newsannouncement/addnews"|| location.pathname === "/newsannouncement/adddigitalservice";


  return (
    <div class="sidebar-admin">
      <div class="logo">
        <img src={logo} alt="Logo" />
        <h1>Bandung</h1>
        <p>Portal Resmi Kota Bandung</p>
      </div>
      <div class="searchbar">
        <img src={search} alt="Search" />
        <input type="text" placeholder="Cari.." />
      </div>
      <div class="sidebar-content">
        <div class="dashboard-sidebar">
          <img src={dashboard} alt="Dashboard" />
          <h4>Dashboard</h4>
        </div>
        <div class="kelolaprofil">
          <img src={profildaerah} alt="Dashboard" />
          <h4>Kelola Profil Daerah</h4>
        </div>
        <div
          class={`visimisi ${isLocalGovernmentPage ? "local-government-active" : ""}`}
          onclick={handleClickVisiMisi}
        >
          <img src={isLocalGovernmentPage ? visimisiactive : visismisi} alt="Visi Misi" />
          <h4 class={isLocalGovernmentPage ? "active" : ""}>Visi Misi</h4>
        </div>


        <div class="datadaerah" onclick={toggleOptions}>
          <img src={datadaerah} alt="Transkrip Nilai" />
          <h4>Data daerah</h4>
        </div>

        {showOptions() && (
          <div class="options-container">
            <img src={line} class="line" alt="Line" />
            <div class="options">
              <ul>
                <li><a href="/jadwal">Kelola Data Penduduk</a></li>
                <li><a href="/penilaiandantugas">Kelola Data Bantuan Sosial</a></li>
              </ul>
            </div>
          </div>
        )}

        <div
          class={`info ${isNewsAnnouncementPage ? "news-announcement-active" : ""}`} // Menambahkan kondisi aktif
          onclick={handleClickInfoPublik}
        >
          <img src={isNewsAnnouncementPage? infoactive :info} alt="Info Publik" />
          <h4>Info Publik</h4>
        </div>

        <div class="aspirasi">
          <img src={aspirasi} alt="Aspirasi Publik" />
          <h4>Aspirasi Publik</h4>
        </div>

        <div class="kelolakonten">
          <img src={konten} alt="Kelola Konten Utama" />
          <h4>Kelola Konten Utama</h4>
        </div>

        <div class="other">
          <div class="setting">
            <img src={setting} alt="Pengaturan" />
            <h4>Pengaturan</h4>
          </div>
          <div class="logout">
            <img src={logout} alt="Logout" />
            <h4>Logout</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
