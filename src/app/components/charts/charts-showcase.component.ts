import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Series = number[];

@Component({
  selector: 'app-charts-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="charts-showcase">
      <div class="charts-grid">
        <div class="chart-card" *ngFor="let c of charts">
          <h4>{{ c.title }}</h4>
          <div class="chart-body">
            <ng-container [ngSwitch]="c.type">
              <svg *ngSwitchCase="'line'" viewBox="0 0 300 120" class="svg-chart">
                <path [attr.d]="linePath(c.data)" fill="none" stroke="#3b82f6" stroke-width="2"></path>
              </svg>

              <svg *ngSwitchCase="'area'" viewBox="0 0 300 120" class="svg-chart">
                <path [attr.d]="areaPath(c.data)" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5" opacity="0.95"></path>
              </svg>

              <svg *ngSwitchCase="'bar'" viewBox="0 0 300 120" class="svg-chart">
                <g *ngFor="let b of c.data; let i = index">
                  <rect [attr.x]="10 + i*22" [attr.y]="120 - (b*0.9)" [attr.width]="16" [attr.height]="b*0.9" fill="#10b981"></rect>
                </g>
              </svg>

              <svg *ngSwitchCase="'donut'" viewBox="0 0 120 120" class="svg-chart small">
                <g transform="translate(60,60)">
                  <ng-container *ngFor="let seg of c.data; let i = index">
                    <circle r="30" fill="transparent" stroke-width="20" [attr.stroke]="colors[i%colors.length]" [attr.stroke-dasharray]="segmentLength(seg,c.data) + ' ' + (circumference - segmentLength(seg,c.data))" [attr.transform]="'rotate(' + offsetAngle(c.data,i) + ')'" stroke-linecap="butt"></circle>
                  </ng-container>
                  <text x="0" y="4" text-anchor="middle" font-size="12">{{ c.center || '' }}</text>
                </g>
              </svg>

              <svg *ngSwitchCase="'scatter'" viewBox="0 0 300 120" class="svg-chart">
                <g *ngFor="let p of c.data">
                  <circle [attr.cx]="p[0]*4" [attr.cy]="120 - p[1]*3" r="4" fill="#f97316" opacity="0.95"></circle>
                </g>
              </svg>

              <div *ngSwitchCase="'heatmap'" class="heatmap">
                <div *ngFor="let row of c.data" class="heat-row">
                  <div *ngFor="let val of row" class="heat-cell" [style.background]="heatColor(val)"></div>
                </div>
              </div>

              <svg *ngSwitchCase="'spark'" viewBox="0 0 120 40" class="svg-chart small">
                <path [attr.d]="sparkPath(c.data)" fill="none" stroke="#6366f1" stroke-width="2"></path>
              </svg>

              <svg *ngSwitchDefault viewBox="0 0 300 120" class="svg-chart">
                <text x="50%" y="50%" text-anchor="middle">Tipo no soportado</text>
              </svg>
            </ng-container>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .charts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
      .chart-card { background: #ffffff; border-radius: 8px; padding: 0.75rem; box-shadow: 0 2px 8px rgba(2,6,23,0.04); }
      h4 { margin: 0 0 0.5rem 0; font-size: 0.98rem; color: #0f172a }
      .svg-chart { width: 100%; height: auto; display: block; }
      .svg-chart.small { width: 120px; height: 120px; }
      .heatmap { display:flex; flex-direction:column; gap:4px }
      .heat-row { display:flex; gap:4px }
      .heat-cell { width:20px; height:14px; border-radius:2px }
    `
  ]
})
export class ChartsShowcaseComponent {
  colors = ['#3b82f6','#10b981','#f97316','#8b5cf6','#ef4444'];

  charts: { title: string; type: string; data: any; center?: string }[] = [];

  constructor(){
    this.buildExamples();
  }

  buildExamples(){
    this.charts.push({ title: 'Line - Series Temporal', type: 'line', data: [12,20,15,30,25,36,40,42,38,45,48,52] });
    this.charts.push({ title: 'Area - Volumen', type: 'area', data: [3,6,4,8,7,9,12,16,14,17,19,21] });
    this.charts.push({ title: 'Bar - Agrupada (ejemplo simple)', type: 'bar', data: [23,34,45,56,67,78] });
    this.charts.push({ title: 'Donut - Proporciones', type: 'donut', data: [44,55,13,43], center: 'Total' });
    this.charts.push({ title: 'Scatter - Correlación', type: 'scatter', data: [[10,20],[15,25],[20,10],[25,30],[12,14]] });
    this.charts.push({ title: 'Heatmap - Densidad (3x7)', type: 'heatmap', data: [[22,29,13,32,44,52,41],[11,32,45,32,34,52,41],[8,25,33,21,17,27,30]] });
    this.charts.push({ title: 'Sparkline', type: 'spark', data: [5,8,6,9,7,10,14,12,15] });
  }

  // Helpers to map data to path
  private scale(points: number[], width = 300, height = 100){
    const max = Math.max(...points);
    const min = Math.min(...points);
    const range = max - min || 1;
    return points.map((v,i)=>({ x: (i/(points.length-1))*width, y: height - ((v-min)/range)*height }));
  }

  linePath(data: Series){
    const pts = this.scale(data);
    return pts.map((p,i)=> (i===0?`M ${p.x} ${p.y}`:`L ${p.x} ${p.y}`)).join(' ');
  }

  areaPath(data: Series){
    const pts = this.scale(data);
    const path = pts.map((p,i)=> (i===0?`M ${p.x} ${p.y}`:`L ${p.x} ${p.y}`)).join(' ');
    const last = pts[pts.length-1];
    const first = pts[0];
    return `${path} L ${last.x} 100 L ${first.x} 100 Z`;
  }

  sparkPath(data: Series){
    const pts = this.scale(data, 120, 40);
    return pts.map((p,i)=> (i===0?`M ${p.x} ${p.y}`:`L ${p.x} ${p.y}`)).join(' ');
  }

  // Donut helpers
  get circumference(){ return 2*Math.PI*30; }
  segmentLength(value:number, arr:number[]){ const total = arr.reduce((s,n)=>s+n,0)||1; return (value/total)*this.circumference; }
  offsetAngle(arr:number[], index:number){ const before = arr.slice(0,index).reduce((s,n)=>s+n,0)||0; const angle = (before/ (arr.reduce((s,n)=>s+n,0)||1)) * 360; return angle - 90; }

  heatColor(v:number){ const max = 60; const ratio = Math.min(1, v/max); const r = Math.round(240*ratio); const g = Math.round(240*(1-ratio)); return `rgb(${r},${g},120)`; }
}
