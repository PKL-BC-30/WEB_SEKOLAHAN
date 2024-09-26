import { Component } from 'solid-js';
import './Navbar.css';

const Navbar: Component = () => {
  return (
    <header class="navbar">
      <div class="navbar-logo">
        <img src="src\WB_Pemerintahan\Aset_Pemerintahan\logo_bandung.svg" alt="Logo Bandung" />
        <div class="navbar-title">
          <h1>Bandung</h1>
          <p>Portal Resmi Kota Bandung</p>
        </div>
      </div>
      <nav class="navbar-links">
        <a href="/DetailBerita-user">
          <img src="src\WB_Pemerintahan\Aset_Pemerintahan\Informasi&layanan.svg" alt="Informasi & Layanan" />
          Informasi & Layanan
        </a>
        <a href="/profil">
          <img src="src\WB_Pemerintahan\Aset_Pemerintahan\Profile.svg" alt="Profil" />
          Profil
        </a>
        <a href="/pemerintah">
          <img src="src\WB_Pemerintahan\Aset_Pemerintahan\Pemerintahan.svg" alt="Pemerintah" />
          Pemerintah
        </a>
        <a href="/pengaduan">
          <img src="src\WB_Pemerintahan\Aset_Pemerintahan\Pengaduan.svg" alt="Pengaduan" />
          Pengaduan
        </a>
      </nav>
      <div class="navbar-actions">
        <input type="text" placeholder="Cari sesuatu..." />
        <img src="src\WB_Pemerintahan\Aset_Pemerintahan\notification.svg" alt="Notifikasi" />
        <div class="navbar-profile">
          <span>S</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
