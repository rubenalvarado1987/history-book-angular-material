import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <mat-card class="stats-card" [ngClass]="'stats-' + variant">
      <div class="stats-header">
        <mat-icon [ngClass]="'icon-' + variant">{{ icon }}</mat-icon>
        <h3>{{ title }}</h3>
      </div>
      <div class="stats-value">{{ value }}</div>
      <div class="stats-change" [ngClass]="isPositive ? 'positive' : 'negative'">
        <mat-icon>{{ isPositive ? 'trending_up' : 'trending_down' }}</mat-icon>
        <span>{{ changePercent }}% vs mes pasado</span>
      </div>
    </mat-card>
  `,
  styles: [`
    .stats-card {
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid #e5e5e5;
      background: #ffffff;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      
      &:hover {
        border-color: #d5d5d5;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }
    }
    
    .stats-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.25rem;
      
      h3 {
        margin: 0;
        font-size: 0.9rem;
        color: #666;
        font-weight: 500;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
    }
    
    mat-icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      opacity: 0.7;
    }
    
    .icon-primary { color: #1f2937; }
    .icon-success { color: #059669; }
    .icon-warning { color: #d97706; }
    .icon-danger { color: #dc2626; }
    
    .stats-value {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #1a1a1a;
      letter-spacing: -1px;
    }
    
    .stats-change {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      font-weight: 500;
      
      &.positive {
        color: #059669;
      }
      
      &.negative {
        color: #dc2626;
      }
      
      mat-icon {
        font-size: 16px;
        width: 16px;
        height: 16px;
      }
    }
    
    .stats-primary { border-color: #e5e5e5; }
    .stats-success { border-color: #e5e5e5; }
    .stats-warning { border-color: #e5e5e5; }
    .stats-danger { border-color: #e5e5e5; }
  `]
})
export class StatsCardComponent {
  @Input() title: string = 'Metric';
  @Input() value: string = '1,234';
  @Input() changePercent: number = 15;
  @Input() isPositive: boolean = true;
  @Input() icon: string = 'trending_up';
  @Input() variant: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
}
