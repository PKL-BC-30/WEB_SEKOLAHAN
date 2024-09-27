// Dashboard.tsx
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div class={styles.dashboard}>
            <h1 class={styles.title}>Dashboard</h1>

            <div class={styles.gridchart1}>
                <div class={styles.grid}></div>
                <div class={styles.grid}></div>
                <div class={styles.grid}></div>
            </div>

            <div class={styles.gridchart2}>
                <div class={styles.gridatas}>Data Pekerjaan</div>
                <div class={styles.gridatas}>Status Pendidikan</div>
            </div>

            <div class={styles.gridchart3}>
                <div class={styles.gridbawah}>Data Gender</div>
                <div class={styles.gridbawah}>Data Umur</div>
                <div class={styles.gridbawah}>Data Agama</div>
            </div>

            <div class={styles.gridchart4}>
                <div class={styles.gridbesar}>Grid besar</div>
            </div>
        </div>
    );
};

export default Dashboard;
