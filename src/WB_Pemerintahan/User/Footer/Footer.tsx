import { Component } from 'solid-js';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer-container">
      <div class="footer-top">
        <div class="footer-logo">
          <img src="src/WB_Pemerintahan/Aset_Pemerintahan/logo_bandung.svg" alt="Logo Pemerintahan" />
          <div class="footer-logo-text">
            <h2>Bandung</h2>
            <p>Portal Resmi Kota Bandung</p>
          </div>
        </div>
      
        <div class="footer-links">
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Privasi Kami</a>
          <a href="#">Kontak</a>
          <a href="#">Bantuan & Masukan</a>
        </div>

        <div class="footer-programs">
          <img src="src\WB_Pemerintahan\Aset_Pemerintahan\Bandung smart.svg" alt="Bandung Smart City" />
          <img src="src/WB_Pemerintahan/Aset_Pemerintahan/Hayu.svg" alt="HAY.U" />
          <img src="src/WB_Pemerintahan/Aset_Pemerintahan/sipandu.svg" alt="Sipandu" />
        </div>

        <div class="footer-address">
          <img src="src\WB_Pemerintahan\Aset_Pemerintahan\alamatIcon.svg" alt="Alamat Icon" />
          <p>
            Jl. Wastukencana Permatasari No.128, Kec. Bandung Barat,<br />
            Bandung, Jawa Barat 40117
          </p>
        </div>
      </div>
      
      <div class="footer-social-icons">
          <img src="src/WB_Pemerintahan/Aset_Pemerintahan/linkedinFooter.svg" alt="LinkedIn" />
          <img src="src/WB_Pemerintahan/Aset_Pemerintahan/facebookFooter.svg" alt="Facebook" />
          <img src="src/WB_Pemerintahan/Aset_Pemerintahan/instagramFooter.svg" alt="Instagram" />
          <img src="src/WB_Pemerintahan/Aset_Pemerintahan/twitterFooter.svg" alt="Twitter" />
        </div>

      <div class="footer-bottom">
        <p>2024 Sentra Darurat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
