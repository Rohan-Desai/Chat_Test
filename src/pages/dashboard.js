export function DashboardPage() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="container-fluid">
      <div class="row g-3">
        <div class="col-12"><h4>Dashboard</h4></div>
        <div class="col-md-4">
          <div class="card"><div class="card-body">
            <div class="text-muted">Pipelines Today</div>
            <div class="fs-3 fw-semibold">42</div>
          </div></div>
        </div>
        <div class="col-md-4">
          <div class="card"><div class="card-body">
            <div class="text-muted">Deploy Success</div>
            <div class="fs-3 fw-semibold">96%</div>
          </div></div>
        </div>
        <div class="col-md-4">
          <div class="card"><div class="card-body">
            <div class="text-muted">Open Incidents</div>
            <div class="fs-3 fw-semibold">3</div>
          </div></div>
        </div>
        <div class="col-12">
          <div class="card"><div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="mb-0">Activity</h6>
              <small class="text-muted">Placeholder — charts added in step 5</small>
            </div>
            <div class="mt-3">Recent pipeline and deploy activity will appear here.</div>
          </div></div>
        </div>
      </div>
    </div>
  `;
  return el;
}
