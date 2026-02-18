import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputFieldComponent), multi: true }
  ],
  template: `
    <div class="input-wrapper" [class.has-value]="value || value === 0" [class.has-error]="error">
      <div class="input-field-wrapper">
        <label *ngIf="label" class="input-label">{{ label }}</label>
        
        <div class="input-container" 
             [class.has-icon-left]="(icon || prefixIcon) && iconPosition === 'left'" 
             [class.has-icon-right]="(icon || suffixIcon) && iconPosition === 'right'" 
             [class.has-error]="error"
             [class.focused]="isFocused">
          
          <mat-icon *ngIf="prefixIcon" class="input-icon-left">{{ prefixIcon }}</mat-icon>

          <!-- Textarea variant -->
          <textarea *ngIf="type === 'textarea'"
            class="input-field material-input"
            [rows]="rows || 4"
            [placeholder]="placeholder"
            [disabled]="disabled"
            [ngClass]="'input-' + variant"
            [class.input-error]="error"
            [value]="value"
            (input)="handleInputChange($event)"
            (focus)="isFocused = true"
            (blur)="isFocused = false"></textarea>

          <!-- Normal input variants -->
          <input *ngIf="type !== 'textarea'"
            [type]="nativeType"
            [placeholder]="placeholder"
            [disabled]="disabled"
            class="input-field material-input"
            [ngClass]="'input-' + variant"
            [class.input-error]="error"
            [value]="value"
            (input)="handleInputChange($event)"
            (focus)="isFocused = true"
            (blur)="isFocused = false">

          <!-- Underline animated -->
          <div class="input-underline"></div>

          <!-- Suffix / action icons -->
          <button *ngIf="type === 'search' && value" mat-icon-button class="input-clear" (click)="clear()" aria-label="Clear">
            <mat-icon>close</mat-icon>
          </button>

          <button *ngIf="type === 'password'" mat-icon-button class="input-clear" (click)="togglePassword()" aria-label="Toggle password">
            <mat-icon>{{ showPassword ? 'visibility_off' : 'visibility' }}</mat-icon>
          </button>

          <div *ngIf="type === 'number'" class="number-steppers">
            <button mat-icon-button (click)="step(-1)" aria-label="Decrease"> <mat-icon>remove</mat-icon> </button>
            <button mat-icon-button (click)="step(1)" aria-label="Increase"> <mat-icon>add</mat-icon> </button>
          </div>

          <mat-icon *ngIf="suffixIcon" class="input-icon-right">{{ suffixIcon }}</mat-icon>
        </div>
      </div>
      
      <small *ngIf="helperText" class="input-helper">{{ helperText }}</small>
      
      <!-- Error badge/chip -->
      <div *ngIf="error" class="error-badge">
        <mat-icon class="error-icon">error_outline</mat-icon>
        <span class="error-text">{{ error }}</span>
      </div>
    </div>
  `,
  styles: [`
    .input-wrapper{width:100%;position:relative}
    .input-wrapper.has-error .input-label{color:#dc2626}
    .input-field-wrapper{position:relative;width:100%}
    .input-label{display:block;margin-bottom:0.75rem;font-size:0.9rem;font-weight:500;color:#374151;transition:color 0.2s ease;letter-spacing:0.3px}
    .input-container{position:relative;display:flex;align-items:flex-start;transition:all 0.2s ease;background:linear-gradient(135deg,#f9fafb,#fff);border-radius:12px;border:1.5px solid #e5e7eb;padding:0;overflow:hidden}
    .input-container:hover:not(.has-error){border-color:#d1d5db;background:linear-gradient(135deg,#f3f4f6,#fff)}
    .input-container.focused:not(.has-error){border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,0.08),0 4px 12px rgba(59,130,246,0.1);background:#fff}
    .input-container.has-error{border-color:#f87171;background:linear-gradient(135deg,#fef2f2,#fef9f9)}
    .input-container.has-error .input-underline{background:#dc2626;height:2px}
    .input-field{flex:1;width:100%;padding:1rem 1.125rem;font-size:0.95rem;border:none;background:transparent;color:#1f2937;transition:all 0.2s ease;font-family:inherit;font-weight:400;outline:none;resize:vertical;min-height:44px}
    .input-field.material-input:focus{outline:none}
    .input-field:disabled{background-color:transparent;color:#9ca3af;cursor:not-allowed;opacity:0.6}
    .input-field::placeholder{color:#d1d5db;font-weight:400;transition:color 0.2s ease}
    .input-field:focus::placeholder{color:#bfdbfe}
    textarea.input-field{padding:1rem 1.125rem;resize:vertical;min-height:120px;line-height:1.5}
    input[type="number"].input-field{padding-right:3.5rem}
    .input-error{background:transparent !important;color:#991b1b}
    .input-error::placeholder{color:#fca5a5}
    .input-underline{position:absolute;bottom:0;left:0;width:100%;height:0;background:#3b82f6;transition:height 0.3s ease;pointer-events:none}
    .input-container.focused .input-underline{height:2px}
    .input-container.has-error .input-underline{height:2px;background:#dc2626}
    .input-icon-left{position:absolute;left:0.875rem;top:50%;transform:translateY(-50%);color:#6b7280;font-size:20px;width:20px;height:20px;pointer-events:none;z-index:2;transition:color 0.2s ease}
    .input-container.focused .input-icon-left{color:#3b82f6}
    .input-container.has-error .input-icon-left{color:#dc2626;animation:shake 0.4s cubic-bezier(0.36,0,0.66,-0.56)}
    .input-icon-right{position:absolute;right:0.875rem;top:50%;transform:translateY(-50%);color:#6b7280;font-size:20px;width:20px;height:20px;pointer-events:none;z-index:2}
    .input-container.focused .input-icon-right{color:#3b82f6}
    .input-container.has-error .input-icon-right{color:#dc2626}
    .input-container.has-icon-left .input-field{padding-left:3.25rem}
    .input-container.has-icon-right .input-field{padding-right:3.25rem}
    .input-clear{position:absolute;right:0.5rem;top:50%;transform:translateY(-50%);color:#9ca3af;background:transparent;z-index:3;transition:color 0.2s ease}
    .input-clear:hover{color:#6b7280}
    .number-steppers{position:absolute;right:0.25rem;top:50%;transform:translateY(-50%);display:flex;gap:0.25rem;z-index:3}
    .number-steppers button{padding:0.25rem;min-width:unset}
    .number-steppers button mat-icon{font-size:16px;width:16px;height:16px}
    .input-helper{display:block;margin-top:0.5rem;font-size:0.8rem;color:#9ca3af;transition:color 0.2s ease}
    .input-wrapper.has-error .input-helper{color:#dc2626}
    .error-badge{display:inline-flex;align-items:center;gap:0.6rem;margin-top:0.875rem;padding:0.75rem 1rem;background:linear-gradient(135deg,#fee2e2,#fecaca);border:1.5px solid #fca5a5;border-radius:10px;font-size:0.85rem;color:#7f1d1d;font-weight:600;animation:slideInDown 0.35s cubic-bezier(0.34,1.56,0.64,1);box-shadow:0 2px 8px rgba(220,38,38,0.12)}
    .error-badge .error-icon{font-size:18px;width:18px;height:18px;color:#dc2626;flex-shrink:0;display:flex;align-items:center;justify-content:center}
    .error-badge .error-text{letter-spacing:0.2px}
    @keyframes shake{0%,100%{transform:translateY(-50%) translateX(0)}25%{transform:translateY(-50%) translateX(-3px)}75%{transform:translateY(-50%) translateX(3px)}}
    @keyframes slideInDown{0%{opacity:0;transform:translateY(-12px)}100%{opacity:1;transform:translateY(0)}}
  `]
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'password' | 'textarea' | 'search' | 'number' = 'text';
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() icon?: string; // legacy single icon
  @Input() prefixIcon?: string;
  @Input() suffixIcon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() helperText?: string;
  @Input() variant: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
  @Input() disabled: boolean = false;
  @Input() rows?: number;
  @Input() error?: string; // pass error message to show red state

  // internal
  value: any = '';
  showPassword = false;
  isFocused = false;

  // ControlValueAccessor callbacks
  private onChange: (v: any) => void = () => {};
  private onTouched: () => void = () => {};

  get nativeType() {
    if (this.type === 'password') return this.showPassword ? 'text' : 'password';
    if (this.type === 'search') return 'search';
    if (this.type === 'number') return 'number';
    return 'text';
  }

  clear() {
    this.value = '';
    this.onChange(this.value);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  step(delta: number) {
    const n = Number(this.value) || 0;
    this.value = n + delta;
    this.onChange(this.value);
  }

  onInput(v: any) {
    if (this.type === 'number') {
      this.value = v === '' ? null : Number(v);
    } else {
      this.value = v;
    }
    this.onChange(this.value);
  }

  handleInputChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    if (target) {
      this.onInput(target.value);
    }
  }

  // ControlValueAccessor implementation
  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = !!isDisabled;
  }
}
