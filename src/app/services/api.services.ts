import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private http: HttpClient
    ) {}
    
    private url: string = "https://jobs-api.jmscarpa.com.br/";

    public login(userAuth: IUser) {
        return this.http.post(`${this.url}sessions`, userAuth)
    }

    public register(userAuth: IUser) {
        return this.http.post(`${this.url}registrations`, userAuth)
    }
}