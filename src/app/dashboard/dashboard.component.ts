import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { StatsCardComponent } from '../components/stats-card/stats-card.component';
import { ChartCardComponent } from '../components/chart-card/chart-card.component';
import { AlertBannerComponent } from '../components/alert-banner/alert-banner.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MaterialModule, StatsCardComponent, ChartCardComponent, AlertBannerComponent],
  template: `
    <div class="dashboard-wrapper">
      <app-alert-banner 
        title="Welcome!"
        message="This is your modern Angular Material dashboard with custom components."
        severity="info">
      </app-alert-banner>

      <h2>Dashboard Overview</h2>
      <div class="dashboard-grid">
        <app-stats-card
          title="Total Sales"
          value="$45,321"
          [changePercent]="12"
          [isPositive]="true"
          icon="shopping_cart"
          variant="primary">
        </app-stats-card>
        
        <app-stats-card
          title="Active Users"
          value="2,345"
          [changePercent]="8"
          [isPositive]="true"
          icon="people"
          variant="success">
        </app-stats-card>
        
        <app-stats-card
          title="Conversion Rate"
          value="3.24%"
          [changePercent]="2"
          [isPositive]="false"
          icon="trending_down"
          variant="warning">
        </app-stats-card>
        
        <app-stats-card
          title="Support Tickets"
          value="24"
          [changePercent]="15"
          [isPositive]="false"
          icon="error"
          variant="danger">
        </app-stats-card>
      </div>

      <h2 style="margin-top: 2rem;">Analytics</h2>
      <div class="charts-grid">
        <app-chart-card title="Revenue Trend"></app-chart-card>
        <app-chart-card title="User Activity"></app-chart-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;

      h2 {
        font-size: 1.4rem;
        margin-top: 0;
        margin-bottom: 1.5rem;
        color: #1a1a1a;
        font-weight: 600;
        letter-spacing: -0.5px;
      }
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
    }

    .charts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
      gap: 1.5rem;
    }
  `]
})
export class Dashboard {}
