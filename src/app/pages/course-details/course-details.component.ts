import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterBySearchPipe } from './filter-by-search.pipe';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [FormsModule,CommonModule,FilterBySearchPipe],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  searchQuery: string = '';

  courseCategories = [
    {
      title: 'Software & Web Development',
      courses: [
        { title: 'Web Development', 
          image: '/images/webdevelopment.jpg', 
          description: 'Learn how to build responsive websites using HTML, CSS, JavaScript, and modern frameworks.',provider: 'Udemy',
          skills: 'HTML, CSS, JavaScript, React',
          rating: 4.5,
          duration: 30 },
        { title: 'UI/UX Design', image: '/images/uiux.png', description: 'Design engaging user experiences using wireframing, prototyping, and modern design tools.',provider: 'Coursera',
          skills: 'Wireframing, Prototyping, Figma, Sketch',
          rating: 4.7,
          duration: 20 },
        { title: 'Figma Design', image: '/images/figma.png', description: 'Master the art of UI/UX design with Figma, a powerful design tool for creating stunning web and mobile interfaces with ease and collaboration.',provider: 'Udacity',
          skills: 'UI Design, Figma, Prototyping, Collaboration',
          rating: 4.8,
          duration: 25 },
        { title: 'Game Development', image: '/images/gamedev.png', description: 'Develop video games for PC, mobile, and consoles using Unity, Unreal Engine, and C#.',provider: 'Pluralsight',
          skills: 'Unity, Unreal Engine, C#',
          rating: 4.6,
          duration: 40 }
      ]
    },
    {
      title: 'Data Science & Artificial Intelligence',
      courses: [
        { title: 'Data Science', image: '/images/datascience.png', description: 'Master data analysis, visualization, and machine learning using Python, R, and AI tools.',provider: 'edX',
          skills: 'Data Analysis, Python, R, Machine Learning',
          rating: 4.9,
          duration: 50 },
        { title: 'AI & DataScience', image: '/images/ai.png', description: 'Explore the exciting world of Artificial Intelligence and Data Science. This course covers machine learning, deep learning, and data analytics, providing you with skills.',provider: 'Coursera',
          skills: 'Machine Learning, Deep Learning, Data Analytics',
          rating: 4.8,
          duration: 60 },
        { title: 'AI & Machine Learning', image: '/images/ml.png', description: 'Explore AI models and machine learning algorithms to build intelligent systems.',provider: 'Udemy',
          skills: 'AI, Machine Learning, Neural Networks',
          rating: 4.7,
          duration: 45 },
        { title: 'Data Engineering', image: '/images/dataengi.png', description: 'This course covers essential tools and techniques to create scalable data pipelines and manage ETL processes for transforming data into insights.',provider: 'LinkedIn Learning',
          skills: 'Data Pipelines, ETL, Cloud Computing',
          rating: 4.6,
          duration: 55 }
      ]
    },
    {
      title: 'Cloud Computing & DevOps',
      courses: [
        { title: 'Cloud Computing', image: '/images/cloudcompute.png', description: 'Get hands-on experience with AWS, Azure, and Google Cloud to build scalable solutions.',provider: 'edX',
          skills: 'Data Analysis, Python, R, Machine Learning',
          rating: 3.9,
          duration: 50 },
        { title: 'DevOps Engineering', image: '/images/devops.png', description: 'Explore the exciting world of Artificial Intelligence and Data Science. This course covers machine learning, deep learning, and data analytics, providing you with skills.',provider: 'Coursera',
          skills: 'Machine Learning, Deep Learning, Data Analytics',
          rating: 4.8,
          duration: 60 },
        { title: 'Cybersecurity', image: '/images/cybersecurity.png', description: 'Streamline software development processes and automate deployment pipelines with DevOps tools.',provider: 'Udemy',
          skills: 'AI, Machine Learning, Neural Networks',
          rating: 4.7,
          duration: 45 }
      ]
    },
    {
      title: 'Emerging Technologies & Specialized Topics',
      courses: [
        { title: 'Blockchain Development', image: '/images/blockchain.png', description: 'Understand decentralized technologies and build blockchain-based applications.',provider: 'edX',
          skills: 'Data Analysis, Python, R, Machine Learning',
          rating: 3.9,
          duration: 50 },
        { title: 'Mobile App Development', image: '/images/mobappdev.png', description: 'Create mobile applications for Android and iOS using Flutter, React Native, and Swift.',provider: 'Coursera',
          skills: 'Machine Learning, Deep Learning, Data Analytics',
          rating: 4.8,
          duration: 60 },
        { title: 'Augmented & Virtual Reality (AR/VR)', image: '/images/arvr.png', description: 'This course covers the fundamentals of AR/VR development, including tools like Unity and ARKit, enabling students to build engaging applications for various industries.',provider: 'Udemy',
          skills: 'AI, Machine Learning, Neural Networks',
          rating: 4.7,
          duration: 45 }
      ]
    }
    // Add other categories as needed
  ];
  constructor(private router: Router) {}
  // Navigate to the course registration form
  registerForCourse(course: any) {
    // You can pass the course title or other details in the route
    this.router.navigate(['/register', course.title]);
  }
  // Function to filter courses based on search query
  filteredCourses() {
    return this.courseCategories.map(category => ({
      ...category,
      courses: category.courses.filter(course =>
        course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }));
  }
}
