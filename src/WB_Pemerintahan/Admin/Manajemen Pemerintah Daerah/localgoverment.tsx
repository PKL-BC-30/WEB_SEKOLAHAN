import { Component } from "solid-js";
import eye from '../Assets/mata.svg';
import rocket from '../Assets/rocket.svg';
import upload from '../Assets/document-upload.svg';
import edit from '../Assets/icon-edit.svg';
import struktur from './imgetmin/struktur.png';
import './localgoverment.css';
import '../Layout/layout.css'; // Tambahkan layout CSS
import SidebarAdmin from "../Sidebar/sidebaradmin";
import NavbarAdmin from "../Navbar/navbaradmin";

const LocalGovernment: Component = () => {
    return (
        <div class="admin-page">
            <SidebarAdmin />
            <NavbarAdmin />
            <div class="content">
                <h1>Kelola Visi dan Misi</h1>

                <div class="content-in">
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

                <div class="struktur">
                    <h2>Struktur Pemerintahan</h2>
                    <img src={edit} class="edit7" />
                    {/* <img src={struktur} alt="Struktur Pemerintahan" class="background-image" /> */}
                    <div class="overlay">
                        <div class="upload-area">
                            <img src={upload} alt="Upload Icon" />
                            <p>Upload Dokumen Struktur Pemerintahan (Max 10 MB)</p>
                        </div>
                    </div>
                </div>

                <div class="button-container"> 
                    <button class="save-button">Simpan Perubahan</button>
                </div>
            </div>
        </div>
    );
}
export default LocalGovernment;
