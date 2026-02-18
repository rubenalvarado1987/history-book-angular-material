import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="avatar" [ngClass]="'avatar-' + size" [style.background-color]="backgroundColor">
      <mat-icon *ngIf="icon && !initials" class="avatar-icon">{{ icon }}</mat-icon>
      <span *ngIf="initials" class="avatar-initials">{{ initials }}</span>
      <img *ngIf="image" [src]="image" alt="Avatar">
    </div>
  `,
  styles: [`
    .avatar {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: white;
      font-weight: 600;
      flex-shrink: 0;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .avatar-small {
      width: 32px;
      height: 32px;
      font-size: 0.75rem;
    }
    
    .avatar-medium {
      width: 48px;
      height: 48px;
      font-size: 0.9rem;
    }
    
    .avatar-large {
      width: 64px;
      height: 64px;
      font-size: 1.2rem;
    }
    
    .avatar-xlarge {
      width: 96px;
      height: 96px;
      font-size: 1.75rem;
    }
    
    .avatar-icon {
      font-size: inherit;
      width: 50%;
      height: 50%;
    }
    
    .avatar-initials {
      font-weight: 700;
      letter-spacing: 0px;
    }
  `]
})
export class AvatarComponent {
  @Input() size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium';
  @Input() backgroundColor: string = '#1f2937';
  @Input() initials?: string;
  @Input() icon?: string;
  @Input() image?: string;
}
