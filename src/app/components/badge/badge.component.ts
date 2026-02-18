import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <span class="badge" [ngClass]="'badge-' + variant" [ngClass]="'badge-' + size">
      <mat-icon *ngIf="icon" class="badge-icon">{{ icon }}</mat-icon>
      {{ label }}
    </span>
  `,
  styles: [`
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid;
      transition: all 0.2s ease;
      letter-spacing: 0.3px;
      
      .badge-icon {
        font-size: 14px;
        width: 14px;
        height: 14px;
      }
      
      &:hover {
        transform: translateY(-1px);
      }
    }
    
    // Variants
    .badge-primary {
      background: #f0f9ff;
      color: #1f2937;
      border-color: #e5e7eb;
    }
    
    .badge-success {
      background: #f0fdf4;
      color: #059669;
      border-color: #bbf7d0;
    }
    
    .badge-warning {
      background: #fffbeb;
      color: #d97706;
      border-color: #fde68a;
    }
    
    .badge-danger {
      background: #fef2f2;
      color: #dc2626;
      border-color: #fecaca;
    }
    
    .badge-secondary {
      background: #f9fafb;
      color: #1f2937;
      border-color: #e5e7eb;
    }
    
    // Sizes
    .badge-small {
      padding: 0.25rem 0.6rem;
      font-size: 0.7rem;
    }
    
    .badge-large {
      padding: 0.5rem 0.95rem;
      font-size: 0.85rem;
    }
  `]
})
export class BadgeComponent {
  @Input() label: string = 'Badge';
  @Input() variant: 'primary' | 'success' | 'warning' | 'danger' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() icon?: string;
}
