import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProjects(): Project[] {
    return [
      {
        title: 'TutorSpace',
        period: 'Dec 2024 - Feb 2025',
        description: 'Community-driven tutoring platform connecting students and tutors.',
        technologies: ['Laravel', 'WSL', 'MySQL', 'Tailwind CSS']
      },
      {
        title: 'EhB Product Reservation System',
        period: 'Apr 2024 - Jun 2024',
        description: 'Platform for product reservations at Campus Kaai (EhB).',
        technologies: ['Spring Boot', 'React JS', 'Oracle DB', 'JWT']
      },
      {
        title: 'Taskflow',
        period: 'Nov 2024 - Dec 2024',
        description: 'CLI tool for task management with group permissions and task history.',
        technologies: ['Picocli', 'Spring Boot', 'MySQL', 'JWT']
      },
      {
        title: 'FlipFlow',
        period: 'Dec 2024 - Jan 2025',
        description: 'Web application for creating and sharing study cards.',
        technologies: ['React JS', 'Express JS', 'MySQL', 'JWT']
      }
    ];
  }

  getExperience(): Experience[] {
    return [
      {
        position: 'Student Sales Assistant',
        company: 'Colruyt Group',
        period: 'Jul 2022 - Present',
        responsibilities: [
          'Assisted customers',
          'Managed stock',
          'Maintained store appearance',
          'Collect&Go'
        ]
      },
      {
        position: 'Student Catering Assistant',
        company: 'Coconut Westland Shopping',
        period: 'Jan 2022 - Jun 2022',
        responsibilities: [
          'Assisted with customer orders',
          'Maintained cleanliness',
          'Supported the kitchen'
        ]
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        institution: 'Erasmushogeschool Brussel',
        degree: 'Bachelor\'s in Applied Computer Science, Specialization: Software Engineering',
        period: '2023 - 2026'
      },
      {
        institution: 'Tomas Bata University in Zlín',
        degree: 'Summer Program: Cybernetics and Informatics– Key 21st Century Sciences',
        period: 'Aug 2024',
        grade: 'A'
      },
      {
        institution: 'Koninklijk Atheneum Halle',
        degree: 'Economics and Modern Languages',
        period: '2021 - 2023'
      }
    ];
  }

  getSkills() {
    return {
      languages: ['Java', 'JavaScript', 'PHP', 'HTML5', 'CSS', 'C#'],
      frameworks: ['Spring Boot', 'React JS', 'Laravel', 'Express JS', 'Tailwind CSS', '.NET'],
      tools: ['Linux', 'Windows', 'Git', 'Oracle DB', 'MySQL']
    };
  }
}