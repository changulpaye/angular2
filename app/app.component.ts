import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit, OnDestroy} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular  App</h1>
                <div *ngIf="isLoading"> Getting Data ...</div>"`,
    providers : [HTTP_PROVIDERS, PostService ]  
})
export class AppComponent implements OnInit, OnDestroy { 
   
    isLoading = true;
   
    constructor(private _postService :  PostService) {
        this._postService.createPost({
            userId : 1,
            title : "param",
            body :  "Details"
        });
    }
    // method will be called when angular instntiate after the constructor
    ngOnInit() {
        this._postService.getPost()
            .subscribe(post => {
                console.log(post[0].body);
                this.isLoading = false;
            });
    }
    ngOnDestroy() {

    }
}