import { createSignal, createEffect } from 'solid-js';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import './Dashboard.css';

const Dashboard = () => {
  const [chartData, setChartData] = createSignal([]);
  const [pieChartData, setPieChartData] = createSignal([]);
  const [selectedStats, setSelectedStats] = createSignal([]);
  const [availableStats, setAvailableStats] = createSignal([
    'Total User',
    'Total Siswa Kelas',
    'Total Guru',
    'Total Mata Pelajaran',
    'Total Ekstrakurikuler',
  ]);
  const [showAddStatModal, setShowAddStatModal] = createSignal(false);
  const [newStat, setNewStat] = createSignal('');

  const addStat = () => {
    if (selectedStats().length < 5 && !selectedStats().some(item => item.title === newStat())) {
      setSelectedStats([...selectedStats(), { title: newStat(), value: 0 }]);
      setAvailableStats(availableStats().filter(item => item !== newStat()));
      setNewStat('');
      setShowAddStatModal(false);
    }
  };

  const removeStat = (stat) => {
    setSelectedStats(selectedStats().filter(item => item.title !== stat));
    setAvailableStats([...availableStats(), stat]);
  };

  createEffect(() => {
    // Line chart data
    const data = [
      { date: new Date(2022, 0, 1).getTime(), value: 20 },
      { date: new Date(2022, 1, 1).getTime(), value: 35 },
      { date: new Date(2022, 2, 1).getTime(), value: 64366 },
      // ... more data points
    ];
    setChartData(data);

    // Pie chart data
    const pieData = [
      { category: "Shopping", value: 50 },
      { category: "Food", value: 10 },
      { category: "Entertain", value: 20 },
      { category: "Hobby", value: 20 },
    ];
    setPieChartData(pieData);
  });

  createEffect(() => {
    // Line Chart
    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.3,
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.data.setAll(chartData());

    // Pie Chart
    let pieRoot = am5.Root.new("piechartdiv");
    pieRoot.setThemes([am5themes_Animated.new(pieRoot)]);

    let pieChart = pieRoot.container.children.push(
      am5percent.PieChart.new(pieRoot, {
        layout: pieRoot.verticalLayout,
      })
    );

    let pieSeries = pieChart.series.push(
      am5percent.PieSeries.new(pieRoot, {
        valueField: "value",
        categoryField: "category",
      })
    );

    pieSeries.data.setAll(pieChartData());

    return () => {
      root.dispose();
      pieRoot.dispose();
    };
  });

  return (
    <div class="dashboard">
      <header class="dashboard-header">
        <h1>Untitle</h1>
        <div class="header-right">
          <div class="notification">
            <span>2</span>
          </div>
          <div class="user-info">
            <div class="user-avatar"></div>
            <span>PRIYONO</span>
            <span class="user-role">Admin</span>
          </div>
        </div>
      </header>

      <div class="main-content">
        <nav class="sidebar">
          <ul>
            <li class="active">Dashboard</li>
            <li>Data Siswa</li>
            <li>Ekstrakurikuler</li>
            <li>Data Guru</li>
            <li>Transkrip Nilai</li>
            <li>Jadwal</li>
            <li class="settings">Pengaturan</li>
            <li class="logout">Keluar</li>
          </ul>
        </nav>

        <main>
            <div class="jarak1">
            <h2 class="dashboardText">Dashboard</h2>
            <button class="add-stat-button" onClick={() => setShowAddStatModal(true)}>+ Tambah Statistik</button>
            </div>

          <div class="stats-grid">
            {selectedStats().map(({ title, value }) => (
              <div class="stat-card">
                <h3>{title}</h3>
                <p>{value}</p>
                <button onClick={() => removeStat(title)}>Hapus</button>
              </div>
            ))}
          </div>


          {showAddStatModal() && (
            <div class="modal">
              <div class="modal-content">
                <h3>Pilih Statistik</h3>
                <select onChange={(e) => setNewStat(e.target.value)} value={newStat()}>
                  <option value="" disabled>Pilih Statistik</option>
                  {availableStats().map(stat => (
                    <option value={stat}>{stat}</option>
                  ))}
                </select>
                <button onClick={addStat}>Tambah</button>
                <button onClick={() => setShowAddStatModal(false)}>Batal</button>
              </div>
            </div>
          )}

          <div class="charts-container">
            <div class="chart-card">
              <h3>Penggunaan LMS</h3>
              <div id="chartdiv"></div>
            </div>
            <div class="chart-card pie-chart">
              <h3>Data Ekstrakurikuler</h3>
              <div id="piechartdiv"></div>
            </div>
          </div>

          <div class="table-card">
            <h3>Siswa Online</h3>
            <table>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Kelas</th>
                  <th>NIS</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Priyono</td>
                  <td>XII - PPLG 2</td>
                  <td>541221074</td>
                  <td>541221074@student.smktelkom-pwt.sch.id</td>
                  <td><span class="status-online">Online</span></td>
                </tr>
                <tr>
                  <td>Murni</td>
                  <td>XII - PPLG 2</td>
                  <td>541221074</td>
                  <td>541221074@student.smktelkom-pwt.sch.id</td>
                  <td><span class="status-online">Online</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
