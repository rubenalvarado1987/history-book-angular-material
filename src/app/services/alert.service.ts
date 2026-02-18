import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AlertSeverity = 'success' | 'warning' | 'danger' | 'info';

export interface AlertItem {
  id: string;
  title: string;
  message: string;
  severity: AlertSeverity;
  timeout?: number; // ms
}

@Injectable({ providedIn: 'root' })
export class AlertService {
  private _alerts = new BehaviorSubject<AlertItem[]>([]);
  readonly alerts$ = this._alerts.asObservable();

  show(alert: Omit<AlertItem, 'id'>) {
    const id = Math.random().toString(36).slice(2, 9);
    const item: AlertItem = { id, ...alert };
    const current = this._alerts.value;
    this._alerts.next([item, ...current]);

    if (alert.timeout && alert.timeout > 0) {
      setTimeout(() => this.dismiss(id), alert.timeout);
    }

    return id;
  }

  dismiss(id: string) {
    this._alerts.next(this._alerts.value.filter(a => a.id !== id));
  }

  clear() {
    this._alerts.next([]);
  }
}
