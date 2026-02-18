import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <mat-card class="user-card">
      <div class="user-header">
        <div class="avatar" [ngStyle]="{'background-color': avatarColor}">
          {{ initials }}
        </div>
        <div class="user-info">
          <h3>{{ name }}</h3>
          <p class="role">{{ role }}</p>
        </div>
        <button mat-icon-button class="follow-btn">
          <mat-icon>{{ isFollowing ? 'check' : 'person_add' }}</mat-icon>
        </button>
      </div>
      
      <div class="user-stats">
        <div class="stat">
          <div class="stat-value">{{ followers }}</div>
          <div class="stat-label">Followers</div>
        </div>
        <div class="stat">
          <div class="stat-value">{{ following }}</div>
          <div class="stat-label">Following</div>
        </div>
        <div class="stat">
          <div class="stat-value">{{ posts }}</div>
          <div class="stat-label">Posts</div>
        </div>
      </div>
      
      <p class="bio">{{ bio }}</p>
      
      <div class="user-actions">
        <button mat-stroked-button>Message</button>
        <button mat-raised-button color="primary">Connect</button>
      </div>
    </mat-card>
  `,
  styles: [`
    .user-card {
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
      background: #ffffff;
      border: 1px solid #e5e5e5;
      
      .user-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
        
        .avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        
        .user-info {
          h3 {
            margin: 0;
            font-size: 1.1rem;
            color: #1a1a1a;
            font-weight: 600;
          }
          
          .role {
            margin: 0.25rem 0 0 0;
            color: #666;
            font-size: 0.85rem;
          }
        }
        
        .follow-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }
      }
    }
    
    .user-stats {
      display: flex;
      justify-content: space-around;
      margin-bottom: 1.5rem;
      padding: 1rem 0;
      border-top: 1px solid #f0f0f0;
      border-bottom: 1px solid #f0f0f0;
      
      .stat {
        text-align: center;
        
        .stat-value {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a1a1a;
        }
        
        .stat-label {
          font-size: 0.8rem;
          color: #999;
          margin-top: 0.375rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      }
    }
    
    .bio {
      margin: 1rem 0;
      color: #666;
      line-height: 1.5;
      font-size: 0.9rem;
    }
    
    .user-actions {
      display: flex;
      gap: 0.75rem;
      
      button {
        flex: 1;
      }
    }
  `]
})
export class UserCardComponent {
  @Input() name: string = 'John Doe';
  @Input() role: string = 'Product Designer';
  @Input() bio: string = 'Passionate about creating beautiful and functional digital experiences.';
  @Input() followers: number = 1200;
  @Input() following: number = 456;
  @Input() posts: number = 89;
  @Input() avatarColor: string = '#667eea';
  @Input() isFollowing: boolean = false;
  
  get initials(): string {
    return this.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
}
