import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NOTES} from "../../notes";

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  router = inject(Router)
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);
  index: number =0;
  removeNote(){
    if (this.note){
      this.index = NOTES.indexOf(this.note,0)
    }
    NOTES.splice(this.index,1)
    this.router.navigateByUrl("/")
  }

}
