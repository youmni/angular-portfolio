import { Component } from '@angular/core';
import { DataService } from '../../services/data.services';
import { Experience } from '../../models/experience.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [];

  constructor(private dataService: DataService) {
    this.experiences = this.dataService.getExperience();
  }
}
