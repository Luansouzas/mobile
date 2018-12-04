import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Post } from "../model/post";
import { APICONFIG } from "../config/api.config";

@Injectable()
export class NoticiaService {

    constructor(private http: HttpClient){ }

    getPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(`${APICONFIG.url}/post`);
    }

    getPost(id: string) : Observable<Post>{
        return this.http.get<Post>(`${APICONFIG.url}/post`);
    }

}