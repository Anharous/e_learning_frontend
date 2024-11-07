
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8080/api/login'; // Your backend URL
  private resetPasswordUrl = 'http://localhost:8080/api/forgot-password'; // For password reset

  constructor() {}

  // Login method using Fetch API
  async login(credentials: { email: string, password: string }) {
    try {
      const response = await fetch(this.loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials) // Send the credentials as JSON
      });

      if (!response.ok) {
        throw new Error('Login failed, please check your credentials');
      }

      const data = await response.json(); // Parse the JSON response
      return data; // Return the response data
    } catch (error) {
      console.error('There was an error with the login request:', error);
      throw error; // Re-throw the error for handling in the component
    }
  }

  // Reset password method using Fetch API
  async resetPassword(email: string) {
    try {
      const response = await fetch(this.resetPasswordUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }) // Send the email as JSON
      });

      if (!response.ok) {
        throw new Error('Password reset failed, please try again');
      }

      const data = await response.json(); // Parse the JSON response
      return data; // Return the response data
    } catch (error) {
      console.error('There was an error with the password reset request:', error);
      throw error; // Re-throw the error for handling in the component
    }
  }
}