import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fixedplugin-cmp',
  templateUrl: 'fixedplugin.component.html'
})
export class FixedPluginComponent implements OnInit {
  public sidebarColor: string = 'white';
  public mainPanelColor: string = 'white';
  public currentTheme: string = 'light'; // 'light' ou 'dark'

  ngOnInit() {
    this.changeSidebarColor(this.sidebarColor);
    this.changeMainPanelColor(this.mainPanelColor);
  }

  changeSidebarColor(color) {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    this.sidebarColor = color;
    if (sidebar) {
      sidebar.setAttribute('data-color', color);
      sidebar.classList.remove('light', 'dark');
      sidebar.classList.add(this.currentTheme);
    }
  }

  changeMainPanelColor(color) {
    const mainPanel = document.querySelector('.main-panel') as HTMLElement;
    this.mainPanelColor = color;
    if (mainPanel) {
      mainPanel.style.background = color;
      this.updateMainPanelFontColor(); // Chamada para atualizar a cor das letras
    }
  }

  updateMainPanelFontColor() {
    const mainPanel = document.querySelector('.main-panel') as HTMLElement;
    const backgroundColor = window.getComputedStyle(mainPanel).backgroundColor;

    if (
      backgroundColor === 'white' ||
      backgroundColor === 'rgb(255, 255, 255)'
    ) {
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
  }
}
