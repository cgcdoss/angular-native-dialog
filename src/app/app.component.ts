import { Component, TemplateRef, inject } from '@angular/core';
import { ModalService } from './services/modal-service.service';
import { ModalTesteComponent } from './components/modal-teste/modal-teste.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _modalService = inject(ModalService);

  public showModalWithTemplate(template: TemplateRef<any>): void {
    this._modalService.show(template);
  }

  public showModalWithComponent(): void {
    this._modalService.show(ModalTesteComponent);
  }

}
