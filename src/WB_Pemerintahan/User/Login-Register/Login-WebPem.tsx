import { createSignal } from "solid-js";
import "./Login-WebPem.css";
import "boxicons/css/boxicons.min.css";

function LoginForm() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [showPassword, setShowPassword] = createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil data dari localStorage
    const UserPemerintahData = JSON.parse(localStorage.getItem("UserPemerintahData"));

    if (UserPemerintahData && UserPemerintahData.email === email() && UserPemerintahData.password === password()) {
      console.log("Login berhasil!");

      // Arahkan ke halaman lain setelah login berhasil
      window.location.href = "/dashboard"; // Ganti dengan URL halaman yang sesuai
    } else {
      console.log("Email atau password salah!");
    }
  };

  return (
    <div class="LoginWebPem-container">
      <div class="LoginWebPem-cover">
        <div class="LoginWebPem-front">
          <img src="src/WB_Pemerintahan/User/Assets/registerpemerintah.jpg" alt="Cover Image" />
          <div class="LoginWebPem-text">
            <span class="text-1">
              Website Resmi <br /> Pemerintah Kota Bandung
            </span>
          </div>
        </div>
      </div>
      <div class="LoginWebPem-forms">
        <div class="LoginWebPem-formcontent">
          <div class="LoginWebPem-signup">
            <div class="title">Selamat datang kembali!</div>
            <div class="title22">Masuk ke akun Anda di sini.</div>
            <form onSubmit={handleSubmit}>
              <div class="input-boxes">
                <div class="input-box">
                  <i class="bx bx-envelope"></i>
                  <input type="email" placeholder="Email" required value={email()} onInput={(e) => setEmail(e.target.value)} />
                </div>
                <div class="input-box">
                  <i class="bx bx-lock"></i>
                  <input type={showPassword() ? "text" : "password"} placeholder="Password" required value={password()} onInput={(e) => setPassword(e.target.value)} />
                  <i class={`bx ${showPassword() ? "bx-show" : "bx-hide"}`} onClick={() => setShowPassword(!showPassword())}></i>
                </div>
                <div class="button-LoginWebPem">
                  <input type="submit" value="Masuk" />
                </div>
                <div class="text sign-in-text">
                  Belum memiliki akun? <label for="flip">Daftar sekarang</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
