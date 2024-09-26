import { Component } from 'solid-js';
import './PemerintahDaerah.css';

const PemerintahDaerah: Component = () => {
  return (
    <div class="pemerintah-daerah-page">
      <header>
        <div class="logo">
          <img src="src\WB_Pemerintahan\User\Assets\logo bandung.png" alt="Bandung Logo" />
          <span>Bandung</span>
          <span>Portal Resmi Kota Bandung</span>
        </div>
        <nav>
          <a href="#" class="active"><i class="icon-info"></i>Informasi & Layanan</a>
          <a href="#"><i class="icon-profile"></i>Profil</a>
          <a href="#"><i class="icon-government"></i>Pemerintah</a>
          <a href="#"><i class="icon-complaint"></i>Pengaduan</a>
        </nav>
        <div class="header-actions">
          <div class="search-bar">
            <input type="search" placeholder="Cari sesuatu..." />
            <button type="submit"><i class="icon-search"></i></button>
          </div>
          <button class="notification-button"><i class="icon-bell"></i></button>
          <button class="profile-button">S</button>
        </div>
      </header>

      <div class="hero-image">
        <img src="src\WB_Pemerintahan\User\Assets\Bandung Kota bener.png" alt="Gedung Sate Bandung" />
        <div class="hero-content">
          <h1>Visi & Misi</h1>
          <p>Visi Misi Pemerintahan Bandung</p>
        </div>
      </div>

      <main>
        <section class="visi-misi-section">
          <h2>Visi dan Misi Kota Bandung</h2>
          <p>
            Visi dan Misi Kota Bandung disusun sebagai arah pembangunan untuk mewujudkan kota yang maju,
            inovatif, dan berkelanjutan. Berdasarkan potensi lokal serta aspirasi masyarakat, visi dan misi ini
            akan memandu Kota Bandung selama 5 tahun ke depan dalam meningkatkan kesejahteraan warga,
            memperkuat daya saing, dan menjaga kelestarian lingkungan.
          </p>

                  <div class="visi-misi-content">
                      <div class="visi">
                          <h3>
                              <img src="src\WB_Pemerintahan\User\Assets\icons8-eye-24.png" alt="Visi Icon" class="icon-image" />
                              Visi
                          </h3>
                          <p>Terwujudnya Kota Bandung yang Unggul, Nyaman, Sejahtera dan Agamis</p>
                      </div>
                      <div class="misi">
                          <h3>
                              <img src="src\WB_Pemerintahan\User\Assets\rocket.png" alt="Misi Icon" class="icon-image" />
                              Misi
                          </h3>
                          <ul>
                              <li>Membangun masyarakat yang humanis, agamis, berkualitas dan berdaya Saing.</li>
                              <li>Mewujudkan tata kelola pemerintahan yang efektif, efisien, bersih dan melayani.</li>
                              <li>Membangun perekonomian yang mandiri, kokoh, dan berkeadilan.</li>
                          </ul>
                      </div>
                  </div>
        </section>

        <section class="struktur-pemerintahan">
          <h2>Struktur Pemerintahan</h2>
          <img src="src\WB_Pemerintahan\User\Assets\Struktur bandung pemerintah.png" alt="Bagan Struktur Organisasi Pemerintah Kota Bandung 2021" />
        </section>
      </main>

      <footer>
        <div class="footer-content">
          <div class="footer-logo">
            <img src="/path-to-bandung-logo.png" alt="Bandung Logo" />
            <span>Bandung</span>
            <p>Portal Resmi Kota Bandung</p>
          </div>
          <div class="footer-links">
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Privasi Kami</a>
            <a href="#">Kontak</a>
            <a href="#">Bantuan & Masukan</a>
          </div>
          <div class="footer-address">
            <p>Alamat :</p>
            <p>Jl. Wastukencana Permatarasi No.126, Kec. Bandung Barat, Bandung, Jawa Barat 40117</p>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="social-media">
            <a href="#"><i class="icon-linkedin"></i></a>
            <a href="#"><i class="icon-facebook"></i></a>
            <a href="#"><i class="icon-instagram"></i></a>
            <a href="#"><i class="icon-twitter"></i></a>
          </div>
          <div class="footer-apps">
            <img src="/path-to-bandung-app-logo.png" alt="Bandung App" />
            <img src="/path-to-sipandu-app-logo.png" alt="Sipandu App" />
          </div>
          <p>2024 - All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PemerintahDaerah;