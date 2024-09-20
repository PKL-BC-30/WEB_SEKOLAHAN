import { createSignal } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './DataGuru.css';

const DataGuru = () => {
  const [rowData, setRowData] = createSignal([
  ]);

  const [columnDefs] = createSignal([
    { field: 'nama', headerName: 'Nama', cellRenderer: 'avatarCellRenderer' },
    { field: 'email', headerName: 'Email' },
    { field: 'password', headerName: 'Password' },
    { field: 'mapel', headerName: 'Mapel' },
    { field: 'nomorTelp', headerName: 'Nomor Telp' },
    { field: 'jabatan', headerName: 'Jabatan' },
    { field: 'umur', headerName: 'Umur' },
    { field: 'NUPTK', headerName: 'NUPTK' },
    { field: 'pendidikan terakhir', headerName: 'Pendidikan Terakhir' },
    { field: 'alamat', headerName: 'Alamat' },
    { 
      field: 'status', 
      headerName: 'Status', 
      cellRenderer: (params) => {
        return <span class="status ${params.value === 'Online' ? 'status-online' : 'status-offline'}">${params.value}</span>;
      }
    },
    { 
      field: 'actions', 
      headerName: 'Actions', 
      cellRenderer: () => {
        return <button class="edit-button">Edit</button>;
      }
    },
  ]);

  const [showPopup, setShowPopup] = createSignal(false);
  const [newGuru, setNewGuru] = createSignal({
    nama: '', mapel: '', nomorTelp: '', jabatan: '', umur: '', NUPTK: '', pendidikanterakhir: '', alamat: '', email: '', password: ''
  });

  const handleAddGuru = () => {
    // Destructure newGuru and omit the email and password fields
    const { nama, email, password, mapel, nomorTelp, jabatan, umur, NUPTK, pendidikanterakhir, alamat } = newGuru();
    
    // Add the new teacher to rowData with matching field names
    setRowData([
      ...rowData(),
      {
        nama,
        email,
        password,
        mapel,
        nomorTelp,
        jabatan,
        umur,
        NUPTK,
        pendidikanterakhir,
        alamat,
        status: 'Offline', // Default status for new teacher
        actions: '' // Placeholder for actions (e.g., Edit/Delete)
      }
    ]);

    // Close the popup
    setShowPopup(false);
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
                <form>
                  <label>Name:</label>
                  <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), nama: e.target.value })} />
                  
                  <label>Mapel:</label>
                  <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), mapel: e.target.value })} />

                  <label>Nomor Telp:</label>
                  <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), nomorTelp: e.target.value })} />
                  
                  <label>Jabatan:</label>
                  <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), jabatan: e.target.value })} />

                  <label>Umur:</label>
                  <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), Umur: e.target.value })} />

                  <label>NUPTK:</label>
                  <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), NUPTK: e.target.value })} />

                  <label>Pendidikan Terakhir:</label>
                  <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), pendidikanterakhir: e.target.value })} />

                  <label>Alamat:</label>
                  <input type="text" onInput={(e) => setNewGuru({ ...newGuru(), alamat: e.target.value })} />

                  <label>Email:</label>
                  <input type="email" onInput={(e) => setNewGuru({ ...newGuru(), email: e.target.value })} />

                  <label>Password:</label>
                  <input type="password" onInput={(e) => setNewGuru({ ...newGuru(), password: e.target.value })} />
                </form>
                
                <div class="popup-actions">
                  <button onClick={handleAddGuru}>Add Guru</button>
                  <button onClick={() => setShowPopup(false)}>Cancel</button>
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
