import { createSignal, onMount } from "solid-js";
import Navbar from '../Navbar/Navbar';
import './PengaduanUser.css';
import Footer from '../Footer/Footer';

export default function ReportForm() {
    const [loggedInUser, setLoggedInUser] = createSignal<string | null>(null);
    const [fileName, setFileName] = createSignal("Upload Lampiran (Max 10 MB)");
    const [showPopup, setShowPopup] = createSignal(false);
    const [showValidationError, setShowValidationError] = createSignal(false);
    const [validationError, setValidationError] = createSignal("");

    onMount(() => {
        const user = JSON.parse(localStorage.getItem("currentUser") || "null");
        if (user) {
            setLoggedInUser(user.username);
        }
    });

    const handleFileChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            setFileName(input.files[0].name);
        } else {
            setFileName("Upload Lampiran (Max 10 MB)");
        }
    };

    const handleSubmit = (event: Event) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const title = formData.get("title");
        const description = formData.get("description");
        const date = formData.get("date");
        const location = formData.get("location");

        if (!title || !description || !date || !location || !fileName()) {
            setValidationError("Semua field harus diisi dan file harus diupload.");
            setShowValidationError(true);
            setTimeout(() => {
                setShowValidationError(false);
            }, 3000);
            return;
        }

        const newReport = {
            id: Date.now(),
            title,
            description,
            date,
            location,
            fileName: fileName(),
            action: "not_processed",
            username: loggedInUser(),
        };

        const existingReports = JSON.parse(localStorage.getItem("reports") || "[]");
        existingReports.push(newReport);
        localStorage.setItem("reports", JSON.stringify(existingReports));

        console.log("New report saved: ", newReport);

        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
            (event.target as HTMLFormElement).reset();
            setFileName("Upload Lampiran (Max 10 MB)");
        }, 3000);
    };

    return (
        <div class="pengaduan-form-page">
            <Navbar />
            <div class="illustration-card">
                <div class="illustration-content">
                    <h1>Sampaikan Laporan Anda dengan Mudah</h1>
                    <p>Laporkan pengaduan, aspirasi, atau permintaan informasi dengan cepat dan aman.</p>
                </div>
            </div>

            <div class="pengaduan-form-container">
                <form action="#" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
                    <label for="name" class="label-pengaduan">Nama:</label>
                    <input type="text" name="name" class="input-pengaduan" placeholder="Ketikkan nama Anda" required />

                    <label for="title" class="label-pengaduan">Judul Laporan: <span>*</span></label>
                    <input type="text" name="title" class="input-pengaduan" placeholder="Ketikkan judul laporanmu disini!" required />

                    <label for="description" class="label-pengaduan">Isi Laporan: <span>*</span></label>
                    <textarea name="description" class="input-pengaduan" placeholder="Ketikkan isi laporan Anda" rows="5" required></textarea>

                    <label for="date" class="label-pengaduan">Tanggal Kejadian: <span>*</span></label>
                    <input type="date" name="date" class="input-pengaduan" placeholder="Pilih tanggal kejadian" required />

                    <label for="location" class="label-pengaduan">Lokasi Kejadian: <span>*</span></label>
                    <input type="text" name="location" class="input-pengaduan" placeholder="Ketik lokasi kejadian" required />

                    <div class="pengaduan-file-upload">
                        <input type="file" id="file" class="pengaduan-file-input" accept=".jpg,.jpeg,.png,.pdf" required onChange={handleFileChange} />
                        <label for="file">{fileName()}</label>
                    </div>
                    <button type="submit">Lapor Sekarang!</button>
                </form>
                {showPopup() && (
                    <div class="pengaduan-popup">
                        <img src="src\WB_Pemerintahan\User\Assets\centangg.png" alt="Check" class="pengaduan-check-icon" />
                        <p>Laporan Anda akan segera diproses</p>
                        <button onClick={() => window.location.href = "/history"} class="btn">
                            Cek Laporanmu!
                        </button>
                    </div>
                )}
                {showValidationError() && (
                    <div class="pengaduan-popup warning">
                        <p>{validationError()}</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
