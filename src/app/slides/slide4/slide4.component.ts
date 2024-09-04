import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Service } from 'src/app/service.service';

@Component({
  selector: 'app-slide4',
  templateUrl: './slide4.component.html',
  styleUrls: ['./slide4.component.scss']
})
export class Slide4Component {
  constructor(private service: Service, private el: ElementRef, private renderer: Renderer2) {}

  smoothScroll(target: string) {
    this.service.smoothScroll(target, this.el, this.renderer);
  }
}