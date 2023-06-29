import { ApplicationRef, EnvironmentInjector, Injectable, createComponent, inject } from '@angular/core';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _environmentInjector = inject(EnvironmentInjector);
  private _appRef = inject(ApplicationRef);

  public show(component: any): void {
    const componentRef = createComponent(component, {
      environmentInjector: this._environmentInjector,
    });
    this._appRef.attachView(componentRef.hostView);

    const dialogRef = createComponent(DialogComponent, {
      environmentInjector: this._environmentInjector,
      projectableNodes: [[componentRef.location.nativeElement]],
    });

    document.body.appendChild(dialogRef.location.nativeElement);
    // Register the newly created ref using the `ApplicationRef` instance
    // to include the component view into change detection cycles.
    this._appRef.attachView(dialogRef.hostView);


    dialogRef.instance.dialog.nativeElement.showModal();
    dialogRef.instance.dialog.nativeElement.onclose = () => {
      document.body.querySelector('app-dialog')?.remove();
      dialogRef.destroy();
      componentRef.destroy();
    };
  }
}
