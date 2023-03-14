import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "src/app/services/session.services";
import { jobsData } from "src/app/data/jobs";

@Component({
    selector: "app-jobs-index",
    templateUrl: "jobs-index.component.html",
    styleUrls: ["jobs-index.component.scss"]
})
export class JobsIndexComponent {
    constructor(
        private router: Router,
        private sessionService: SessionService
    ) { }

    ngOnInit() {
        if (!this.sessionService.isLogged()) {
            this.router.navigate([""])
        }
    }

    public title: string = "Jobs"
    public subtitle: string = "Our list of oportunities"

    public jobs: IJobs[] = jobsData
}