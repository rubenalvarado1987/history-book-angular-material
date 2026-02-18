import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="pagination-wrapper">
      <button 
        mat-icon-button 
        [disabled]="currentPage === 1"
        (click)="onPrevious()">
        <mat-icon>chevron_left</mat-icon>
      </button>
      
      <div class="page-info">
        Página <strong>{{ currentPage }}</strong> de <strong>{{ totalPages }}</strong>
      </div>
      
      <button 
        mat-icon-button 
        [disabled]="currentPage === totalPages"
        (click)="onNext()">
        <mat-icon>chevron_right</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    .pagination-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 1.5rem;
      background-color: #fafafa;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      
      button {
        &:disabled {
          opacity: 0.5;
        }
      }
    }
    
    .page-info {
      font-size: 0.9rem;
      color: #1a1a1a;
      white-space: nowrap;
      
      strong {
        font-weight: 600;
        color: #1f2937;
      }
    }
  `]
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChanged = new EventEmitter<number>();
  
  onNext(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
  }
  
  onPrevious(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
  }
}
