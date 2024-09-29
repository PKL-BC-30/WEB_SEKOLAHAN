import { createSignal, onMount, createMemo } from "solid-js";
import "./RiwayatPengaduan.css";
import { FaRegularTrashCan } from 'solid-icons/fa';
import Navbar from "../Navbar/Navbar";

const HistoryLaporan = () => {
  const [reports, setReports] = createSignal<any[]>([]);
  const [loggedInUser, setLoggedInUser] = createSignal<string | null>(null);
  const [showDeletePopup, setShowDeletePopup] = createSignal(false);
  const [reportToDelete, setReportToDelete] = createSignal<any | null>(null); // Menyimpan laporan yang akan dihapus

  onMount(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (user) {
      setLoggedInUser(user.username);
      fetchUserReports(user.username);
    }

    window.addEventListener("storage", () => {
      if (user) {
        fetchUserReports(user.username);
      }
    });
  });

  const fetchUserReports = (username: string) => {
    const savedReports = JSON.parse(localStorage.getItem("reports") || "[]");
    const userReports = savedReports.filter((report) => report.username === username);
    setReports(userReports);
  };

  // Fungsi untuk menampilkan popup sebelum penghapusan
  const confirmDeleteReport = (report: any) => {
    setReportToDelete(report);
    setShowDeletePopup(true); // Tampilkan popup
  };

  // Fungsi untuk benar-benar menghapus laporan
  const deleteReport = () => {
    const report = reportToDelete();
    if (report) {
      const savedReports = JSON.parse(localStorage.getItem("reports") || "[]");
      const updatedReports = savedReports.filter((r: any) => r.id !== report.id);
      localStorage.setItem("reports", JSON.stringify(updatedReports));

      const savedDataReports = JSON.parse(localStorage.getItem("datapelaporan") || "[]");
      const updatedDataReports = savedDataReports.filter((r: any) => r.id !== report.id);
      localStorage.setItem("datapelaporan", JSON.stringify(updatedDataReports));

      fetchUserReports(loggedInUser() || "");
      setShowDeletePopup(false); // Sembunyikan popup
    }
  };

  const reportList = createMemo(() => reports());

  return (
    <section class="riwayat-history-page">
      <Navbar />
      <h2 class="riwayat-reports-title">Riwayat Laporan Anda</h2>
      <div class="riwayat-reports-container">
        {reportList().map((report) => (
          <div class="riwayat-report-card">
            <div class="riwayat-report-header">
              <h3>{report.title}</h3>
              <p>{new Date(report.date).toLocaleDateString()}</p>
              <button class="riwayat-delete-button" onClick={() => confirmDeleteReport(report)}>
                <FaRegularTrashCan />
              </button>
            </div>
            <p class="riwayat-report-description">{report.description}</p>
            <div class="riwayat-report-footer">
              <span class="riwayat-report-location">{report.location}</span>
              <span class="riwayat-report-status">{report.action}</span>
            </div>
            {report.fileName && (
              <div class="riwayat-report-attachment">
                <a href={`path/to/attachments/${report.fileName}`} target="_blank" rel="noopener noreferrer">
                  Lampiran: {report.fileName}
                </a>
              </div>
            )}
          </div>
        ))}
        {reportList().length === 0 && <p class="riwayat-reports-p">Belum ada laporan yang dibuat.</p>}
      </div>

      {/* Pop-up konfirmasi hapus */}
      {showDeletePopup() && (
        <div class="riwayat-delete-popup">
          <div class="riwayat-popup-content">
            <p>Apakah Anda yakin ingin menghapus laporan ini?</p>
            <div class="riwayat-popup-buttons">
              <button onClick={deleteReport} class="riwayat-popup-confirm">Hapus</button>
              <button onClick={() => setShowDeletePopup(false)} class="riwayat-popup-cancel">Batal</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HistoryLaporan;
