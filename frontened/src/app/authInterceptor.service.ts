import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest  } from "@angular/common/http";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    intercept(req, next) {
        var authRequest = req.clone({
            headers : req.headers.set('Authorization', 'token '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YTBmZmM3M2Y1NGQyMDJlZjgxMTM4OWQifQ.2RMIs1qHOVv2nZIysNC_09rGJ8GfgmKvR-5i8PwaevM')
        })
        return next.handle(authRequest)
    }
}
