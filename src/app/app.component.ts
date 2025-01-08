import { Component, OnInit } from '@angular/core';
import { builder } from '@builder.io/sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';

  ngOnInit(): void {
    builder.init("d6151a3b3c4f49dda6bb6c6541d060ee");
    builder.trackConversion(20);
  }
}
