import { createSignal } from "solid-js";
import "./Register-WebPem.css";
import "boxicons/css/boxicons.min.css";

function SignupForm() {
  const [fullName, setFullName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [phone, setPhone] = createSignal("");
  const [showPassword, setShowPassword] = createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "UserPemerintahData",
      JSON.stringify({
        fullName: fullName(),
        email: email(),
        password: password(), // Hati-hati menyimpan password dalam localStorage
        phone: phone(),
      })
    );

    console.log("Pendaftaran berhasil!");
    console.log("Data yang disimpan:", {
      fullName: fullName(),
      email: email(),
      password: password(),
      phone: phone(),
    });

    // Arahkan ke halaman login
    window.location.href = "/LoginPemerintah"; // Ganti dengan URL login yang sesuai
  };

  return (
    <div class="RegisterWebPem-container">
      <div class="RegisterWebPem-cover">
        <div class="RegisterWebPem-front">
          <img src="src/WB_Pemerintahan/User/Assets/registerpemerintah.jpg" alt="Cover Image" />
          <div class="RegisterWebPem-text">
            <span class="text-1">
              Website Resmi <br /> Pemerintah Kota Bandung
            </span>
          </div>
        </div>
      </div>
      <div class="RegisterWebPem-forms">
        <div class="RegisterWebPem-formcontent">
          <div class="RegisterWebPem-signup">
            <div class="title">
              Selamat datang di portal resmi <br />
              <span>Pemerintah Kota Bandung!</span>
            </div>
            <div class="titlee">Buat akun sekarang!</div>
            <form onSubmit={handleSubmit}>
              <div class="input-boxes">
                <div class="input-box">
                  <i class="bx bx-user"></i>
                  <input type="text" placeholder="Nama Lengkap" required value={fullName()} onInput={(e) => setFullName(e.target.value)} />
                </div>
                <div class="input-box">
                  <i class="bx bx-envelope"></i>
                  <input type="email" placeholder="Email" required value={email()} onInput={(e) => setEmail(e.target.value)} />
                </div>
                <div class="input-box">
                  <i class="bx bx-lock"></i>
                  <input type={showPassword() ? "text" : "password"} placeholder="Password" required value={password()} onInput={(e) => setPassword(e.target.value)} />
                  <i class={`bx ${showPassword() ? "bx-show" : "bx-hide"}`} onClick={() => setShowPassword(!showPassword())}></i>
                </div>
                <div class="input-box">
                  <i class="bx bx-phone"></i>
                  <input type="tel" placeholder="No. Telepon" required value={phone()} onInput={(e) => setPhone(e.target.value)} />
                </div>
                <div class="button-RegisterWebPem">
                  <input type="submit" value="Daftar akun" />
                </div>
                <div class="text sign-up-text">
                  Sudah memiliki akun? <label for="flip">Masuk sekarang</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
