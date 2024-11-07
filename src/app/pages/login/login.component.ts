
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showForgotPassword: boolean = false;
  forgotEmail: string = '';
  
  constructor(private loginService: LoginService, private router: Router) {}

  async onLogin(): Promise<void> {
    if (this.email && this.password) {
      const loginData = {
        email: this.email,
        password: this.password
      };

      try {
        const response = await this.loginService.login(loginData); // Await the response from service
        localStorage.setItem('token', response.token); // Assuming token-based authentication
        if (response.role === 'Admin') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/user-dashboard']);
        }
      } catch (err) {
        console.error('Login failed', err);
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  }

  // Handle forgot password (optional)
  async submitForgotPassword(): Promise<void> {
    if (this.forgotEmail) {
      try {
        await this.loginService.resetPassword(this.forgotEmail); // Await the response from service
        alert('Password reset instructions sent to your email!');
        this.showForgotPassword = false; // Hide forgot password section
      } catch (err) {
        alert('Failed to send reset instructions. Please try again.');
      }
    } else {
      alert('Please enter your registered email.');
    }
  }
}
