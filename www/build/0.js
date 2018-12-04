webpackJsonp([0],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostPageModule = /** @class */ (function () {
    function PostPageModule() {
    }
    PostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */]),
            ],
        })
    ], PostPageModule);
    return PostPageModule;
}());

//# sourceMappingURL=post.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_post_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navParams, noticiaService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noticiaService = noticiaService;
        this.posts = [];
        this.noticiaService.getPosts()
            .subscribe(function (response) {
            console.log(response);
            _this.posts = response;
        });
    }
    PostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostPage');
    };
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"C:\ionic-template-master\src\pages\post\post.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-navbar>\n      <button icon-button menuToggle>\n        <ion-icon  name="md-menu"></ion-icon>\n      </button>\n        <ion-title>Feed</ion-title>\n    </ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!--<ion-card *ngFor="let n of posts" >\n      <span class="nomePost">{{n.name}}</span>\n      <img class="fotoPost" src="{{n.foto}}">\n      <h3 class="tituloPost">{{n.titulo}}</h3>\n    <img class="imgPost" src="{{n.image}}"/>\n    <ion-card-content>\n      <ion-card-title>\n        \n        </ion-card-title>\n\n    </ion-card-content>\n  </ion-card>-->\n\n  <ion-card class="postCard" *ngFor="let n of posts">\n      <span class="nomePost">{{n.name}}</span>\n      <img class="fotoPost" src="{{n.foto}}">\n      <h3 class="tituloPost">{{n.titulo}}</h3>\n      <img src="{{n.image}}"/>\n      <ion-item>\n          <ion-label stacked >Escreva um comentário</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-icon class="like" name="done-all"> Curtir</ion-icon>\n\n      <ion-icon class="Compartilhar" name="share-alt"> Compartilhar</ion-icon>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\ionic-template-master\src\pages\post\post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__service_post_service__["a" /* NoticiaService */]])
    ], PostPage);
    return PostPage;
}());

//# sourceMappingURL=post.js.map

/***/ })

});
//# sourceMappingURL=0.js.map