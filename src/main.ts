import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {NotesListComponent} from "./app/notes-list/notes-list.component";
import {provideRouter, Routes} from "@angular/router";
import {AddNoteComponent} from "./app/add-note/add-note.component";
import {NoteDetailComponent} from "./app/note-detail/note-detail.component";
import {NoteEditComponent} from "./app/note-edit/note-edit.component";

const routes : Routes = [
  {path:"",component:NotesListComponent},
  {path:"new",component:AddNoteComponent},
  {path:"note/:id", component:NoteDetailComponent},
  {path:"edit/:id", component:NoteEditComponent}
]

bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)]
});
