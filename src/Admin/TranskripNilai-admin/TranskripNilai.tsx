import { Component, createSignal } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import styles from './TranskripNilai.module.css';

const TranskripNilai: Component = () => {
  const [jurusan, setJurusan] = createSignal('');
  const [kelas, setKelas] = createSignal('');
  const [showTable, setShowTable] = createSignal(false);

  const jurusanOptions = ['Pilih Jurusan', 'PPLG', 'TJKT', 'TJA'];
  const kelasOptions = ['Pilih Kelas', 'X A', 'X B', 'XI A', 'XI B', 'XII A', 'XII B'];

  const columnDefs = [
    { headerName: 'No', field: 'no', width: 70 },
    { headerName: 'Nama Lengkap', field: 'nama', width: 200 },
    { headerName: 'KKM', field: 'kkm', width: 100 },
    { headerName: 'Nilai Pengetahuan', field: 'nilaiPengetahuan', width: 150 },
    { headerName: 'Nilai Keterampilan', field: 'nilaiKeterampilan', width: 150 },
  ];

  const rowData = [
    { no: 1, nama: 'Adhara Faliya Utanti', kkm: '-', nilaiPengetahuan: '-', nilaiKeterampilan: '-' },
    { no: 2, nama: 'Auranisa Valent', kkm: '-', nilaiPengetahuan: '-', nilaiKeterampilan: '-' },
    { no: 3, nama: 'Eridayalma Zahra Yohar', kkm: '-', nilaiPengetahuan: '-', nilaiKeterampilan: '-' },
    { no: 4, nama: 'Pramusinta Ananta Fadzilah', kkm: '-', nilaiPengetahuan: '-', nilaiKeterampilan: '-' },
  ];

  const handleSearch = () => {
    if (jurusan() !== 'Pilih Jurusan' && kelas() !== 'Pilih Kelas') {
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  };

  return (
    <div class={styles.container}>
      <h1 class={styles.title}>Transkrip Nilai</h1>
      <div class={styles.formContainer}>
        <div class={styles.formGroup}>
          <label for="jurusan">Jurusan :</label>
          <select id="jurusan" value={jurusan()} onChange={(e) => setJurusan(e.currentTarget.value)}>
            {jurusanOptions.map((j) => (
              <option value={j}>{j}</option>
            ))}
          </select>
        </div>
        <div class={styles.formGroup}>
          <label for="kelas">Kelas :</label>
          <select id="kelas" value={kelas()} onChange={(e) => setKelas(e.currentTarget.value)}>
            {kelasOptions.map((k) => (
              <option value={k}>{k}</option>
            ))}
          </select>
        </div>
        <button class={styles.searchButton} onClick={handleSearch}>Cari</button>
      </div>
      {showTable() && (
        <div class={`ag-theme-alpine ${styles.tableContainer}`}>
          <AgGridSolid
            columnDefs={columnDefs}
            rowData={rowData}
            domLayout='autoHeight'
          />
        </div>
      )}
    </div>
  );
};

export default TranskripNilai;