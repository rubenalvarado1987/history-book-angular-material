import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <mat-card class="feature-card" [ngClass]="'feature-' + layout">
      <div class="feature-header" *ngIf="layout === 'vertical'">
        <mat-icon class="feature-icon" [style.color]="iconColor">{{ icon }}</mat-icon>
      </div>
      
      <div class="feature-content">
        <div *ngIf="layout === 'horizontal'" class="feature-icon-h" [style.background-color]="iconColor">
          <mat-icon>{{ icon }}</mat-icon>
        </div>
        
        <div class="feature-text">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
          
          <div class="feature-meta" *ngIf="meta">
            <span class="meta-item" *ngFor="let item of meta">
              <mat-icon>{{ item.icon }}</mat-icon>
              {{ item.label }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="feature-actions" *ngIf="showAction">
        <button mat-icon-button>
          <mat-icon>arrow_forward</mat-icon>
        </button>
      </div>
    </mat-card>
  `,
  styles: [`
    .feature-card {
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.3s ease;
      border: 1px solid #e5e5e5;
      background: #ffffff;
      
      &:hover {
        border-color: #d5d5d5;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }
    }
    
    .feature-vertical {
      padding: 2rem 1.5rem;
      text-align: center;
      
      .feature-header {
        margin-bottom: 1rem;
        
        .feature-icon {
          font-size: 48px;
          width: 48px;
          height: 48px;
        }
      }
      
      .feature-content {
        h3 {
          margin: 1rem 0 0.5rem 0;
          font-size: 1.1rem;
        }
        
        p {
          margin: 0;
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
        }
      }
    }
    
    .feature-horizontal {
      padding: 1.5rem;
      display: flex;
      gap: 1.5rem;
      align-items: center;
      background: #f9f9f9;
    }
    
    .feature-content {
      display: flex;
      gap: 1rem;
      flex: 1;
      
      .feature-icon-h {
        flex-shrink: 0;
        width: 60px;
        height: 60px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        
        mat-icon {
          font-size: 32px;
          width: 32px;
          height: 32px;
        }
      }
      
      .feature-text {
        h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
        }
        
        p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
          line-height: 1.4;
        }
      }
    }
    
    .feature-meta {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      
      .meta-item {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.85rem;
        color: #999;
        
        mat-icon {
          font-size: 16px;
          width: 16px;
          height: 16px;
        }
      }
    }
    
    .feature-actions {
      display: flex;
      justify-content: flex-end;
      
      button {
        color: #3f51b5;
        
        &:hover {
          background: rgba(63, 81, 181, 0.1);
        }
      }
    }
  `]
})
export class FeatureCardComponent {
  @Input() icon: string = 'star';
  @Input() iconColor: string = '#667eea';
  @Input() title: string = 'Feature Title';
  @Input() description: string = 'Feature description goes here';
  @Input() layout: 'vertical' | 'horizontal' = 'vertical';
  @Input() showAction: boolean = true;
  @Input() meta?: Array<{ icon: string; label: string }>;
}
