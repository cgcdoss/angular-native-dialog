import { Component, inject } from '@angular/core';
import { ModalService } from './services/modal-service.service';
import { ModalTesteComponent } from './components/modal-teste/modal-teste.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _modalService = inject(ModalService);

  public showModal(): void {
    this._modalService.show(ModalTesteComponent);
  }

}
