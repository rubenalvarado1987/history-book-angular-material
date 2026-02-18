import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChartComponent,
  NgApexchartsModule,
  ApexChart,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexTitleSubtitle,
  ApexStroke,
  ApexMarkers,
  ApexXAxis,
  ApexYAxis,
  ApexTooltip,
  ApexLegend,
  ApexFill,
  ApexPlotOptions,
  ApexDataLabels,
  ApexGrid,
  ApexAnnotations,
  ApexSeries
} from 'ng-apexcharts';

export type ChartOptions = {
  series?: ApexSeries | any;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
  stroke?: ApexStroke;
  title?: ApexTitleSubtitle;
  labels?: string[];
  colors?: string[];
  plotOptions?: ApexPlotOptions;
  dataLabels?: ApexDataLabels;
  tooltip?: ApexTooltip;
  legend?: ApexLegend;
  fill?: ApexFill;
  grid?: ApexGrid;
  markers?: ApexMarkers;
  responsive?: ApexResponsive[];
};

@Component({
  selector: 'app-charts-showcase',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  template: `
    <section class="charts-showcase">
      <div class="charts-grid">
        <div class="chart-card" *ngFor="let cfg of chartConfigs">
          <h4>{{ cfg.title }}</h4>
          <apx-chart
            [series]="cfg.series"
            [chart]="cfg.chart"
            [xaxis]="cfg.xaxis"
            [yaxis]="cfg.yaxis"
            [stroke]="cfg.stroke"
            [labels]="cfg.labels"
            [colors]="cfg.colors"
            [plotOptions]="cfg.plotOptions"
            [dataLabels]="cfg.dataLabels"
            [tooltip]="cfg.tooltip"
            [legend]="cfg.legend"
            [fill]="cfg.fill"
            [grid]="cfg.grid"
            [markers]="cfg.markers"
            [responsive]="cfg.responsive"
          ></apx-chart>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .charts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.25rem; }
      .chart-card { background: #ffffff; border-radius: 8px; padding: 1rem; box-shadow: 0 2px 8px rgba(2,6,23,0.06); }
      h4 { margin: 0 0 0.75rem 0; font-size: 1rem; }
    `
  ]
})
export class ChartsShowcaseComponent {
  // Shared categories for example
  categories = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  chartConfigs: ChartOptions[] = [];

  constructor(){
    this.initCharts();
  }

  initCharts(){
    // Line
    this.chartConfigs.push({
      title: 'Line - Series Temporal',
      series: [{ name: 'Ventas', data: [120, 200, 150, 300, 250, 360, 400, 420, 380, 450, 480, 520] }] as ApexAxisChartSeries,
      chart: { type: 'line', height: 260 },
      stroke: { curve: 'smooth' },
      xaxis: { categories: this.categories }
    });

    // Area
    this.chartConfigs.push({
      title: 'Area - Volumen',
      series: [{ name: 'Usuarios', data: [30,60,45,80,70,90,120,160,140,170,190,210] }] as ApexAxisChartSeries,
      chart: { type: 'area', height: 260 },
      fill: { opacity: 0.4 },
      stroke: { curve: 'smooth' },
      xaxis: { categories: this.categories }
    });

    // Grouped Bar
    this.chartConfigs.push({
      title: 'Grouped Bar',
      series: [
        { name: '2024', data: [23, 34, 45, 56, 67, 78] },
        { name: '2025', data: [34, 44, 55, 66, 77, 88] }
      ] as ApexAxisChartSeries,
      chart: { type: 'bar', height: 300 },
      plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
      xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun'] }
    });

    // Stacked Bar
    this.chartConfigs.push({
      title: 'Stacked Bar',
      series: [
        { name: 'Desktop', data: [44,55,41,67,22,43] },
        { name: 'Mobile', data: [13,23,20,8,13,27] },
        { name: 'Tablet', data: [11,17,15,15,21,14] }
      ] as ApexAxisChartSeries,
      chart: { type: 'bar', height: 300, stacked: true },
      plotOptions: { bar: { horizontal: false } },
      xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun'] }
    });

    // Donut
    this.chartConfigs.push({
      title: 'Donut - Proporciones',
      series: [44, 55, 13, 43] as ApexNonAxisChartSeries,
      chart: { type: 'donut', height: 260 },
      labels: ['Desktop','Mobile','Tablet','Other'],
      legend: { position: 'bottom' }
    });

    // Scatter
    this.chartConfigs.push({
      title: 'Scatter - Correlación',
      series: [
        { name: 'Grupo A', data: [[10, 20],[15, 25],[20, 10],[25, 30]] },
        { name: 'Grupo B', data: [[12, 14],[18, 22],[22, 28],[28, 18]] }
      ],
      chart: { type: 'scatter', height: 300 },
      xaxis: { tickAmount: 10 }
    });

    // Bubble
    this.chartConfigs.push({
      title: 'Bubble - Tercera dimensión',
      series: [
        { name: 'Dataset', data: [[9, 81, 63], [98, 5, 89], [51, 50, 60], [12, 50, 35]] }
      ],
      chart: { height: 300, type: 'bubble' }
    });

    // Heatmap
    this.chartConfigs.push({
      title: 'Heatmap - Densidad',
      series: [
        { name: 'Mon', data: [22, 29, 13, 32, 44, 52, 41] },
        { name: 'Tue', data: [11, 32, 45, 32, 34, 52, 41] },
        { name: 'Wed', data: [8, 25, 33, 21, 17, 27, 30] }
      ],
      chart: { type: 'heatmap', height: 260 },
      plotOptions: { heatmap: { radius: 4 } },
      xaxis: { categories: ['1','2','3','4','5','6','7'] }
    });

    // Radar
    this.chartConfigs.push({
      title: 'Radar - Perfil',
      series: [{ name: 'Producto A', data: [80, 50, 30, 40, 100, 20] }],
      chart: { type: 'radar', height: 300 },
      labels: ['UX','Performance','Funcionalidad','Seguridad','Escalabilidad','Soporte']
    });

    // Sparkline (mini)
    this.chartConfigs.push({
      title: 'Sparkline',
      series: [{ name: 'Trend', data: [5,8,6,9,7,10,14,12,15] }],
      chart: { type: 'area', height: 120, sparkline: { enabled: true } },
      stroke: { curve: 'smooth' },
      fill: { opacity: 0.2 }
    });

    // Combo (line + column)
    this.chartConfigs.push({
      title: 'Combo - Column + Line',
      series: [
        { name: 'Revenue', type: 'column', data: [23, 11, 22, 27, 13, 22] },
        { name: 'Profit', type: 'line', data: [44, 55, 41, 67, 22, 43] }
      ],
      chart: { height: 300, type: 'line' },
      xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun'] }
    });

    // Gauge (radialBar)
    this.chartConfigs.push({
      title: 'Gauge - KPI',
      series: [67],
      chart: { height: 260, type: 'radialBar' },
      plotOptions: { radialBar: { hollow: { size: '60%' }, dataLabels: { name: { show: true }, value: { show: true } } } }
    });

    // Treemap
    this.chartConfigs.push({
      title: 'Treemap - Jerarquía',
      series: [{ data: [ { x: 'A', y: 19 }, { x: 'B', y: 12 }, { x: 'C', y: 7 }, { x: 'D', y: 5 } ] }],
      chart: { height: 260, type: 'treemap' }
    });
  }
}
