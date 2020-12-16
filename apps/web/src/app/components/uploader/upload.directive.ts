import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[nxlpUpload]'
})
export class UploadDirective {

    @Output() drag: EventEmitter<string> = new EventEmitter();
    @Output() upload: EventEmitter<File> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.drag.emit('over');
  }

  @HostListener('dragleave', ['$event']) onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    this.drag.emit('leave');
  }

  @HostListener('drop', ['$event']) onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const thumb = e.dataTransfer.files;
    this.upload.emit(thumb);
  }

}
