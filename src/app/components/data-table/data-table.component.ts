import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface TableRow {
  [key: string]: any;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="table-wrapper">
      <table class="data-table">
        <thead>
          <tr>
            <th *ngFor="let col of columns" [ngClass]="col.sortable ? 'sortable' : ''">
              {{ col.label }}
              <mat-icon *ngIf="col.sortable" class="sort-icon">unfold_more</mat-icon>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows" class="table-row">
            <td *ngFor="let col of columns" class="table-cell">
              {{ row[col.key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .table-wrapper {
      overflow-x: auto;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
    }
    
    .data-table {
      width: 100%;
      border-collapse: collapse;
      background-color: #ffffff;
      
      thead {
        background-color: #fafafa;
        border-bottom: 1px solid #e5e5e5;
      }
      
      th {
        padding: 1rem;
        text-align: left;
        font-weight: 600;
        color: #1a1a1a;
        font-size: 0.9rem;
        white-space: nowrap;
        
        &.sortable {
          cursor: pointer;
          user-select: none;
          
          &:hover {
            background-color: #f5f5f5;
          }
        }
        
        .sort-icon {
          font-size: 16px;
          width: 16px;
          height: 16px;
          margin-left: 0.4rem;
          opacity: 0.5;
        }
      }
      
      tbody tr {
        border-bottom: 1px solid #f0f0f0;
        transition: background-color 0.2s ease;
        
        &:hover {
          background-color: #f9f9f9;
        }
        
        &:last-child {
          border-bottom: none;
        }
      }
      
      td {
        padding: 0.875rem 1rem;
        color: #666;
        font-size: 0.9rem;
      }
    }
  `]
})
export class DataTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() rows: TableRow[] = [];
}
