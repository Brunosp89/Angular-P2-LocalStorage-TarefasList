import { Component, OnInit } from '@angular/core';
import { BrunotasksService } from '../brunotasks.service';

@Component({
  selector: 'app-brunohome',
  templateUrl: './brunohome.component.html',
  styleUrls: ['./brunohome.component.css'],
})
export class BrunohomeComponent implements OnInit {
  constructor(public tarefalist: BrunotasksService) {}

  ngOnInit() {}
}
