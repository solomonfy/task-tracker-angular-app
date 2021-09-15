import { Component, OnInit, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  sideBarMenus = [
    { Dashboard: 'bx bx-grid-alt' },
    { User: 'bx bx-user' },
    { Message: 'bx bx-message-rounded-dots' },
    { Chat: 'bx bx-chat' },
    { Analytics: 'bx bx-pie-chart-alt' },
    { 'File Manager': 'bx bx-folder' },
    { Orders: 'bx bx-cart' },
    { Saved: 'bx bx-heart' },
    { Setting: 'bx bx-cog' },
  ];

  ngOnInit(): void {}

   navBar = document.querySelector("nav_list")

  //  createListOfMenu() {
  //   // Use Angular's Renderer2 to create the li element
  //   this.sideBarMenus.forEach(element => {
      
  //      const hrefs = this.renderer.createElement('a');
      
  //     const listOfMenu = this.renderer.createElement('li');
  //     const spans = this.renderer.createElement('span');
  //     // Set the id of the li
  //     this.renderer.setProperty(listOfMenu, 'class', 'element');
  //     this.renderer.setProperty(spans, 'class', 'links_name');
  //     // Append the created div to the navBar element
  //     this.renderer.appendChild(hrefs, listOfMenu);
  //     this.renderer.appendChild(hrefs, spans);
  //     this.renderer.appendChild(this.navBar, hrefs);
  
  //     return this.navBar;
  //   });
  // }
}
