import { Component } from "@angular/core";
import { jobsData } from "src/app/data/jobs";
import { Router, ActivatedRoute } from "@angular/router";

import { SessionService } from "src/app/services/session.services";

@Component({
    selector: "app-jobs-show",
    templateUrl: "jobs-show.component.html",
    styleUrls: ["jobs-show.component.scss"]
})
export class JobsShowComponent {
    constructor(
        private router: Router,
        private sessionService: SessionService,
        private activatedRoute: ActivatedRoute
    ) { }

    public title: string = "Job Details"
    public subtitle: string = "We're super excited to show you this oportunity!"
    public id: string | null = this.activatedRoute.snapshot.paramMap.get("id");
    public job: IJobs = <IJobs>{}

    ngOnInit() {
        if (!this.sessionService.isLogged()) {
            this.router.navigate([""])
        }

        this.job = jobsData.filter(job => job.id == this.id)[0]
    }


}