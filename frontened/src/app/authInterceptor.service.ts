import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor} from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    constructor(private injector:Injector){}

    intercept(req, next) {
        var auth = this.injector.get(AuthService)
        var authRequest = req.clone({
            headers : req.headers.set('Authorization', 'token '+ auth.getToken())
        })
        return next.handle(authRequest)
    }
}
