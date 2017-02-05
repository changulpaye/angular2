import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Post} from './post'
import {Injectable} from 'angular2/core'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class PostService {
     
     private _url = "http://jsonplaceholder.typicode.com/posts";
     // private keyword will create private field in our class
     constructor(private _http : Http) {
             
     }
     getPost() : Observable<Post[]>{
        return this._http.get(this._url)
            .map(response => response.json());
     }

     createPost(post : Post) {
         return this._http.post(this._url, JSON.stringify(post))
                    .map(response => response.json());
     }
}