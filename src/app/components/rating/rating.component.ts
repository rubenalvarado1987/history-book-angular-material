import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="rating-wrapper">
      <div class="stars">
        <mat-icon 
          *ngFor="let star of [1,2,3,4,5]"
          class="star"
          [ngClass]="star <= rating ? 'filled' : 'empty'">
          star
        </mat-icon>
      </div>
      <span class="rating-text">{{ rating }} / 5</span>
      <span class="rating-count" *ngIf="reviewCount">({{ reviewCount }} reviews)</span>
    </div>
  `,
  styles: [`
    .rating-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .stars {
      display: flex;
      gap: 0.35rem;
    }
    
    .star {
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &.filled {
        color: #fbbf24;
      }
      
      &.empty {
        color: #d1d5db;
      }
      
      &:hover {
        transform: scale(1.1);
      }
    }
    
    .rating-text {
      font-weight: 600;
      color: #1a1a1a;
      font-size: 0.9rem;
    }
    
    .rating-count {
      font-size: 0.85rem;
      color: #999;
    }
  `]
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Input() reviewCount?: number;
}
