import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../service/registration.service';


@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  roles = ['Admin', 'User']; // Define available roles
  registrationSuccess: boolean = false;
  registrationError: string | null = null;
  successMessage: string | null = null; // Add a success message variable
  errorMessage: string | null = null;   // Add an error message variable


  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      fullname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      date: ['', Validators.required],
      role: ['', Validators.required] // Dropdown for selecting role
    });
  }

  async onSubmit(): Promise<void> {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      try {
        // Call the registration service to send data to backend
        const response = await this.registrationService.register(formData);

        this.successMessage = 'Successfully Registered!'; // Success message
        this.errorMessage = null;  // Clear any previous error message
        this.registrationSuccess = true;

        // Navigate to the appropriate dashboard based on role
        if (formData.role === 'Admin') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/user-dashboard']);
        }
      } catch (error) {
        // On error, show error message
        this.registrationSuccess = false;
        this.successMessage = null; // Clear success message
        this.errorMessage = 'Registration Unsuccessful. Please check your inputs.'; // Error message
        console.error('Registration Error:', error);
      }
    } else {
      // If the form is invalid, show an error for invalid fields
      this.successMessage = null; // Clear any success message
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }
}
