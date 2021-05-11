import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
    private basisUrl: string = 'http://www.vision123.site';
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url: string = `${this.basisUrl}/${req.url}`;
        let authReq: HttpRequest<any> = req.clone({ url });
        return next.handle(authReq);
    }
}
