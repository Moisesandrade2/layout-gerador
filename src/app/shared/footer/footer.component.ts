import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'footer-cmp',
  templateUrl: 'footer.component.html',
})
export class FooterComponent implements OnInit, OnChanges {
  @Input() mainPanelColor: string = 'white';
  currentYear: number = new Date().getFullYear();
  textColorClass: string = '';

  ngOnInit() {
    this.updateFooterTextColor();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.mainPanelColor) {
      this.updateFooterTextColor();
    }
  }

  updateFooterTextColor() {
    this.textColorClass = this.mainPanelColor === 'white' ? '' : 'text-white';
  }
}
