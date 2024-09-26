import { createSignal, createEffect } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './DataGuru.css';

const DataGuru = () => {
  const [rowData, setRowData] = createSignal([
    { foto: 'path/to/foto1.jpg', nama: 'Priyono', mapel: 'IPS', nomorTelp: '541221074', jabatan: 'Guru', nuptk: '12345', umur: '40', pendidikanTerakhir: 'S1', alamat: 'Jl. A', status: 'Online' },
    { foto: 'path/to/foto2.jpg', nama: 'Murni', mapel: 'IPA', nomorTelp: '541221075', jabatan: 'Guru', nuptk: '12346', umur: '35', pendidikanTerakhir: 'S1', alamat: 'Jl. B', status: 'Online' },
    { foto: 'path/to/foto3.jpg', nama: 'Rahmadi', mapel: 'MTK', nomorTelp: '541221076', jabatan: 'Guru', nuptk: '12347', umur: '50', pendidikanTerakhir: 'S2', alamat: 'Jl. C', status: 'Offline' },
  ]);

  const [columnDefs] = createSignal([
    {
      field: 'nama',
      headerName: 'Nama',
      cellRenderer: (params) => {
        return (
          <div class="guru-info">
            <img src={params.data.foto} alt={`Foto ${params.data.nama}`} class="guru-foto" />
            <span>{params.data.nama}</span>
          </div>
        );
      },
    },
    { field: 'mapel', headerName: 'Mapel' },
    { field: 'nomorTelp', headerName: 'Nomor Telp' },
    { field: 'jabatan', headerName: 'Jabatan' },
    { field: 'nuptk', headerName: 'NUPTK' },
    { field: 'umur', headerName: 'Umur' },
    { field: 'pendidikanTerakhir', headerName: 'Pendidikan Terakhir' },
    { field: 'alamat', headerName: 'Alamat' },
    { field: 'status', headerName: 'Status' },
    {
      headerName: 'Actions',
      cellRenderer: () => {
        return <button class="edit-button">Edit</button>;
      }
    }
  ]);

  const [showPopup, setShowPopup] = createSignal(false);
  const [newGuru, setNewGuru] = createSignal({
    foto: null,
    nama: '',
    mapel: '',
    nomorTelp: '',
    jabatan: '',
    email: '',
    password: '',
    umur: '',
    nuptk: '',
    pendidikanTerakhir: '',
    alamat: '',
    status: 'Offline'
  });

  const handleAddGuru = () => {
    const { foto, nama, mapel, nomorTelp, jabatan, email, password, umur, nuptk, pendidikanTerakhir, alamat, status } = newGuru();

    // Here you would typically send this data to your backend
    // For now, we'll just add it to the rowData
    setRowData([
      ...rowData(),
      { foto: URL.createObjectURL(foto), nama, mapel, nomorTelp, jabatan, email, umur, nuptk, pendidikanTerakhir, alamat, status }
    ]);

    setShowPopup(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewGuru({ ...newGuru(), foto: file });
    }
  };

  return (
    <div class="data-guru-dashboard">
      <div class="main-content">
        <main class="main-guru">
          <div class="content-header">
            <h2>Data Guru</h2>
            <div class="action-buttons">
              <button class="add-file">+ File</button>
              <button class="add-guru" onClick={() => setShowPopup(true)}>+ Guru</button>
            </div>
          </div>

          <div class="ag-theme-alpine" style="height: 500px; width: 100%;">
            <AgGridSolid
              columnDefs={columnDefs()}
              rowData={rowData()}
            />
          </div>

          {showPopup() && (
            <div class="popup-overlay">
              <div class="popup-content">
                <h3>Personal Details</h3>
                <div class="form-grid">
                  <div class="form-column">
                    <label>Name:</label>
                    <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), nama: e.target.value })} />
                    
                    <label>Nomor Telp:</label>
                    <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), nomorTelp: e.target.value })} />
                    
                    <label>Email:</label>
                    <input type="email" onInput={(e) => setNewGuru({ ...newGuru(), email: e.target.value })} />
                    
                    <label>Umur:</label>
                    <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), umur: e.target.value })} />
                    
                    <label>NUPTK:</label>
                    <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), nuptk: e.target.value })} />
                  </div>
                  
                  <div class="form-column">
                    <label>Mapel:</label>
                    <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), mapel: e.target.value })} />
                    
                    <label>Jabatan:</label>
                    <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), jabatan: e.target.value })} />
                    
                    <label>Password:</label>
                    <input type="password" onInput={(e) => setNewGuru({ ...newGuru(), password: e.target.value })} />
                    
                    <label>Pendidikan Terakhir:</label>
                    <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), pendidikanTerakhir: e.target.value })} />
                    
                    <label>Alamat:</label>
                    <textarea onInput={(e) => setNewGuru({ ...newGuru(), alamat: e.target.value })}></textarea>
                  </div>
                  
                  <div class="form-column">
                    <div class="photo-upload">
                      <label>Photo:</label>
                      <div class="photo-preview">
                        {newGuru().foto ? (
                          <img src={URL.createObjectURL(newGuru().foto)} alt="Preview" />
                        ) : (
                          <div class="photo-placeholder">
                            Drag and drop or<br />click here to select file
                          </div>
                        )}
                      </div>
                      <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                  </div>
                </div>
                
                <div class="popup-actions">
                  <button onClick={() => setShowPopup(false)}>Batalkan</button>
                  <button onClick={handleAddGuru}>Tambah</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DataGuru;