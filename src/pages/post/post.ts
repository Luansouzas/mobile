import { NoticiaService } from './../../service/post.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../model/post';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  public posts: Post []= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public noticiaService: NoticiaService) {
    this.noticiaService.getPosts()
    .subscribe ( response => {
      console.log(response)
      this.posts = response;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

}
