import { TopBar } from './components/topbar.js';
import { SideBar } from './components/sidebar.js';
import { initRouter } from './router.js';

const app = document.getElementById('app');

app.innerHTML = `
  <div class="app-shell">
    <header id="topbar" class="topbar"></header>
    <div class="app-main">
      <aside id="sidebar" class="sidebar"></aside>
      <main id="content" class="app-content"></main>
    </div>
  </div>
`;

new TopBar(document.getElementById('topbar'));
const sidebar = new SideBar(document.getElementById('sidebar'));
initRouter(document.getElementById('content'), sidebar);
