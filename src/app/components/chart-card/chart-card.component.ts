import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-chart-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <mat-card class="chart-card">
      <div class="chart-header">
        <h3>{{ title }}</h3>
        <mat-icon matRipple class="actions-icon">more_vert</mat-icon>
      </div>
      
      <div class="mock-chart">
        <div class="chart-bars">
          <div class="bar" *ngFor="let val of chartData" [style.height.%]="val"></div>
        </div>
      </div>
      
      <div class="chart-legend">
        <div class="legend-item" *ngFor="let item of legendItems">
          <span class="legend-color" [style.background-color]="item.color"></span>
          <span>{{ item.label }}: {{ item.value }}</span>
        </div>
      </div>
    </mat-card>
  `,
  styles: [`
    .chart-card {
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid #e5e5e5;
      background: #ffffff;
      
      .chart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        
        h3 {
          margin: 0;
          font-size: 1rem;
          color: #1a1a1a;
          font-weight: 600;
        }
        
        .actions-icon {
          cursor: pointer;
          color: #999;
          transition: color 0.2s;
          
          &:hover {
            color: #1a1a1a;
          }
        }
      }
    }
    
    .mock-chart {
      display: flex;
      align-items: flex-end;
      gap: 10px;
      height: 140px;
      margin-bottom: 1.5rem;
      padding: 0.75rem;
      background: #fafafa;
      border-radius: 8px;
      border: 1px solid #f0f0f0;
      
      .chart-bars {
        display: flex;
        gap: 10px;
        width: 100%;
        height: 100%;
        
        .bar {
          flex: 1;
          background: #1f2937;
          border-radius: 4px 4px 0 0;
          transition: all 0.2s ease;
          opacity: 0.7;
          
          &:hover {
            opacity: 1;
          }
          
          &:nth-child(1) { height: 60%; }
          &:nth-child(2) { height: 75%; }
          &:nth-child(3) { height: 45%; }
          &:nth-child(4) { height: 85%; }
          &:nth-child(5) { height: 50%; }
        }
      }
    }
    
    .chart-legend {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 1rem;
      
      .legend-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: #666;
        
        .legend-color {
          width: 10px;
          height: 10px;
          border-radius: 2px;
        }
      }
    }
  `]
})
export class ChartCardComponent {
  @Input() title: string = 'Revenue Chart';
  @Input() chartData: number[] = [60, 75, 45, 85, 50];
  @Input() legendItems: any[] = [
    { label: 'Sales', value: '$12.5K', color: '#667eea' },
    { label: 'Revenue', value: '$8.2K', color: '#764ba2' }
  ];
}
