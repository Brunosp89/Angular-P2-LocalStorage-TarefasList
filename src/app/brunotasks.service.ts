import { Injectable } from '@angular/core';

@Injectable()
export class BrunotasksService {
  constructor() {}
  tarefa: String = '';
  tarefas: Array<String> = [];

  adicionar() {
    this.tarefas.push(this.tarefa);
    this.tarefa = '';
  }

  /*
  delete(index: number) {
    this.delete(this.tarefa.index);
  }
  */

  contar() {
    return this.tarefas.length;
  }

  
}
