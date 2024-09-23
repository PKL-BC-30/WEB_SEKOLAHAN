import { Component, createSignal, JSX } from 'solid-js';
import styles from './SideNavbar.module.css';
import IconDashboard from '../../Admin/AssetAdmin/IconDashboard.svg';
import IconDataSiswa from '../../Admin/AssetAdmin/IconDataSiswa.svg';
import IconEkstrakulikuler from '../../Admin/AssetAdmin/IconEkstrakulikuler.svg';
import IconDataGuru from '../../Admin/AssetAdmin/IconDataGuru.svg';
import IconTranskripNilai from '../../Admin/AssetAdmin/IconTranskripNilai.svg';
import IconPengaturan from '../../Admin/AssetAdmin/IconPengaturan.svg';
import IconKeluar from '../../Admin/AssetAdmin/IconKeluar.svg';
import IconJadwalPelajaran from '../../Admin/AssetAdmin/IconJadwalPelajaran.svg';
import TranskripNilai from '../../Admin/TranskripNilai-admin/TranskripNilai';
import Dashboard from '../Dashboard/Dashboard-admin';
import DataEkstrakulikuler from '../Data Ekstrakulikuler/DataEkstrakulikuler';
import DataGuru from '../Data Guru/DataGuru';
import JadwalPelajaran from '../Jadwal Pelajaran/JadwalPelajaran';
import Profile from '../Profile/Profile-admin';
import { DataSiswa } from '../Data Siswa/DataSiswa';

const SideNavbar: Component = () => {
  const [activeItem, setActiveItem] = createSignal('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: IconDashboard },
    { name: 'Data Siswa', icon: IconDataSiswa },
    { name: 'Ekstrakulikuler', icon: IconEkstrakulikuler },
    { name: 'Data Guru', icon: IconDataGuru },
    { name: 'Transkrip Nilai', icon: IconTranskripNilai },
    { name: 'Jadwal Pelajaran', icon: IconJadwalPelajaran },
    { name: 'Profile' },
  ];

  const renderContent = (): JSX.Element => {
    switch (activeItem()) {
      
      case 'Transkrip Nilai':
        return <TranskripNilai />;

        case 'Dashboard':
        return <Dashboard />;

        case 'Ekstrakulikuler':
        return <DataEkstrakulikuler />;

        case 'Data Guru':
          return <DataGuru />;

        case 'Jadwal Pelajaran':
            return <JadwalPelajaran />;
        
        case 'Profile':
            return <Profile />;

        case 'Data Siswa':
          return <DataSiswa/>;
      // Add other cases for different menu items
      default:
        return <div class="content-Admin">Content for {activeItem()} goes here</div>;
    }
  };

  return (
    <div class={styles.container}>
      <div class={styles.sidebar}>
        <h1 class={styles.title}>Untitle</h1>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li>
                <a
                  href="#"
                  class={`${styles.menuItem} ${activeItem() === item.name ? styles.active : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item.name);
                  }}
                >
                  <img src={item.icon} alt={item.name} />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div class={styles.bottomNav}>
          <a href="#" class={styles.menuItem}>
            <img src={IconPengaturan} alt="Pengaturan" />
            Pengaturan
          </a>
          <a href="#" class={`${styles.menuItem} ${styles.logout}`}>
            <img src={IconKeluar} alt="Keluar" />
            Keluar
          </a>
        </div>
      </div>
      <div class={styles.mainContent}>
        <header class={styles.navbar}>
          <div class={styles.searchBar}>
            <input type="text" placeholder="Search" />
          </div>
          <div class={styles.userInfo}>
            <span class={styles.notificationBadge}>2</span>
            <select class={styles.languageSelect}>
              <option value="en">English</option>
            </select>
            <div class={styles.userProfile}>
              <img src="" alt="User" />
              <span>PRIYONO</span>
              <span>Admin</span>
            </div>
          </div>
        </header>
        {renderContent()}
      </div>
    </div>
  );
};

export default SideNavbar;
