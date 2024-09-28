import { Component, createSignal } from "solid-js";
import eye from '../Assets/mata.svg';
import rocket from '../Assets/rocket.svg';
import upload from '../Assets/document-upload.svg';
import edit from '../Assets/icon-edit.svg';
import struktur from './imgetmin/struktur.png';
import './localgoverment.css';
import SidebarAdmin from "../Sidebar/sidebaradmin";
import NavbarAdmin from "../Navbar/navbaradmin";

const LocalGovernment: Component = () => {
    const [imageSrc, setImageSrc] = createSignal<string | null>(null);

    const handleImageChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const file = target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result as string); // Update the image source
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div class="admin-page-government">
            <SidebarAdmin />
            <NavbarAdmin />
            <div class="content-government">
                <h1>Kelola Visi dan Misi</h1>

                <div class="content-in-government">
                    <h2>Visi dan Misi Kota Bandung</h2>
                    <img src={edit} class="edit1" />
                    <p>Visi dan Misi Kota Bandung disusun sebagai arah pembangunan untuk mewujudkan kota yang maju, inovatif, dan <br /> 
                    berkelanjutan. Berlandaskan potensi lokal serta aspirasi masyarakat, visi dan misi ini akan memandu Kota Bandung <br /> 
                    selama 5 tahun ke depan dalam meningkatkan kesejahteraan warga, memperkuat daya saing, dan menjaga <br /> 
                    kelestarian lingkungan.</p>
                    <img src={edit} class="edit2" />

                    <div class="vision-mission">
                        <div class="vision">
                            <img src={eye} class="eye" />
                            <h3>Visi</h3>
                            <p>Terwujudnya Kota Bandung yang Unggul, Nyaman, Sejahtera dan Agamis</p>
                            <img src={edit} class="edit3" />
                        </div>
                        <div class="mission">
                            <img src={rocket} alt="" />
                            <h3>Misi</h3>
                            <ul>
                                <li>Membangun masyarakat yang humanis, agamis, berkualitas dan berdaya saing.</li>
                                <li>Mewujudkan tata kelola pemerintahan yang efektif, efisien, bersih, dan melayani.</li>
                                <li>Membangun perekonomian yang mandiri, kokoh, dan berkeadilan.</li>
                                <li>
                                    <input type="text" placeholder="Ketik disini..." class="custom-input"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="img">
                    <img src={edit} class="edit4" />
                    <img src={edit} class="edit5" />
                    <img src={edit} class="edit6" />
                </div>

                <div class="government-structure">
                    <h2>Struktur Pemerintahan</h2>
                    <img src={edit} class="edit7" />
                    <div class="overlay">
                        <div class="upload-area" style={{ position: 'relative' }}>
                            {imageSrc() && (
                                <img src={imageSrc()} alt="Uploaded Document" class="uploaded-image" />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style="display: none;" // Hidden file input
                                id="file-upload"
                            />
                            <label for="file-upload" style={{ cursor: 'pointer' }}>
                                <img src={upload} alt="Upload Icon" class="upload-icon"/>
                                <p>Upload Dokumen Struktur Pemerintahan (Max 10 MB)</p>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="button-container-government"> 
                    <button class="save-button-government">Simpan Perubahan</button>
                </div>
            </div>
        </div>
    );
}
export default LocalGovernment;
