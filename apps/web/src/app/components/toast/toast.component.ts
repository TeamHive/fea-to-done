import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ToastService } from 'apps/web/src/services/toast.service';

@Component({
  selector: 'nxlp-toast',
  styleUrls: ['./toast.component.scss'],
  templateUrl: './toast.component.html'
})
export class ToastComponent implements OnInit, AfterViewChecked {

    color: string;
  message: string;
  
  @ViewChild('toast') toast: ElementRef;

  constructor(
      private toastService: ToastService,
      private renderer: Renderer2
  ) {
    this.toastService.createToast.subscribe(obj => {
        this.color = obj['color'];
        this.message = obj['message'];
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
      this.showToast();
  }

  showToast() {
    if(this.message) {
        this.renderer.addClass(this.toast.nativeElement, 'show');
        setTimeout(() => {
            this.renderer.removeClass(this.toast.nativeElement, 'show');
            this.color = null;
            this.message = null;
        }, 2000);
      }
  }

}
