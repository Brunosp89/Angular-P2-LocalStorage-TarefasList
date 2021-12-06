import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrunotasksComponent } from './brunotasks/brunotasks.component';
import { BrunohomeComponent } from './brunohome/brunohome.component';
import { RouterModule } from '@angular/router';
import { BrunotasksService } from './brunotasks.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: BrunohomeComponent },
      { path: 'tarefas', component: BrunotasksComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BrunohomeComponent,
    BrunotasksComponent,
  ],
  bootstrap: [AppComponent],
  providers: [BrunotasksService],
})
export class AppModule {}
