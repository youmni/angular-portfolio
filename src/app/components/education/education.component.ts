import { Component } from '@angular/core';
import { DataService } from '../../services/data.services';
import { Education } from '../../models/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education: Education[] = [];

  constructor(private dataService: DataService) {
    this.education = this.dataService.getEducation();
  }
}