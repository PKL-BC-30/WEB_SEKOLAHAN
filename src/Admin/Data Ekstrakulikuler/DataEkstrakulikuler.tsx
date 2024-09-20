import { createSignal } from 'solid-js';
import  AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './DataEkstrakulikuler.css';

const DataEkstrakulikuler = () => {
  const [rowData, setRowData] = createSignal([
    {
      ekskul: 'Silat',
      pembimbing: 'Henoch Mahmud',
      jadwal: 'Rabu & Kamis',
      jumlah: '56 Siswa',
    },
    {
      ekskul: 'Basket',
      pembimbing: 'Murni Mastuti S.Pd',
      jadwal: 'Sabtu',
      jumlah: '34 Siswa',
    },
    {
      ekskul: 'Voli',
      pembimbing: 'Prof. Priyono',
      jadwal: 'Kamis',
      jumlah: '62 Siswa',
    },
  ]);

  // View button handler
  const handleView = (params) => {
    alert(`Viewing students for ${params.data.ekskul}`);
    // Add more logic to open a modal or display students data
  };

  // Delete button handler
  const handleDelete = (params) => {
    const ekskulToDelete = params.data.ekskul;
    if (confirm(`Are you sure you want to delete ${ekskulToDelete}?`)) {
      setRowData(rowData().filter((row) => row.ekskul !== ekskulToDelete));
    }
  };

  // Column definitions
  const columnDefs = [
    {
      headerName: 'Ekskul',
      field: 'ekskul',
      cellRenderer: (params) => {
        return (
          <div class="icon-text">
            <img src={`/${params.value.toLowerCase()}-icon.png`} alt={params.value} />
            <span>{params.value}</span>
          </div>
        );
      },
    },
    { headerName: 'Pembimbing', field: 'pembimbing' },
    { headerName: 'Jadwal', field: 'jadwal' },
    { headerName: 'Jumlah', field: 'jumlah' },
    {
      headerName: 'Daftar Siswa',
      field: 'daftarSiswa',
      cellRenderer: (params) => {
        return (
          <div>
            <button class="view-button" onClick={() => handleView(params)}>Lihat</button>
            <button class="delete-button" onClick={() => handleDelete(params)}>🗑️</button>
          </div>
        );
      },
    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  return (
    <div class="data-ekstrakulikuler-dashboard">

      <div class="main-content">

        <main class="Main-Ekstra">
          <div class="content-header">
            <div class="action-buttons">
              <button class="add-ekstra">+ Ekstrakulikuler</button>
            </div>
          </div>

          <div class="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
            <AgGridSolid
              rowData={rowData()}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataEkstrakulikuler;
