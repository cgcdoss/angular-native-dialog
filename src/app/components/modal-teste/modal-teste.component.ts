import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-teste',
  templateUrl: './modal-teste.component.html',
  styleUrls: ['./modal-teste.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
})
export class ModalTesteComponent {
  public nome = new FormControl();
}
