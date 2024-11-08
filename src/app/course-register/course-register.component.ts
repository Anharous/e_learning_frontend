import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'; 


@Component({
  selector: 'app-course-register',
  standalone: true,
  imports: [],
  templateUrl: './course-register.component.html',
  styleUrl: './course-register.component.css'
})
export class CourseRegisterComponent implements OnInit{
  courseTitle: string = '';
  formData: any = {name:'',email:''}; // Assuming form data will be populated from template bindings
  successMessage: string = ''; // To store success message
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Capture the course title from the route
    this.courseTitle = this.route.snapshot.paramMap.get('courseTitle') || '';
  }

  async onSubmit() {
    try {
      const response = await fetch('http://localhost:8080/api/register-course', { // Change to your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData) // Assumes form data is in JSON format
      });

      if (response.ok) {
        
        // Redirect to the course page after successful submission
        console.log('Successfully Registered')
        this.router.navigate(['/course-details',this.courseTitle]);
      } else {
        console.error('Failed to register course:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

}
