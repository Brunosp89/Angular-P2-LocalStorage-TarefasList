import { Component, OnInit } from '@angular/core';
import { BrunotasksService } from '../brunotasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brunotasks',
  templateUrl: './brunotasks.component.html',
  styleUrls: ['./brunotasks.component.css'],
})
export class BrunotasksComponent implements OnInit {
  constructor(public tarefalist: BrunotasksService) {}

  tarefa: String = '';
  tarefas: Array<String> = [];

  

  ngOnInit() {}
}
