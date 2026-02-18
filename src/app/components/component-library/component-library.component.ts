import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { StatsCardComponent } from '../stats-card/stats-card.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { AlertCenterComponent } from '../alert-center/alert-center.component';
import { BadgeComponent } from '../badge/badge.component';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ButtonComponent } from '../button/button.component';
import { ProgressComponent } from '../progress/progress.component';
import { RatingComponent } from '../rating/rating.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { StatBadgeComponent } from '../stat-badge/stat-badge.component';
import { ChartsShowcaseComponent } from '../charts/charts-showcase.component';
import { ChartJsShowcaseComponent } from '../charts/chartjs-showcase.component';

@Component({
  selector: 'app-component-library',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    StatsCardComponent,
    ChartsShowcaseComponent,
    ChartJsShowcaseComponent,
    UserCardComponent,
    AlertCenterComponent,
    BadgeComponent,
    FeatureCardComponent,
    AvatarComponent,
    ButtonComponent,
    ProgressComponent,
    RatingComponent,
    InputFieldComponent,
    DataTableComponent,
    PaginationComponent,
    StatBadgeComponent
  ],
  templateUrl: './component-library.component.html',
  styleUrl: './component-library.component.scss'
})
export class HistoryBookComponent {
  selectedComponent: string = 'all';
  
  components = [
    { id: 'stats', label: 'Stats Cards', icon: 'trending_up', description: 'Tarjetas de métricas con indicadores visuales de tendencia. Ideales para dashboards ejecutivos.' },
    { id: 'charts', label: 'Gráficos', icon: 'bar_chart', description: 'Componentes para visualizar datos. Usa para análisis y visualización de series temporales.' },
    { id: 'users', label: 'Perfiles de Usuario', icon: 'people', description: 'Tarjetas de perfil con información de usuarios. Perfectas para directorios o equipos.' },
    { id: 'alerts', label: 'Alertas', icon: 'notifications', description: 'Mensajes de notificación con niveles de severidad. Comunica estados y reacciones al usuario.' },
    { id: 'badges', label: 'Etiquetas', icon: 'label', description: 'Indicadores de estado compactos. Usa para clasificar, etiquetar o marcar estados.' },
    { id: 'features', label: 'Tarjetas de Características', icon: 'lightbulb', description: 'Presenta características y beneficios. Ideal para landing pages y secciones de servicios.' },
    { id: 'avatars', label: 'Avatares', icon: 'account_circle', description: 'Representación visual de usuarios. Soporta iniciales, iconos e imágenes.' },
    { id: 'buttons', label: 'Botones', icon: 'touch_app', description: 'Elementos interactivos primarios. Proporciona múltiples variantes para jerarquía visual.' },
    { id: 'progress', label: 'Barras de Progreso', icon: 'speed', description: 'Visualiza completitud de procesos. Usa para descargas, cargas o pasos completados.' },
    { id: 'ratings', label: 'Calificaciones', icon: 'star', description: 'Componente para mostrar y gestionar ratings de usuarios.' },
    { id: 'inputs', label: 'Campos de Entrada', icon: 'edit', description: 'Inputs flexibles con variantes. Soporta iconos, tooltips y validación.' },
    { id: 'tables', label: 'Tabla de Datos', icon: 'table_chart', description: 'Tabla sorteable y responsive. Ideal para presentar datos estructurados.' },
    { id: 'pagination', label: 'Paginación', icon: 'navigate_next', description: 'Controles de navegación entre páginas. Mantén UX clara en listas largas.' },
    { id: 'stat-badges', label: 'Badgers Estadísticos', icon: 'info', description: 'Mini tarjetas con número + contexto. Perfectas para dashboards compactos.' }
  ];
  
  statsCardVariants = [
    { title: 'Total Sales', value: '12,456', changePercent: 15, isPositive: true, icon: 'shopping_cart', variant: 'primary' as const },
    { title: 'Revenue', value: '$45,321', changePercent: 8, isPositive: true, icon: 'attach_money', variant: 'success' as const },
    { title: 'Active Users', value: '2,345', changePercent: -5, isPositive: false, icon: 'people', variant: 'warning' as const },
    { title: 'Alerts', value: '12', changePercent: 22, isPositive: false, icon: 'warning', variant: 'danger' as const }
  ];
  
  chartVariants = [
    { title: 'Monthly Revenue' },
    { title: 'User Growth' },
    { title: 'Conversion Rate' }
  ];
  
  userVariants = [
    {
      name: 'Sarah Anderson',
      role: 'UX/UI Designer',
      bio: 'Creating beautiful and intuitive interfaces for modern web.',
      followers: 2345,
      following: 678,
      posts: 125,
      avatarColor: '#667eea'
    },
    {
      name: 'Mike Johnson',
      role: 'Full Stack Developer',
      bio: 'Building scalable applications with cutting-edge technologies.',
      followers: 1890,
      following: 456,
      posts: 98,
      avatarColor: '#f093fb'
    },
    {
      name: 'Emma Wilson',
      role: 'Product Manager',
      bio: 'Passionate about creating products that users love.',
      followers: 3200,
      following: 890,
      posts: 156,
      avatarColor: '#4facfe'
    }
  ];
  
  alertVariants = [
    { title: 'Success!', message: 'Your changes have been saved successfully.', severity: 'success' as const },
    { title: 'Warning', message: 'This action cannot be undone. Please proceed with caution.', severity: 'warning' as const },
    { title: 'Error', message: 'Something went wrong. Please try again later.', severity: 'danger' as const },
    { title: 'Information', message: 'A new update is available. Please refresh to see the latest changes.', severity: 'info' as const }
  ];
  
  badgeVariants = [
    { label: 'Active', variant: 'success' as const, icon: 'check_circle' },
    { label: 'Pending', variant: 'warning' as const, icon: 'schedule' },
    { label: 'Inactive', variant: 'danger' as const, icon: 'block' },
    { label: 'New', variant: 'primary' as const, icon: 'new_releases' },
    { label: 'Premium', variant: 'secondary' as const, icon: 'star' }
  ];
  
  featureVariants = [
    {
      icon: 'lightning_bolt',
      iconColor: '#f093fb',
      title: 'Lightning Fast',
      description: 'Built for performance with optimized rendering and minimal bundle size.',
      meta: [
        { icon: 'speed', label: '< 100ms load' },
        { icon: 'storage', label: '50KB gzip' }
      ]
    },
    {
      icon: 'shield',
      iconColor: '#667eea',
      title: 'Secure by Default',
      description: 'Enterprise-grade security features to protect your data.',
      meta: [
        { icon: 'verified', label: 'SSL/TLS' },
        { icon: 'vpn_lock', label: 'End-to-End Encrypted' }
      ]
    },
    {
      icon: 'palette',
      iconColor: '#4facfe',
      title: 'Fully Customizable',
      description: 'Easily customize colors, layouts, and components to match your brand.',
      meta: [
        { icon: 'design_services', label: 'Theme Builder' },
        { icon: 'code', label: 'Component API' }
      ]
    }
  ];

  avatarVariants = [
    { initials: 'SA', color: '#667eea' },
    { initials: 'MJ', color: '#f093fb' },
    { initials: 'EW', color: '#4facfe' },
    { icon: 'account_circle', color: '#d97706' },
    { image: 'https://via.placeholder.com/48', color: '#059669' }
  ];

  buttonVariants = [
    { label: 'Primary', variant: 'primary' as const, size: 'medium' as const },
    { label: 'Secondary', variant: 'secondary' as const, size: 'medium' as const },
    { label: 'Success', variant: 'success' as const, size: 'medium' as const },
    { label: 'Danger', variant: 'danger' as const, size: 'medium' as const },
    { label: 'Outline', variant: 'outline' as const, size: 'medium' as const },
    { label: 'Ghost', variant: 'ghost' as const, size: 'medium' as const }
  ];

  progressVariants = [
    { percentage: 25, variant: 'primary' as const, label: 'Primary' },
    { percentage: 50, variant: 'success' as const, label: 'Success' },
    { percentage: 75, variant: 'warning' as const, label: 'Warning' },
    { percentage: 85, variant: 'danger' as const, label: 'Danger' },
    { percentage: 100, variant: 'info' as const, label: 'Completed' }
  ];

  ratingVariants = [
    { rating: 5, reviewCount: 234 },
    { rating: 4, reviewCount: 156 },
    { rating: 3.5, reviewCount: 89 },
    { rating: 2, reviewCount: 34 }
  ];

  tableColumns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'status', label: 'Status', sortable: false },
    { key: 'date', label: 'Joined', sortable: true }
  ];

  tableData = [
    { name: 'Sarah Anderson', role: 'Designer', status: 'Active', date: '2024-01-15' },
    { name: 'Mike Johnson', role: 'Developer', status: 'Active', date: '2024-02-20' },
    { name: 'Emma Wilson', role: 'Manager', status: 'Inactive', date: '2023-12-10' },
    { name: 'John Smith', role: 'Analyst', status: 'Active', date: '2024-03-05' },
    { name: 'Lisa Brown', role: 'Developer', status: 'Active', date: '2024-01-25' }
  ];

  currentPage: number = 1;
  paginationSize: number = 5;

  onPageChanged(page: number) {
    this.currentPage = page;
  }

  statBadgeVariants = [
    { label: 'Revenue', number: '$45.2K', subtitle: 'Last 30 days', icon: 'trending_up', variant: 'success' as const },
    { label: 'Users', number: '2,345', subtitle: 'Active users', icon: 'people', variant: 'primary' as const },
    { label: 'Growth', number: '+18%', subtitle: 'Month over month', icon: 'trending_up', variant: 'warning' as const },
    { label: 'Issues', number: '12', subtitle: 'To resolve', icon: 'warning', variant: 'danger' as const }
  ];

  // expose alert usage
  alertUsage: string = `// Usar AlertService (singleton)\nimport { AlertService } from 'src/app/services/alert.service';\n\nconstructor(private alerts: AlertService) {}\n\n// mostrar alerta\nthis.alerts.show({ title: 'Hecho', message: 'Guardado', severity: 'success', timeout: 4000 });`;

  // InputField usage examples
  inputUsage: string = `// Ejemplos de uso de InputField\n<app-input-field label="Search" type="search" placeholder="Buscar..." prefixIcon="search"></app-input-field>\n\n<app-input-field label="Password" type="password" placeholder="Password" prefixIcon="lock"></app-input-field>\n\n<app-input-field label="Comments" type="textarea" [rows]="6" placeholder="Escribe tu comentario..."></app-input-field>\n\n<app-input-field label="Quantity" type="number" placeholder="0"></app-input-field>\n\n// Ejemplo Reactive Forms:\nimport { ReactiveFormsModule, FormControl } from '@angular/forms';\nconst ctrl = new FormControl('');\n// en template: <app-input-field [formControl]="ctrl"></app-input-field>`;

  // Reactive form demo
  demoForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    comments: new FormControl('', []),
    quantity: new FormControl<number | null>(null, [Validators.min(0)])
  });

  submitDemo() {
    if (this.demoForm.valid) {
      // simple demo action — in real app, call service
      console.log('Demo form value', this.demoForm.value);
      alert('Formulario válido — revisar consola');
    } else {
      this.demoForm.markAllAsTouched();
    }
  }

  getErrorMessage(fieldName: string): string {
    const control = this.demoForm.get(fieldName);
    if (!control || !control.errors) return '';
    
    const errors = control.errors;
    if (errors['required']) return 'Este campo es requerido.';
    if (errors['minlength']) return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
    if (errors['email']) return 'Email inválido.';
    if (errors['min']) return `Mínimo valor: ${errors['min'].min}.`;
    
    return 'Campo inválido.';
  }
}
