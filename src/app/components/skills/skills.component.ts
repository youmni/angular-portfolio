import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.services';

@Component({
  selector: 'app-skills',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: any;

  constructor(private dataService: DataService) {
    this.skills = this.dataService.getSkills();
  }
}