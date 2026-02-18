import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <button 
      [ngClass]="'btn-' + variant + ' btn-' + size"
      [disabled]="disabled"
      (click)="onClick()">
      <mat-icon *ngIf="icon && iconPosition === 'left'" class="btn-icon">{{ icon }}</mat-icon>
      {{ label }}
      <mat-icon *ngIf="icon && iconPosition === 'right'" class="btn-icon">{{ icon }}</mat-icon>
    </button>
  `,
  styles: [`
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: 1px solid;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.9rem;
      white-space: nowrap;
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
    
    // Variants
    .btn-primary {
      background-color: #1f2937;
      color: white;
      border-color: #1f2937;
      
      &:hover:not(:disabled) {
        background-color: #111827;
        border-color: #111827;
      }
    }
    
    .btn-secondary {
      background-color: #f5f5f5;
      color: #1a1a1a;
      border-color: #e5e5e5;
      
      &:hover:not(:disabled) {
        background-color: #f0f0f0;
      }
    }
    
    .btn-success {
      background-color: #059669;
      color: white;
      border-color: #059669;
      
      &:hover:not(:disabled) {
        background-color: #047857;
      }
    }
    
    .btn-danger {
      background-color: #dc2626;
      color: white;
      border-color: #dc2626;
      
      &:hover:not(:disabled) {
        background-color: #b91c1c;
      }
    }
    
    .btn-outline {
      background-color: transparent;
      color: #1f2937;
      border-color: #e5e5e5;
      
      &:hover:not(:disabled) {
        background-color: #f5f5f5;
      }
    }
    
    .btn-ghost {
      background-color: transparent;
      color: #1f2937;
      border-color: transparent;
      
      &:hover:not(:disabled) {
        background-color: #f5f5f5;
      }
    }
    
    // Sizes
    .btn-small {
      padding: 0.375rem 0.75rem;
      font-size: 0.8rem;
      
      .btn-icon {
        font-size: 14px;
        width: 14px;
        height: 14px;
      }
    }
    
    .btn-medium {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      
      .btn-icon {
        font-size: 16px;
        width: 16px;
        height: 16px;
      }
    }
    
    .btn-large {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      
      .btn-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }
    }
  `]
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'ghost' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();
  
  onClick(): void {
    this.clicked.emit();
  }
}
