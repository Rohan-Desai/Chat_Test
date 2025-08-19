export function ToolPage(stage, tool) {
  const el = document.createElement('div');
  const title = stage && tool ? `${stage} / ${tool}` : 'Tools';
  el.innerHTML = `
    <h4>${title}</h4>
    <p>This is a placeholder page for a specific tool route. Build forms or wizards here.</p>
  `;
  return el;
}
