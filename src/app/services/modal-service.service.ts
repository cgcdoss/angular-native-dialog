import { ApplicationRef, EnvironmentInjector, Injectable, TemplateRef, createComponent, inject } from '@angular/core';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _environmentInjector = inject(EnvironmentInjector);
  private _appRef = inject(ApplicationRef);

  public show<T>(component: TemplateRef<any> | { new(...args: any[]): T }): void {
    const dialogRef = createComponent(DialogComponent, {
      environmentInjector: this._environmentInjector,
      // hostElement: document.querySelector('app-root')!,
    });

    document.body.appendChild(dialogRef.location.nativeElement);
    // Register the newly created ref using the `ApplicationRef` instance
    // to include the component view into change detection cycles.
    this._appRef.attachView(dialogRef.hostView);

    if (component instanceof TemplateRef) {
      dialogRef.instance.vc.createEmbeddedView(component);
    } else {
      dialogRef.instance.vc.createComponent(component);
    }

    dialogRef.instance.dialog.nativeElement.showModal();
    dialogRef.instance.dialog.nativeElement.onclose = () => {
      document.body.querySelector('app-dialog')?.remove();
      dialogRef.destroy();
    };
  }
}
