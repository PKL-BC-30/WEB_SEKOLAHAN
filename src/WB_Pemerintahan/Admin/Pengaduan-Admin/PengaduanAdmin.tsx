import { createSignal, For, onMount } from 'solid-js';
import styles from './PengaduanAdmin.module.css';
import IconEditStatus from '../../Admin/Pengaduan-Admin/iconEditStatus.svg';
import IconArrowDownStatus from '../../Admin/Pengaduan-Admin/iconArrowDownStatus.svg';
import IconPesan from '../../Admin/Pengaduan-Admin/iconPesanBalasan.svg';
import SidebarAdmin from '../Sidebar/sidebaradmin';
import NavbarAdmin from '../Navbar/navbaradmin';

const Pengaduan = () => {
  const [pengaduan, setPengaduan] = createSignal([]);
  const [balasan, setBalasan] = createSignal({});
  const [showStatusDropdown, setShowStatusDropdown] = createSignal({});

  onMount(() => {
    const storedReports = JSON.parse(localStorage.getItem("reports") || "[]");
    setPengaduan(storedReports);
  });

  const toggleStatusDropdown = (id) => {
    setShowStatusDropdown(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleStatusChange = (id, newStatus) => {
    setPengaduan(prev => prev.map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    ));
    setShowStatusDropdown(prev => ({ ...prev, [id]: false }));
    
    // Update localStorage
    const updatedReports = pengaduan().map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    );
    localStorage.setItem("reports", JSON.stringify(updatedReports));
  };

  const handleBalasanChange = (id, value) => {
    setBalasan(prev => ({ ...prev, [id]: value }));
  };

  const handleBalasanSubmit = (id) => {
    console.log(`Balasan untuk pengaduan ${id}: ${balasan()[id]}`);
    setBalasan(prev => ({ ...prev, [id]: '' }));
  };

  return (
    <div class={styles.pageContainer}>
      <SidebarAdmin />
      <div class={styles.mainContent}>
        <NavbarAdmin />
        <div class={styles.pengaduanContainer}>
          <For each={pengaduan()}>
            {(item) => (
              <div class={styles.pengaduanCard}>
                <div class={styles.gambarContainer}>
                  <img src={item.fileName} alt="Gambar Aduan" class={styles.gambarAduan} />
                </div>
                <div class={styles.infoContainer}>
                  <div class={styles.pengaduanInfo}>
                    <div class={styles.infoItem}>
                      <span class={styles.label}>Nama:</span>
                      <span class={styles.value}>{item.username}</span>
                    </div>
                    <div class={styles.infoItem}>
                      <span class={styles.label}>Judul Laporan:</span>
                      <span class={styles.value}>{item.title}</span>
                    </div>
                    <div class={styles.infoItem}>
                      <span class={styles.label}>Tanggal:</span>
                      <span class={styles.value}>{item.date}</span>
                    </div>
                    <div class={styles.infoItem}>
                      <span class={styles.label}>Deskripsi Masalah:</span>
                      <span class={styles.value}>{item.description}</span>
                    </div>
                    <div class={styles.infoItem}>
                      <span class={styles.label}>Lokasi Masalah:</span>
                      <span class={styles.value}>{item.location}</span>
                    </div>
                  </div>
                  <div class={styles.statusContainer}>
                    <button class={styles.statusButton} onClick={() => toggleStatusDropdown(item.id)}>
                      <img src={IconEditStatus} alt="Edit Status" />
                      <span>{item.action}</span>
                      <img src={IconArrowDownStatus} alt="Arrow Down" />
                    </button>
                    {showStatusDropdown()[item.id] && (
                      <div class={styles.statusDropdown}>
                        <div onClick={() => handleStatusChange(item.id, 'not_processed')}>Menunggu</div>
                        <div onClick={() => handleStatusChange(item.id, 'processing')}>Diproses</div>
                        <div onClick={() => handleStatusChange(item.id, 'completed')}>Selesai</div>
                      </div>
                    )}
                  </div>
                  <div class={styles.balasanContainer}>
                    <img src={IconPesan} alt="Pesan" class={styles.iconPesan} />
                    <input 
                      type="text" 
                      placeholder="Tambahkan Balasan.." 
                      value={balasan()[item.id] || ''} 
                      onInput={(e) => handleBalasanChange(item.id, e.currentTarget.value)}
                      class={styles.balasanInput}
                    />
                    <button 
                      onClick={() => handleBalasanSubmit(item.id)}
                      class={styles.balasButton}
                    >
                      Balas
                    </button>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Pengaduan;