import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-alert-banner',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="alert-banner" [ngClass]="'alert-' + severity">
      <mat-icon class="alert-icon">{{ iconMap[severity] }}</mat-icon>
      <div class="alert-content">
        <strong>{{ title }}</strong>
        <p>{{ message }}</p>
      </div>
      <button mat-icon-button (click)="onClose()">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    .alert-banner {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem 1.25rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      background: #fafafa;
      border: 1px solid #e5e5e5;
      border-left: 3px solid #1f2937;
      
      .alert-icon {
        margin-top: 2px;
        flex-shrink: 0;
        opacity: 0.7;
      }
      
      .alert-content {
        flex: 1;
        
        strong {
          display: block;
          margin-bottom: 0.25rem;
          font-weight: 600;
          color: #1a1a1a;
        }
        
        p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.4;
          color: #666;
        }
      }
      
      button {
        flex-shrink: 0;
        margin-top: -0.5rem;
        color: #999;
        
        &:hover {
          color: #1a1a1a;
        }
      }
    }
    
    .alert-success {
      background: #f0fdf4;
      border-left-color: #059669;
      
      strong { color: #059669; }
      p { color: #047857; }
      .alert-icon { color: #059669; }
    }
    
    .alert-warning {
      background: #fffbeb;
      border-left-color: #d97706;
      
      strong { color: #d97706; }
      p { color: #b45309; }
      .alert-icon { color: #d97706; }
    }
    
    .alert-danger {
      background: #fef2f2;
      border-left-color: #dc2626;
      
      strong { color: #dc2626; }
      p { color: #b91c1c; }
      .alert-icon { color: #dc2626; }
    }
    
    .alert-info {
      background: #eff6ff;
      border-left-color: #3b82f6;
      
      strong { color: #3b82f6; }
      p { color: #1d4ed8; }
      .alert-icon { color: #3b82f6; }
    }
  `]
})
export class AlertBannerComponent {
  @Input() title: string = 'Info';
  @Input() message: string = 'This is an informational message.';
  @Input() severity: 'success' | 'warning' | 'danger' | 'info' = 'info';
  
  iconMap: Record<string, string> = {
    success: 'check_circle',
    warning: 'warning',
    danger: 'error',
    info: 'info'
  };
  
  onClose(): void {
    console.log('Alert closed');
  }
}
