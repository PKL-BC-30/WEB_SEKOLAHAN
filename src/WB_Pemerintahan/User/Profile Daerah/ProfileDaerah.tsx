import { createSignal, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';  // Import useNavigate
import styles from './ProfileDaerah.module.css';
import PemerintahDaerah from './PemerintahDaerah';  // Import PemerintahDaerah
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

declare global {
  interface Window {
    H: any;
  }
}

const ProfileDaerah = () => {
  let mapRef: HTMLDivElement | undefined;
  const [map, setMap] = createSignal<any | null>(null);
  const navigate = useNavigate();  // Initialize navigate function

  const apiKey = 'FRzYDXHeOKdnnyfX9nnSx7PJEbP5fvaU1PxUN8tRKTU';
  const bandungCoordinates = { lat: -6.9175, lng: 107.6191 };
  const kecamatanList = [
    { name: 'Cicendo', coordinates: { lat: -6.9175, lng: 107.5922 } },
    { name: 'Cibeunying Kaler', coordinates: { lat: -6.8961, lng: 107.6332 } },
    { name: 'Coblong', coordinates: { lat: -6.8932, lng: 107.6139 } },
    { name: 'Sukajadi', coordinates: { lat: -6.8917, lng: 107.5967 } },
    { name: 'Cidadap', coordinates: { lat: -6.8667, lng: 107.6000 } },
    { name: 'Bandung Wetan', coordinates: { lat: -6.9056, lng: 107.6156 } },
    { name: 'Astana Anyar', coordinates: { lat: -6.9375, lng: 107.6000 } },
    { name: 'Regol', coordinates: { lat: -6.9375, lng: 107.6167 } },
    { name: 'Batununggal', coordinates: { lat: -6.9333, lng: 107.6333 } },
    { name: 'Lengkong', coordinates: { lat: -6.9333, lng: 107.6167 } }
  ];

  const initMap = () => {
    if (mapRef && !map()) {
      const platform = new window.H.service.Platform({ apikey: apiKey });
      const defaultLayers = platform.createDefaultLayers();

      const newMap = new window.H.Map(
        mapRef,
        defaultLayers.vector.normal.map,
        {
          center: bandungCoordinates,
          zoom: 12,
          pixelRatio: window.devicePixelRatio || 1
        }
      );

      const behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(newMap));
      const ui = window.H.ui.UI.createDefault(newMap, defaultLayers);

      kecamatanList.forEach(kecamatan => {
        const marker = new window.H.map.Marker(kecamatan.coordinates);
        newMap.addObject(marker);

        marker.addEventListener('tap', (evt: any) => {
          const bubble = new window.H.ui.InfoBubble(evt.target.getGeometry(), {
            content: `
              <div class="${styles.popup}">
                <h3>${kecamatan.name}</h3>
                <button class="${styles.closeButton}">Tutup</button>
              </div>
            `
          });
          ui.addBubble(bubble);

          const closeButton = bubble.getElement().querySelector(`.${styles.closeButton}`);
          closeButton.addEventListener('click', () => {
            ui.removeBubble(bubble);
          });
        });
    });

      setMap(newMap);

      window.addEventListener('resize', () => newMap.getViewPort().resize());
    }
  };
  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://js.api.here.com/v3/3.1/mapsjs-core.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const scripts = [
        'https://js.api.here.com/v3/3.1/mapsjs-service.js',
        'https://js.api.here.com/v3/3.1/mapsjs-ui.js',
        'https://js.api.here.com/v3/3.1/mapsjs-mapevents.js'
      ];

      let loaded = 0;
      scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
          loaded++;
          if (loaded === scripts.length) {
            initMap();
          }
        };
      });
    };
  });

  return (
    <div class={styles.container}>
        <Navbar/>
      <div class={styles.content}>
        <div class={styles.mapSection}>
          <div class={styles.mapContainer} ref={mapRef}></div>
          <h2 class={styles.mapTitle}>BANDUNG CITY</h2>
          <button
            class={styles.visiMisiButton}
            onClick={() => navigate('/PemerintahDaerah-user')}  // Navigate to PemerintahDaerah page
          >
            Visi Misi & Struktur Pemerintah
          </button>
        </div>
        <div class={styles.descriptionSection}>
          <h1 class={styles.title}>Profil Kota Bandung</h1>
          <div class={styles.description}>
            <p>
              Kota Bandung terletak di wilayah Jawa Barat dan merupakan Ibukota
              Propinsi Daerah Tingkat I Jawa Barat. Kota Bandung terletak diantara
              107 0 Bujur Timur dan 6 0 55' Lintang Selatan. Lokasi Kotamadya
              Bandung cukup strategis, dilihat dari segi komunikasi, perekonomian
              maupun keamanan.
            </p>
            <p>
              Secara topografis KotaBandung terletak pada ketinggian 768 meter di
              atas permukaan laut, titik tertinggi di daerah Utara dengan ketinggian
              1.050 meter dan terendah di sebelah Selatan adalah 675 meter di atas
              permukaan laut. Di wilayah Kotamadya Bandung bagian Selatan
              permukaan tanah relatif datar, sedangkan di wilayah kota bagian Utara
              berbukit-bukit sehingga merupakan panorama yang indah.
            </p>
            <p>
              Keadaan Geologis dan tanah yang ada di Kota Bandung dan sekitarnya
              terbentuk pada zaman Kwartier dan mempunyai lapisan tanah alluvial
              hasil letusan gunung Takuban Perahu. Jenis material di bagian Utara
              umumnya merupakan jenis andosol, dibagian Selatan serta Timur
              terdiri atas sebaran jenis alluvial kelabu dengan bahan endapan tanah
              liat. Di bagian Tengah dan Barat tersebar jenis andosol.
            </p>
            <p>
              Iklim kota Bandung dipengaruhi oleh iklim pegunungan yang lembab
              dan sejuk. Pada tahun 1998 temperatur rata-rata 23,5 o C, curah hujan
              rata-rata 200,4 mm dan jumlah hari hujan rata-rata 21,3 hari perbulan.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProfileDaerah;
