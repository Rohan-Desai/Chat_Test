import { DashboardPage } from './pages/dashboard.js';
import { ReportsPage } from './pages/reports.js';
import { SecurityPage } from './pages/security.js';
import { ToolPage } from './pages/tool.js';

export function initRouter(contentEl) {
  function render() {
    const hash = location.hash || '#/dashboard';
    const [_, route, a, b] = hash.split('/'); // # / route / a / b
    let node = document.createElement('div');

    switch (route) {
      case 'dashboard':
        node = DashboardPage();
        break;
      case 'reports':
        node = ReportsPage();
        break;
      case 'security':
        node = SecurityPage();
        break;
      case 'tools':
        node = ToolPage(decodeURIComponent(a || ''), decodeURIComponent(b || ''));
        break;
      default:
        node.innerHTML = '<h5 class="mb-0">Not Found</h5>';
    }

    contentEl.innerHTML = '';
    contentEl.appendChild(node);
  }

  window.addEventListener('hashchange', render);
  render();
}
