import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  @ViewChild('dialog', { static: true }) public dialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('vc', { read: ViewContainerRef, static: true }) public vc!: ViewContainerRef;

  public close(): void {
    this.dialog.nativeElement.close();
  }
}
