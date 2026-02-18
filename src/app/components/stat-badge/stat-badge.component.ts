import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-stat-badge',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="stat-badge" [ngClass]="'stat-' + variant">
      <div class="stat-icon">
        <mat-icon>{{ icon }}</mat-icon>
      </div>
      <div class="stat-content">
        <div class="stat-label">{{ label }}</div>
        <div class="stat-number">{{ number }}</div>
        <div class="stat-subtitle" *ngIf="subtitle">{{ subtitle }}</div>
      </div>
    </div>
  `,
  styles: [`
    .stat-badge {
      display: flex;
      gap: 1rem;
      padding: 1.25rem;
      border-radius: 10px;
      border: 1px solid #e5e5e5;
      background-color: #ffffff;
      transition: all 0.2s ease;
      
      &:hover {
        border-color: #d5d5d5;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      }
    }
    
    .stat-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 8px;
      flex-shrink: 0;
      opacity: 0.8;
      
      mat-icon {
        font-size: 24px;
        width: 24px;
        height: 24px;
      }
    }
    
    .stat-content {
      flex: 1;
    }
    
    .stat-label {
      font-size: 0.8rem;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 0.25rem;
      font-weight: 600;
    }
    
    .stat-number {
      font-size: 1.6rem;
      font-weight: 700;
      color: #1a1a1a;
      letter-spacing: -0.5px;
    }
    
    .stat-subtitle {
      font-size: 0.85rem;
      color: #666;
      margin-top: 0.25rem;
    }
    
    // Variants
    .stat-primary {
      .stat-icon {
        background-color: rgba(31, 41, 55, 0.1);
        color: #1f2937;
      }
    }
    
    .stat-success {
      .stat-icon {
        background-color: rgba(5, 150, 105, 0.1);
        color: #059669;
      }
      
      .stat-number {
        color: #059669;
      }
    }
    
    .stat-warning {
      .stat-icon {
        background-color: rgba(217, 119, 6, 0.1);
        color: #d97706;
      }
      
      .stat-number {
        color: #d97706;
      }
    }
    
    .stat-danger {
      .stat-icon {
        background-color: rgba(220, 38, 38, 0.1);
        color: #dc2626;
      }
      
      .stat-number {
        color: #dc2626;
      }
    }
  `]
})
export class StatBadgeComponent {
  @Input() label: string = 'Stat';
  @Input() number: string = '0';
  @Input() subtitle?: string;
  @Input() icon: string = 'trending_up';
  @Input() variant: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
}
