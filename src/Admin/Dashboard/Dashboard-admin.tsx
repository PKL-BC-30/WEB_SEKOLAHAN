import { createSignal, createEffect } from 'solid-js';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import './Dashboard.css';

const Dashboard = () => {
  const [selectedStats, setSelectedStats] = createSignal([]);
  const [availableStats, setAvailableStats] = createSignal([
    'Total User',
    'Total Siswa Kelas',
    'Total Guru',
    'Total Mata Pelajaran',
    'Total Ekstrakurikuler',
  ]);
  const [selectedCharts, setSelectedCharts] = createSignal([]);
  const [availableCharts, setAvailableCharts] = createSignal([
    'Line', 'Donut', 'Pie'
  ]);
  const [showChartModal, setShowChartModal] = createSignal(false);
  const [newChart, setNewChart] = createSignal('');
  const [showAddStatModal, setShowAddStatModal] = createSignal(false);
  const [newStat, setNewStat] = createSignal('');


  const addChart = () => {
    if (selectedCharts().length < 2 && !selectedCharts().includes(newChart())) {
      setSelectedCharts([...selectedCharts(), newChart()]);
      setAvailableCharts(availableCharts().filter(chart => chart !== newChart()));
      setNewChart('');
      setShowChartModal(false);
    }
  };

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
  const removeChart = (chart) => {
    setSelectedCharts(selectedCharts().filter(c => c !== chart));
    setAvailableCharts([...availableCharts(), chart]);
  };


  createEffect(() => {
    selectedCharts().forEach((chartType, index) => {
      const chartDivId = `${chartType.toLowerCase()}ChartDiv-${index}`;
      
      // Line Chart
      if (chartType === 'Line') {
        let root = am5.Root.new(chartDivId);
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
  
        series.data.setAll([
          { date: new Date(2022, 0, 1).getTime(), value: 20 },
          { date: new Date(2022, 1, 1).getTime(), value: 35 },
          { date: new Date(2022, 2, 1).getTime(), value: 64366 },
        ]);
  
        return () => root.dispose();
      }
  
      // Pie or Donut Chart
      if (chartType === 'Pie' || chartType === 'Donut') {
        let root = am5.Root.new(chartDivId);
        root.setThemes([am5themes_Animated.new(root)]);
  
        let chart = root.container.children.push(
          am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
            innerRadius: chartType === 'Donut' ? am5.percent(50) : 0, // Set inner radius for donut chart
          })
        );
  
        let series = chart.series.push(
          am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
          })
        );
  
        series.data.setAll([
          { category: "Shopping", value: 50 },
          { category: "Food", value: 10 },
          { category: "Entertainment", value: 20 },
          { category: "Hobby", value: 20 },
        ]);
  
        return () => root.dispose();
      }
    });
  });
  

  return (
    <div class="dashboard">

      <div class="main-content">

        <main class="main-Dash">
          
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

          {showChartModal() && (
            <div class="modal">
              <div class="modal-content">
                <h3>Pilih Chart</h3>
                <select onChange={(e) => setNewChart(e.target.value)} value={newChart()}>
                  <option value="" disabled>Pilih Chart</option>
                  {availableCharts().map(chart => (
                    <option value={chart}>{chart}</option>
                  ))}
                </select>
                <button onClick={addChart}>Tambah</button>
                <button onClick={() => setShowChartModal(false)}>Batal</button>
              </div>
            </div>
          )}

          <div class="jarak2">
            <button class="add-chart-button" onClick={() => setShowChartModal(true)}>+ Tambah Chart</button>
          </div>

          <div class="charts-container">
  {selectedCharts().map((chart, index) => (
    <div class="chart-card" >
      <h3>{chart} Chart</h3>
      <div id={`${chart.toLowerCase()}ChartDiv-${index}`} style={{ width: "100%", height: "500px" }}></div>
      <button onClick={() => removeChart(chart)}>Hapus</button>
    </div>
  ))}
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
