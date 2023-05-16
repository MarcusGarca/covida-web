import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.router.events.subscribe((x) => {
      if (x instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  title = 'covida-web';
}
