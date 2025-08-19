import data from '../data/dashboard.json';
import { loadChart } from '../loadChart.js';

export function DashboardPage() {
  const el = document.createElement('div');
  const { pipelinesToday, deploySuccess, openIncidents, pipelineRuns, deployStatus } = data;
  const lineLabels = pipelineRuns.map(r => r.date);
  const lineData = pipelineRuns.map(r => r.count);

  el.innerHTML = `
    <div class="container-fluid">
      <div class="row g-3">
        <div class="col-12"><h4>Dashboard</h4></div>
        <div class="col-md-4">
          <div class="card"><div class="card-body">
            <div class="text-muted">Pipelines Today</div>
            <div class="fs-3 fw-semibold">${pipelinesToday}</div>
          </div></div>
        </div>
        <div class="col-md-4">
          <div class="card"><div class="card-body">
            <div class="text-muted">Deploy Success</div>
            <div class="fs-3 fw-semibold">${deploySuccess}%</div>
          </div></div>
        </div>
        <div class="col-md-4">
          <div class="card"><div class="card-body">
            <div class="text-muted">Open Incidents</div>
            <div class="fs-3 fw-semibold">${openIncidents}</div>
          </div></div>
        </div>
        <div class="col-md-8">
          <div class="card"><div class="card-body">
            <h6 class="mb-3">Pipeline Runs (Last 14 Days)</h6>
            <div class="chart-container" style="position:relative;height:200px"><canvas id="pipeline-chart"></canvas></div>
          </div></div>
        </div>
        <div class="col-md-4">
          <div class="card"><div class="card-body">
            <h6 class="mb-3">Deploy Status</h6>
            <div class="chart-container" style="position:relative;height:200px"><canvas id="deploy-chart"></canvas></div>
          </div></div>
        </div>
      </div>
    </div>
  `;

  (async () => {
    const Chart = await loadChart();
    const lineCtx = el.querySelector('#pipeline-chart');
    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: lineLabels,
        datasets: [{
          label: 'Runs',
          data: lineData,
          borderColor: '#0d6efd',
          backgroundColor: 'rgba(13,110,253,0.1)',
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, ticks: { precision: 0 } } }
      }
    });

    const doughnutCtx = el.querySelector('#deploy-chart');
    new Chart(doughnutCtx, {
      type: 'doughnut',
      data: {
        labels: ['Success', 'Warn', 'Fail'],
        datasets: [{
          data: [deployStatus.success, deployStatus.warn, deployStatus.fail],
          backgroundColor: ['#198754', '#ffc107', '#dc3545']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  })();

  return el;
}
