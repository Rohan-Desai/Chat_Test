import tools from '../data/tools.json' assert { type: 'json' };

export class SideBar {
  constructor(el) {
    this.el = el;
    this.render();
    this.bind();
  }

  render() {
    const stages = Object.keys(tools);
    const items = stages.map((stage, i) => {
      const links = tools[stage]
        .map(t => `<li class="list-group-item border-0 py-1">
          <a class="tool-link text-decoration-none" data-stage="${stage}" data-tool="${t}" href="#/tools/${encodeURIComponent(stage)}/${encodeURIComponent(t)}">${t}</a>
        </li>`).join('');
      return `
        <div class="mb-2">
          <div class="nav-section-title">${stage}</div>
          <ul class="list-group list-group-flush">${links}</ul>
        </div>
      `;
    }).join('');

    this.el.innerHTML = `
      <div class="p-3">
        <a class="btn btn-outline-primary w-100 mb-3" href="#/dashboard">Dashboard</a>
        <a class="btn btn-outline-secondary w-100 mb-3" href="#/reports">Reports</a>
        <a class="btn btn-outline-secondary w-100 mb-3" href="#/security">Security</a>
        <hr/>
        ${items}
      </div>
    `;
  }

  bind() {
    this.el.addEventListener('click', (e) => {
      const a = e.target.closest('a.tool-link');
      if (!a) return;
    });
  }
}
