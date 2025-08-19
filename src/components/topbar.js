export class TopBar {
  constructor(el) {
    this.el = el;
    this.render();
  }

  render() {
    this.el.innerHTML = `
      <div class="container-fluid py-2 px-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <span class="brand">DevOps Dashboard</span>
          <sl-select size="small" value="dev">
            <sl-option value="dev">dev</sl-option>
            <sl-option value="staging">staging</sl-option>
            <sl-option value="prod">prod</sl-option>
          </sl-select>
        </div>
        <div class="d-flex align-items-center gap-2">
          <sl-input size="small" placeholder="Search tools..."></sl-input>
          <sl-button size="small" variant="primary" id="quick-action">Quick Action</sl-button>
          <sl-dropdown>
            <sl-button slot="trigger" caret size="small" variant="default">User</sl-button>
            <sl-menu>
              <sl-menu-item>Profile</sl-menu-item>
              <sl-menu-item>Settings</sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item>Sign out</sl-menu-item>
            </sl-menu>
          </sl-dropdown>
        </div>
      </div>
    `;
  }
}
