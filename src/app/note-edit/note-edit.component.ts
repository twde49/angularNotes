import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NOTES} from "../../notes";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-note-edit',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent {
  activeRoute = inject(ActivatedRoute);
  router = inject(Router)
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  editNoteForm = new FormGroup({
    title: new FormControl(this.note?.title,Validators.required),
    text: new FormControl(this.note?.text)
  })

  editNote(){
    let title = this.editNoteForm.value.title ?? '';
    let text = this.editNoteForm.value.text ?? '';

    if (this.editNoteForm.valid){

    }
  }
}
