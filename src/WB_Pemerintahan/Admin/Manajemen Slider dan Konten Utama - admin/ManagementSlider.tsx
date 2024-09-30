import { createSignal } from 'solid-js';
import './ManagementSlider.css';
import Sidebar from '../Sidebar/sidebaradmin';

const AdminSliderManagement = () => {
  const [activeTab, setActiveTab] = createSignal('latest');

  return (
    <div class="admin-content">
        <Sidebar/>
        <div class="bagian-atas">
      <div class="section-latest-info">
        <h2>Informasi Terbaru <span class="edit-icon">✎</span></h2>
        <div class="slider-container">
          <button class="slider-btn prev">&lt;</button>
          <div class="slider-content">
            <button class="add-btn">+</button>
          </div>
          <button class="slider-btn next">&gt;</button>
        </div>
        <div class="slider-dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
      <div class="section popular">
        <h2>Populer <span class="edit-icon">✎</span></h2>
        <div class="popular-content">
          <button class="add-btn">+</button>
        </div>
        <a href="#" class="view-all-populer">Lihat semua</a>
      </div>
      </div>

      <div class="section digital-services">
        <h2 class="layanan">Layanan Digital <span class="edit-icon">✎</span></h2>
        <div class="services-slider">
          <button class="slider-btn prev">&lt;</button>
          <div class="service-item">
            <button class="add-btn">+</button>
          </div>
          <button class="slider-btn next">&gt;</button>
        </div>
      </div>

      <div class="section news-info">
        <h2 class="berita">Berita & Informasi Lainnya <span class="edit-icon">✎</span></h2>
        <div class="news-grid">
          {[1, 2, 3].map((item) => (
            <div class="news-item">
              <div class="news-image">
                <span class="like-count">♥ {item * 200 + 100}</span>
              </div>
              <h3>News Title {item}</h3>
              <p>Short description of the news item...</p>
            </div>
          ))}
        </div>
        <a href="#" class="view-all-berita">Lihat semua</a>
      </div>
    </div>
  );
};

export default AdminSliderManagement;