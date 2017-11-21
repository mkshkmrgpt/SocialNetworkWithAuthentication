import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest  } from "@angular/common/http";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log(req)
        return next.handle(req)
    }
}
