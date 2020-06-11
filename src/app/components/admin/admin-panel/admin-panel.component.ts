import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  choice: string;

  constructor() { }

  ngOnInit() {
  }

  choose(choice: string) {
    if (this.choice == choice)
      this.choice = "";
    else 
      this.choice = choice;
  }

}
