import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Inicio', icon: 'nc-bank', class: '' },
  { path: '/gerador', title: 'Gerador', icon: 'nc-single-copy-04', class: '' },
  { path: '/templates_salvos', title: 'Templates salvos', icon: 'nc-cloud-upload-94', class: '' },
  { path: '/configuracoes', title: 'Configurações', icon: 'nc-settings-gear-65', class: '' },
  { path: '/user', title: 'Perfil', icon: 'nc-single-02', class: '' },
  { path: '/treinamentos', title: 'Treinamentos', icon: 'nc-button-play', class: '' },
  { path: '/tutoriais', title: 'Tutoriais', icon: 'nc-tv-2', class: '' },
  { path: '/upgrade', title: 'Upgrade PRO', icon: 'nc-spaceship', class: 'active-pro' },
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public mainPanelColor: string = 'white';

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  changeSidebarColor(color) {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    this.mainPanelColor = color;

    if (sidebar) {
      sidebar.setAttribute('data-color', color);
      sidebar.classList.remove('light', 'dark');
      sidebar.classList.add(this.mainPanelColor);
      this.updateSidebarTextColor();
    }
  }

  updateSidebarTextColor() {
    const sidebarText = document.querySelectorAll('.sidebar-wrapper a');
    sidebarText.forEach((element) => {
      if (this.mainPanelColor === 'white') {
        element.classList.remove('text-white');
      } else {
        element.classList.add('text-white');
      }
    });
  }
}
