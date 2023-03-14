import { Component } from '@angular/core';
import { SessionService } from './services/session.services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        public sessionService: SessionService,
        public router: Router
    ) { }

    title = 'Jobs-Angular';

    public logout(): void {
        this.sessionService.clearSession()
        this.router.navigate([""])
    }
}
