import { Component } from 'solid-js';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './PemerintahDaerah.css';

const PemerintahDaerah: Component = () => {
  return (
    <div class="pemerintah-daerah-page">
      <Navbar />

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
      <Footer/>
    </div>
  );
};

export default PemerintahDaerah;