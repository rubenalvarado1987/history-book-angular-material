import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';
import { AlertBannerComponent } from '../alert-banner/alert-banner.component';

@Component({
  selector: 'app-alert-center',
  standalone: true,
  imports: [CommonModule, AlertBannerComponent],
  template: `
    <div class="alert-center">
      <div class="controls">
        <button mat-stroked-button color="primary" (click)="show('info')">Show Info</button>
        <button mat-stroked-button color="accent" (click)="show('success')">Show Success</button>
        <button mat-stroked-button color="warn" (click)="show('warning')">Show Warning</button>
        <button mat-stroked-button color="warn" (click)="show('danger')">Show Error</button>
      </div>

      <div class="alerts-list">
        <ng-container *ngFor="let a of alerts">
          <app-alert-banner
            [title]="a.title"
            [message]="a.message"
            [severity]="a.severity"
            (click)="dismiss(a.id)">
          </app-alert-banner>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
    .alert-center { display:flex; flex-direction:column; gap:1rem; }
    .controls { display:flex; gap:0.5rem; flex-wrap:wrap; }
    .alerts-list { display:flex; flex-direction:column; }
    `
  ]
})
export class AlertCenterComponent {
  alerts = [] as any[];

  constructor(private alertsSvc: AlertService) {
    this.alertsSvc.alerts$.subscribe(v => this.alerts = v);
  }

  show(sev: any) {
    const map: any = {
      info: { title: 'Info', message: 'Mensaje informativo', severity: 'info', timeout: 4000 },
      success: { title: 'Success', message: 'Operación completada', severity: 'success', timeout: 4000 },
      warning: { title: 'Warning', message: 'Atención requerida', severity: 'warning', timeout: 6000 },
      danger: { title: 'Error', message: 'Ocurrió un error', severity: 'danger', timeout: 8000 }
    };

    this.alertsSvc.show(map[sev]);
  }

  dismiss(id: string) {
    this.alertsSvc.dismiss(id);
  }
}
