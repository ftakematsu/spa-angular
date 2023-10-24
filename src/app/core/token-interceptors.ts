import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { addToken } from "../config/http-header.const";
import { AuthService } from "../modules/login/services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private bypassUris = [
        '/login',
        '/auth', 
    ];

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this._isBypassUrls(req.url)) {
          return next.handle(req);
        }
        const token = this.authService.getAccessToken();
        req = addToken(req, token);
        return next.handle(req);
    }

    private _isBypassUrls(url: string): boolean {
        return this.bypassUris.some((uri) => url.includes(uri));
    }

}