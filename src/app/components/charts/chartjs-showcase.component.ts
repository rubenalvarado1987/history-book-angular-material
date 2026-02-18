import { AfterViewInit, Component, OnDestroy, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chartjs-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="chartjs-showcase">
    <h3>Gráficos con Chart.js — Ejemplos numéricos</h3>
    <div class="grid">
      <div class="card" *ngFor="let c of charts; let i = index">
        <h4>{{ c.title }}</h4>
        <canvas #canvas></canvas>
      </div>
    </div>
  </div>
  `,
  styles: [
    `
    :host { display: block; width: 100%; }
    .chartjs-showcase { padding: 8px; }
    /* Force a predictable responsive grid: 3 cols on large, 2 on medium, 1 on small */
    .grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 12px; }
    @media (min-width: 700px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 1100px) {
      .grid { grid-template-columns: repeat(3, 1fr); }
    }
    .card { background: var(--card-bg, #fff); border-radius: 8px; padding: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
    canvas { width: 100% !important; height: 200px !important; }
    `
  ]
})
export class ChartJsShowcaseComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('canvas') canvases!: QueryList<ElementRef<HTMLCanvasElement>>;

  chartInstances: Chart[] = [];

  charts = [
    {
      type: 'line',
      title: 'Monthly Revenue (USD)',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          { label: '2024', data: [1200,1500,1800,1700,2100,2400,2300,2500,2700,2900,3100,3300], borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.08)', tension: 0.35, fill: true },
          { label: '2023', data: [900,1000,1200,1300,1250,1400,1600,1700,1800,2000,2200,2400], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.06)', tension: 0.35, fill: true }
        ]
      }
    },
    {
      type: 'bar',
      title: 'Sales by Category',
      data: {
        labels: ['Electronics','Apparel','Home','Beauty','Sports','Other'],
        datasets: [{ label: 'Orders', data: [540, 420, 310, 180, 260, 90], backgroundColor: ['#6366f1','#f472b6','#34d399','#fb923c','#60a5fa','#f59e0b'] }]
      }
    },
    {
      type: 'doughnut',
      title: 'Traffic Sources (%)',
      data: {
        labels: ['Organic','Paid','Referral','Social','Email'],
        datasets: [{ data: [48, 22, 12, 10, 8], backgroundColor: ['#10b981','#3b82f6','#8b5cf6','#f97316','#f43f5e'] }]
      }
    },
    {
      type: 'scatter',
      title: 'Session Duration vs Pages',
      data: {
        datasets: [
          { label: 'Users', data: Array.from({length:80}).map(()=>({x: Math.round(Math.random()*10)+1, y: Math.round(Math.random()*600)+20})), backgroundColor: '#ef4444' }
        ]
      },
      options: { scales: { x: { title: { display: true, text: 'Pages Visited' } }, y: { title: { display: true, text: 'Session (seconds)' } } } }
    },
    {
      type: 'radar',
      title: 'Feature Usage (normalized)',
      data: {
        labels: ['Search','Checkout','Profile','Share','Notifications','Settings'],
        datasets: [
          { label: 'Power Users', data: [80,90,60,40,75,55], backgroundColor: 'rgba(99,102,241,0.12)', borderColor: '#6366f1' },
          { label: 'Casual', data: [40,30,70,60,45,35], backgroundColor: 'rgba(16,185,129,0.08)', borderColor: '#10b981' }
        ]
      }
    }
  ];

  ngAfterViewInit(): void {
    // create Chart.js instances for each canvas
    const canvasArray = this.canvases.toArray();
    canvasArray.forEach((el, i) => {
      const cfg: any = {
        type: this.charts[i].type,
        data: this.charts[i].data,
        options: this.charts[i].options || { responsive: true, maintainAspectRatio: false }
      };

      try {
        const ctx = el.nativeElement.getContext('2d') as CanvasRenderingContext2D;
        const chart = new Chart(ctx as any, cfg);
        this.chartInstances.push(chart);
      } catch (e) {
        // ignore chart creation failures in the editor environment
        // charts will be created when user runs locally
        // console.warn('Chart creation failed', e);
      }
    });
  }

  ngOnDestroy(): void {
    this.chartInstances.forEach(c => c.destroy());
    this.chartInstances = [];
  }
}
