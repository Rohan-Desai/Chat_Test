export async function loadChart() {
  const { Chart, registerables } = await import('https://cdn.jsdelivr.net/npm/chart.js@4.5.0/dist/chart.js');
  Chart.register(...registerables);
  return Chart;
}
