import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="input-wrapper">
      <label *ngIf="label" class="input-label">{{ label }}</label>
      <div class="input-container" [class.has-icon-left]="icon && iconPosition === 'left'" [class.has-icon-right]="icon && iconPosition === 'right'">
        <mat-icon *ngIf="icon && iconPosition === 'left'" class="input-icon-left">{{ icon }}</mat-icon>
        <input 
          [type]="type"
          [placeholder]="placeholder"
          [disabled]="disabled"
          class="input-field"
          [ngClass]="'input-' + variant">
        <mat-icon *ngIf="icon && iconPosition === 'right'" class="input-icon-right">{{ icon }}</mat-icon>
      </div>
      <small *ngIf="helperText" class="input-helper">{{ helperText }}</small>
    </div>
  `,
  styles: [`
    .input-wrapper {
      width: 100%;
    }
    
    .input-label {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
      color: #1a1a1a;
    }
    
    .input-container {
      position: relative;
      display: flex;
      align-items: center;
    }
    
    .input-field {
      width: 100%;
      padding: 0.625rem 1rem;
      font-size: 0.9rem;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      background-color: #ffffff;
      color: #1a1a1a;
      transition: all 0.2s ease;
      font-family: inherit;
      
      &:focus {
        outline: none;
        border-color: #1f2937;
        box-shadow: 0 0 0 3px rgba(31, 41, 55, 0.1);
      }
      
      &:disabled {
        background-color: #f5f5f5;
        color: #999;
        cursor: not-allowed;
      }
      
      &::placeholder {
        color: #999;
      }
    }
    
    .input-primary {
      border-color: #e5e5e5;
      
      &:focus {
        border-color: #1f2937;
      }
    }
    
    .input-success {
      border-color: #d1fae5;
      
      &:focus {
        border-color: #059669;
      }
    }
    
    .input-warning {
      border-color: #fef3c7;
      
      &:focus {
        border-color: #d97706;
      }
    }
    
    .input-danger {
      border-color: #fecaca;
      
      &:focus {
        border-color: #dc2626;
      }
    }
    
    .input-icon-left {
      position: absolute;
      left: 0.75rem;
      color: #999;
      font-size: 18px;
      width: 18px;
      height: 18px;
      pointer-events: none;
    }
    
    .input-icon-right {
      position: absolute;
      right: 0.75rem;
      color: #999;
      font-size: 18px;
      width: 18px;
      height: 18px;
      pointer-events: none;
    }
    
    /* Apply padding when container indicates there is an icon */
    .input-container.has-icon-left .input-field {
      padding-left: 2.5rem;
    }

    .input-container.has-icon-right .input-field {
      padding-right: 2.5rem;
    }
    
    .input-helper {
      display: block;
      margin-top: 0.4rem;
      font-size: 0.8rem;
      color: #999;
    }
  `]
})
export class InputFieldComponent {
  @Input() type: string = 'text';
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() helperText?: string;
  @Input() variant: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
  @Input() disabled: boolean = false;
}
