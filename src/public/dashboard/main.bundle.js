webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container_home_home_component__ = __webpack_require__("../../../../../src/app/container/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_child_child_component__ = __webpack_require__("../../../../../src/app/container/child/child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_store_store_component__ = __webpack_require__("../../../../../src/app/container/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_record_record_component__ = __webpack_require__("../../../../../src/app/container/record/record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__container_account_account_component__ = __webpack_require__("../../../../../src/app/container/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__container_timer_timer_component__ = __webpack_require__("../../../../../src/app/container/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__container_log_log_component__ = __webpack_require__("../../../../../src/app/container/log/log.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__container_login_login_component__ = __webpack_require__("../../../../../src/app/container/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Component








var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__container_home_home_component__["a" /* HomeComponent */] },
    { path: 'child', component: __WEBPACK_IMPORTED_MODULE_3__container_child_child_component__["a" /* ChildComponent */] },
    { path: 'store', component: __WEBPACK_IMPORTED_MODULE_4__container_store_store_component__["a" /* StoreComponent */] },
    { path: 'record', component: __WEBPACK_IMPORTED_MODULE_5__container_record_record_component__["a" /* RecordComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_6__container_account_account_component__["a" /* AccountComponent */] },
    { path: 'timer', component: __WEBPACK_IMPORTED_MODULE_7__container_timer_timer_component__["a" /* TimerComponent */] },
    { path: 'log', component: __WEBPACK_IMPORTED_MODULE_8__container_log_log_component__["a" /* LogComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__container_login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__container_home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scroll-to-top {\r\n    position: fixed;\r\n    bottom: 30px;\r\n    right: 30px;\r\n    height: 40px;\r\n    width: 40px;\r\n    text-align: center;\r\n    border-radius: 100% !important;\r\n    line-height: 35px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n\r\n<a class=\"scroll-to-top rounded btn-outline-info\" href=\"#page-top\">\r\n  <i class=\"fa fa-chevron-up\"></i>\r\n</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.scrollShow();
        this.scrollMove();
    };
    AppComponent.prototype.scrollShow = function () {
        $(document).scroll(function () {
            var scrollDistance = $(this).scrollTop();
            if (scrollDistance > 100) {
                $('.scroll-to-top').fadeIn();
            }
            else {
                $('.scroll-to-top').fadeOut();
            }
        });
    };
    AppComponent.prototype.scrollMove = function () {
        $(document).on('click', 'a.scroll-to-top', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top)
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toverux_ngsweetalert2__ = __webpack_require__("../../../../@toverux/ngsweetalert2/dist/types+es2015-modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_service_common_check_login_service__ = __webpack_require__("../../../../../src/app/service/common/check-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__container_nav_nav_component__ = __webpack_require__("../../../../../src/app/container/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__container_home_home_component__ = __webpack_require__("../../../../../src/app/container/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__container_child_child_component__ = __webpack_require__("../../../../../src/app/container/child/child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__container_store_store_component__ = __webpack_require__("../../../../../src/app/container/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__container_record_record_component__ = __webpack_require__("../../../../../src/app/container/record/record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__container_account_account_component__ = __webpack_require__("../../../../../src/app/container/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__container_timer_timer_component__ = __webpack_require__("../../../../../src/app/container/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__container_log_log_component__ = __webpack_require__("../../../../../src/app/container/log/log.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__container_login_login_component__ = __webpack_require__("../../../../../src/app/container/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Plugin



// Service

// Component










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__container_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_11__container_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__container_child_child_component__["a" /* ChildComponent */],
            __WEBPACK_IMPORTED_MODULE_13__container_store_store_component__["a" /* StoreComponent */],
            __WEBPACK_IMPORTED_MODULE_14__container_record_record_component__["a" /* RecordComponent */],
            __WEBPACK_IMPORTED_MODULE_15__container_account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_16__container_timer_timer_component__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_17__container_log_log_component__["a" /* LogComponent */],
            __WEBPACK_IMPORTED_MODULE_18__container_login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__toverux_ngsweetalert2__["b" /* SweetAlert2Module */].forRoot({}),
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_app_service_common_check_login_service__["a" /* CheckLoginService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/container/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\" role=\"main\">\n\n      <!-- Breadcrumbs -->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a [routerLink]=\"['']\">首頁</a>\n        </li>\n        <li class=\"breadcrumb-item active\">系統帳戶管理</li>\n      </ol>\n    </main>\n"

/***/ }),

/***/ "../../../../../src/app/container/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__ = __webpack_require__("../../../../../src/app/service/common/check-login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = (function () {
    function AccountComponent(checkloginService) {
        this.checkloginService = checkloginService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.checkloginService.checkLogin();
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../src/app/container/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/account/account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__["a" /* CheckLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__["a" /* CheckLoginService */]) === "function" && _a || Object])
], AccountComponent);

var _a;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/child/child.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/child/child.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\" role=\"main\">\r\n\r\n  <!-- Breadcrumbs -->\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['']\">首頁</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">學童管理</li>\r\n  </ol>\r\n\r\n  <div class=\"card mb-3\">\r\n    <div class=\"card-header\">\r\n      <i class=\"fa fa-users\"></i> 學童列表 - 共 {{ datas.length }} 筆資料\r\n      <button type=\"button\" class=\"btn btn-primary pull-right\" data-toggle=\"modal\" data-target=\"#modelAddChild\">新增</button>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-default\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>帳號</th>\r\n            <th>姓名</th>\r\n            <th>學號</th>\r\n            <th>點數</th>\r\n            <th>代號</th>\r\n            <th>就讀學校</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"isLoading\" class=\"text-center\">\r\n            <td colspan=\"6\">\r\n              <i class=\"fa fa-spinner fa-3x fa-spin\"></i>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let data of datas | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\r\n            <th scope=\"row\">{{ i + ( page - 1 ) * 10 + 1 }}</th>\r\n            <td>{{data.childusername}}</td>\r\n            <td>{{data.childname}}</td>\r\n            <td>{{data.childstudentid}}</td>\r\n            <td>{{data.childpoint}}</td>\r\n            <td>{{data.childcode}}</td>\r\n            <td>{{data.childschool}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"has-text-centered text-center\">\r\n        <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer small text-muted\">\r\n      共 {{ datas.length }} 筆資料\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" #modelAddChild id=\"modelAddChild\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"exampleModalLabel\">新增學童</h4>\r\n          <button #modelClose type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            <span class=\"sr-only\">Close</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">帳號:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"childusername\" [(ngModel)]=\"childusername\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">密碼:</label>\r\n              <input type=\"password\" class=\"form-control\" name=\"childpassword\" [(ngModel)]=\"childpassword\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">確認密碼:</label>\r\n              <input type=\"password\" class=\"form-control\" name=\"childpasswordRe\" [(ngModel)]=\"childpasswordRe\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">兌換代碼:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"childcode\" [(ngModel)]=\"childcode\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">姓名:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"childname\" [(ngModel)]=\"childname\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">性別:</label>\r\n              <div class=\"form-check\">\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input name=\"childgender\" type=\"radio\" value=\"男生\" class=\"custom-control-input\" [ngModel]=\"childgender\">\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">男生</span>\r\n                </label>\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input name=\"childgender\" type=\"radio\" value=\"女生\" class=\"custom-control-input\" [ngModel]=\"childgender\">\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">女生</span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">學號:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"childstudentid\" [(ngModel)]=\"childstudentid\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">點數:</label>\r\n              <input type=\"number\" class=\"form-control\" name=\"childpoint\" min=\"0\" max=\"1000\" [(ngModel)]=\"childpoint\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">就讀學校:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"childschool\" [(ngModel)]=\"childschool\" required>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\r\n          <swal #dialogSuccess title=\"新增成功\" type=\"success\"></swal>\r\n          <swal #dialogError title=\"資料錯誤，請重新確認\" type=\"error\"></swal>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"userAddChild(modelAddChild);\">儲存</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/container/child/child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__ = __webpack_require__("../../../../../src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__ = __webpack_require__("../../../../@toverux/ngsweetalert2/dist/types+es2015-modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_common_check_login_service__ = __webpack_require__("../../../../../src/app/service/common/check-login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ChildComponent = (function () {
    function ChildComponent(router, userService, checkloginService) {
        this.router = router;
        this.userService = userService;
        this.checkloginService = checkloginService;
        this.datas = [];
        this.page = 1;
        this.isLoading = true;
        this.childusername = 'yeeman9487';
        this.childpassword = '123456';
        this.childpasswordRe = '123456';
        this.childname = 'Yee';
        this.childgender = '男生';
        this.childpoint = 120;
        this.childcode = 'B';
        this.childschool = '臺北市立敦化國民小學';
        this.childstudentid = '10111';
    }
    ChildComponent.prototype.ngOnInit = function () {
        this.checkloginService.checkLogin();
        this.userGetChild();
    };
    ChildComponent.prototype.userGetChild = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.userGetChild().subscribe(function (result) {
                            _this.isLoading = false;
                            _this.datas = result;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChildComponent.prototype.userAddChild = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(obj);
                        if (!(this.childpassword != this.childpasswordRe)) return [3 /*break*/, 1];
                        this.swalDialogError
                            .show().then(function (value) {
                            _this.childpassword = '';
                            _this.childpasswordRe = '';
                        });
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(this.childusername == '' ||
                            this.childpassword == '' ||
                            this.childpasswordRe == '' ||
                            this.childname == '' ||
                            this.childgender == '' ||
                            this.childpoint > 1000 ||
                            this.childcode == '' ||
                            this.childschool == '' ||
                            this.childstudentid == '')) return [3 /*break*/, 2];
                        this.swalDialogError
                            .show().then(function (value) {
                            _this.childpassword = '';
                            _this.childpasswordRe = '';
                            _this.childpoint = 0;
                        });
                        return [3 /*break*/, 4];
                    case 2:
                        body = {
                            childusername: this.childusername,
                            childpassword: this.childpassword,
                            childname: this.childname,
                            childgender: this.childgender,
                            childpoint: this.childpoint,
                            childcode: this.childcode,
                            childschool: this.childschool,
                            childstudentid: this.childstudentid
                        };
                        return [4 /*yield*/, this.userService.userAddChild(body).subscribe(function (result) {
                                console.log(result);
                                if (result.affectedRows > 0) {
                                    _this.swalDialogSuccess
                                        .show().then(function (value) {
                                        _this.modelClose.nativeElement.click();
                                    });
                                }
                                else {
                                    _this.swalDialogError
                                        .show().then(function (value) {
                                        _this.childpassword = '';
                                        _this.childpasswordRe = '';
                                        _this.childpoint = 0;
                                    });
                                }
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ChildComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modelClose'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ChildComponent.prototype, "modelClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogError'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */]) === "function" && _b || Object)
], ChildComponent.prototype, "swalDialogError", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogSuccess'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */]) === "function" && _c || Object)
], ChildComponent.prototype, "swalDialogSuccess", void 0);
ChildComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-child',
        template: __webpack_require__("../../../../../src/app/container/child/child.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/child/child.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_common_check_login_service__["a" /* CheckLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_common_check_login_service__["a" /* CheckLoginService */]) === "function" && _f || Object])
], ChildComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=child.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\" role=\"main\">\r\n\r\n  <!-- Breadcrumbs -->\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['']\">首頁</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">資訊刊版</li>\r\n  </ol>\r\n\r\n  <section class=\"row text-center placeholders\">\r\n    <div class=\"col-6 col-sm-3 placeholder\">\r\n      <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\"\r\n        alt=\"Generic placeholder thumbnail\">\r\n      <h4>統計一</h4>\r\n      <div class=\"text-muted\">Something else</div>\r\n    </div>\r\n    <div class=\"col-6 col-sm-3 placeholder\">\r\n      <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\"\r\n        alt=\"Generic placeholder thumbnail\">\r\n      <h4>統計二</h4>\r\n      <span class=\"text-muted\">Something else</span>\r\n    </div>\r\n    <div class=\"col-6 col-sm-3 placeholder\">\r\n      <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\"\r\n        alt=\"Generic placeholder thumbnail\">\r\n      <h4>統計三</h4>\r\n      <span class=\"text-muted\">Something else</span>\r\n    </div>\r\n    <div class=\"col-6 col-sm-3 placeholder\">\r\n      <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\"\r\n        alt=\"Generic placeholder thumbnail\">\r\n      <h4>統計四</h4>\r\n      <span class=\"text-muted\">Something else</span>\r\n    </div>\r\n  </section>\r\n\r\n  <h2>副標題 - 自訂報表資料</h2>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Header</th>\r\n          <th>Header</th>\r\n          <th>Header</th>\r\n          <th>Header</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>1,001</td>\r\n          <td>Lorem</td>\r\n          <td>ipsum</td>\r\n          <td>dolor</td>\r\n          <td>sit</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,002</td>\r\n          <td>amet</td>\r\n          <td>consectetur</td>\r\n          <td>adipiscing</td>\r\n          <td>elit</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,003</td>\r\n          <td>Integer</td>\r\n          <td>nec</td>\r\n          <td>odio</td>\r\n          <td>Praesent</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,003</td>\r\n          <td>libero</td>\r\n          <td>Sed</td>\r\n          <td>cursus</td>\r\n          <td>ante</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,004</td>\r\n          <td>dapibus</td>\r\n          <td>diam</td>\r\n          <td>Sed</td>\r\n          <td>nisi</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,005</td>\r\n          <td>Nulla</td>\r\n          <td>quis</td>\r\n          <td>sem</td>\r\n          <td>at</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,006</td>\r\n          <td>nibh</td>\r\n          <td>elementum</td>\r\n          <td>imperdiet</td>\r\n          <td>Duis</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,007</td>\r\n          <td>sagittis</td>\r\n          <td>ipsum</td>\r\n          <td>Praesent</td>\r\n          <td>mauris</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,008</td>\r\n          <td>Fusce</td>\r\n          <td>nec</td>\r\n          <td>tellus</td>\r\n          <td>sed</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,009</td>\r\n          <td>augue</td>\r\n          <td>semper</td>\r\n          <td>porta</td>\r\n          <td>Mauris</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,010</td>\r\n          <td>massa</td>\r\n          <td>Vestibulum</td>\r\n          <td>lacinia</td>\r\n          <td>arcu</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,011</td>\r\n          <td>eget</td>\r\n          <td>nulla</td>\r\n          <td>Class</td>\r\n          <td>aptent</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,012</td>\r\n          <td>taciti</td>\r\n          <td>sociosqu</td>\r\n          <td>ad</td>\r\n          <td>litora</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,013</td>\r\n          <td>torquent</td>\r\n          <td>per</td>\r\n          <td>conubia</td>\r\n          <td>nostra</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,014</td>\r\n          <td>per</td>\r\n          <td>inceptos</td>\r\n          <td>himenaeos</td>\r\n          <td>Curabitur</td>\r\n        </tr>\r\n        <tr>\r\n          <td>1,015</td>\r\n          <td>sodales</td>\r\n          <td>ligula</td>\r\n          <td>in</td>\r\n          <td>libero</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/container/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__ = __webpack_require__("../../../../../src/app/service/common/check-login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(checkloginService) {
        this.checkloginService = checkloginService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.checkloginService.checkLogin();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/container/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__["a" /* CheckLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__["a" /* CheckLoginService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/log/log.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/log/log.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\" role=\"main\">\n\n  <!-- Breadcrumbs -->\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a [routerLink]=\"['']\">首頁</a>\n    </li>\n    <li class=\"breadcrumb-item active\">系統日誌</li>\n  </ol>\n\n  <div class=\"card mb-3\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-users\"></i> 系統日誌\n      <button type=\"button\" class=\"btn btn-primary pull-right\" data-toggle=\"modal\" data-target=\"#myModal1\">新增</button>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-hover\">\n        <thead class=\"thead-default\">\n          <tr>\n            <th>姓名</th>\n            <th>年齡</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let meal of meals | paginate: { itemsPerPage: 10, currentPage: page }\">\n            <td>{{meal.name}}</td>\n            <td>{{meal.age}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"has-text-centered text-center\">\n        <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\"card-footer small text-muted\">\n      最後更新 早上 08:30\n    </div>\n  </div>\n\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"exampleModalLabel\">新增學童</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            <span class=\"sr-only\">Close</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label class=\"control-label\">姓名:</label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label\">性別:</label>\n              <div class=\"form-check\">\n                <label class=\"custom-control custom-radio\">\n                  <input id=\"sex1\" name=\"sex\" type=\"radio\" class=\"custom-control-input\">\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">男生</span>\n                </label>\n                <label class=\"custom-control custom-radio\">\n                  <input id=\"sex2\" name=\"sex\" type=\"radio\" class=\"custom-control-input\">\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">女生</span>\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label\">葷素:</label>\n              <div class=\"form-check\">\n                <label class=\"custom-control custom-radio\">\n                  <input id=\"meal1\" name=\"meal\" type=\"radio\" class=\"custom-control-input\">\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">葷食</span>\n                </label>\n                <label class=\"custom-control custom-radio\">\n                  <input id=\"meal2\" name=\"meal\" type=\"radio\" class=\"custom-control-input\">\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">素食</span>\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label\">電話:</label>\n              <input type=\"tel\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label\">住址:</label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label\">就讀學校:</label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label\">監護人:</label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label\">監護人手機:</label>\n              <input type=\"tel\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label\">備註:</label>\n              <textarea class=\"form-control\"></textarea>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\n          <button type=\"button\" class=\"btn btn-primary\">儲存</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/container/log/log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__ = __webpack_require__("../../../../../src/app/service/common/check-login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogComponent = (function () {
    function LogComponent(checkloginService) {
        this.checkloginService = checkloginService;
        this.meals = [
            { name: 'Robby', age: 6 },
            { name: 'asd', age: 8 },
            { name: 'Robybtvrby', age: 14 },
            { name: 'ukjyhrtge', age: 1 },
            { name: '234treth', age: 4 },
            { name: 'Robby', age: 6 },
            { name: 'asd', age: 8 },
            { name: 'Robybtvrby', age: 14 },
            { name: 'ukjyhrtge', age: 1 },
            { name: '234treth', age: 4 },
            { name: 'Robby', age: 6 },
            { name: 'asd', age: 8 },
            { name: 'Robybtvrby', age: 14 },
            { name: 'ukjyhrtge', age: 1 },
            { name: '234treth', age: 4 }
        ];
        this.page = 1;
    }
    LogComponent.prototype.ngOnInit = function () {
        this.checkloginService.checkLogin();
    };
    return LogComponent;
}());
LogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-log',
        template: __webpack_require__("../../../../../src/app/container/log/log.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/log/log.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__["a" /* CheckLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__["a" /* CheckLoginService */]) === "function" && _a || Object])
], LogComponent);

var _a;
//# sourceMappingURL=log.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-page {\r\n    height: calc(100vh - 56px);\r\n    background-color: #c0c0c0;\r\n}\r\n\r\n\r\n/* 外層表單 */\r\n\r\n.login-page .login-form {\r\n    padding: 0;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n/* 內層表單 */\r\n\r\n.login-form .login-group {\r\n    padding: 2rem;\r\n}\r\n\r\n.login-form .login-title {\r\n    margin: 0;\r\n    padding: 1rem;\r\n    color: #fff;\r\n    border-top-right-radius: 8px;\r\n    border-top-left-radius: 8px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"col-sm-12 ml-sm-auto col-md-12 pt-5 login-page\" role=\"main\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4 mx-auto bg-white login-form\">\n        <h4 class=\"login-title bg-primary\">系統登入</h4>\n        <form class=\"login-group\">\n          <div class=\"form-group\">\n            <label for=\"txtUserId\">帳號：</label>\n            <input type=\"email\" class=\"form-control\" name=\"txtUserId\" id=\"txtUserId\" placeholder=\"請輸入帳號\" [(ngModel)]=\"userId\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"txtUserPwd\">密碼：</label>\n            <input type=\"password\" class=\"form-control\" name=\"txtUserPwd\" id=\"txtUserPwd\" placeholder=\"請輸入密碼\" [(ngModel)]=\"userPwd\">\n          </div>\n          <!-- <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" class=\"form-check-input\"> Check me out\n            </label>\n          </div> -->\n          <swal #dialogSuccess title=\"登入成功\" type=\"success\"></swal>\n          <button type=\"submit\" class=\"btn btn-lg btn-primary\" (click)=\"login()\">登入</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/container/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__ = __webpack_require__("../../../../@toverux/ngsweetalert2/dist/types+es2015-modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__ = __webpack_require__("../../../../../src/app/service/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.userId = 'jack123';
        this.userPwd = 'jack321';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
                            userId: this.userId,
                            userPwd: this.userPwd,
                            logingroup: 3
                        };
                        return [4 /*yield*/, this.userService.userLogin(body).subscribe(function (result) {
                                if (result[0]) {
                                    __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].set('dashboardLogin', JSON.stringify(result[0]));
                                    _this.swalDialogSuccess
                                        .show().then(function (value) { location.href = "./dashboard"; });
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogSuccess'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */]) === "function" && _a || Object)
], LoginComponent.prototype, "swalDialogSuccess", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/container/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Sidebar\r\n */\r\n\r\n.sidebar {\r\n  position: relative;\r\n}\r\n\r\n@media screen and (min-width:768px) {\r\n  .sidebar {\r\n    position: fixed;\r\n    top: 54px;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1000;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    width: calc( 100vw / 12 * 1.9);\r\n    background-color: #292B2C;\r\n    border-right: 1px solid #eee;\r\n  }\r\n}\r\n\r\n\r\n/* Sidebar navigation */\r\n\r\n.sidebar {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n.sidebar .nav {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.sidebar .nav-item {\r\n  width: 100%;\r\n}\r\n\r\n.sidebar .nav-item+.nav-item {\r\n  margin-left: 0;\r\n}\r\n\r\n.sidebar .nav-link {\r\n  padding: 1rem;\r\n  font-size: 16px;\r\n  color: hsla(0, 0%, 100%, .5);\r\n  border-radius: 0;\r\n}\r\n\r\n.sidebar .nav-link:hover {\r\n  color: #fff;\r\n}\r\n\r\n.sidebar .nav-link-collapse:after {\r\n  font-family: FontAwesome;\r\n  float: right;\r\n  content: \"\\F107\";\r\n  color: #aaa;\r\n}\r\n\r\n.sidebar .nav-link-collapse.collapsed:hover:after {\r\n  content: \"\\F107\";\r\n}\r\n\r\n.sidebar .nav-link-collapse.collapsed:after {\r\n  content: \"\\F105\";\r\n}\r\n\r\n.sidebar .nav-link.active {\r\n  background-color: #464a4c;\r\n  color: #fff;\r\n}\r\n\r\n.sidebar .nav-link i {\r\n  margin-right: 4px;\r\n}\r\n\r\n\r\n/* sidebar-second */\r\n\r\n.sidebar-sub {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.sidebar-sub>li>a {\r\n  display: block;\r\n  padding: 0.8rem 0rem 0.8rem 2.8rem;\r\n  color: #636c72;\r\n  font-size: 16px;\r\n  text-decoration: unset;\r\n}\r\n\r\n.sidebar-sub>li>a:hover {\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-sub>li>a.active {\r\n  color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\" [routerLink]=\"['home']\" (click)=\"sidebarActive($event)\">天使計劃 - 後台管理系統</a>\r\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <div *ngIf=\"this.isLogin\" class=\"sidebar\">\r\n      <ul class=\"navbar-nav nav-pills flex-column\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [ngClass]=\"{'active': 'home'==sideActive }\" href=\"#\" [routerLink]=\"['home']\" (click)=\"sidebarActive($event)\">\r\n            <i class=\"fa fa-fw fa-home\"></i>首頁\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [ngClass]=\"{'active': 'child'==sideActive }\" href=\"#\" [routerLink]=\"['child']\" (click)=\"sidebarActive($event)\">\r\n            <i class=\"fa fa-fw fa-users\"></i>學童管理\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [ngClass]=\"{'active': 'store'==sideActive }\" href=\"#\" [routerLink]=\"['store']\" (click)=\"sidebarActive($event)\">\r\n            <i class=\"fa fa-fw fa-university\"></i>店家管理\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [ngClass]=\"{'active': 'record'==sideActive }\" href=\"#\" [routerLink]=\"['record']\" (click)=\"sidebarActive($event)\">\r\n            <i class=\" fa fa-fw fa-credit-card \"></i>點數管理\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-collapse collapsed\" [ngClass]=\"{'active': 'account'==sideActive || 'timer'==sideActive }\" data-toggle=\"collapse\"\r\n            href=\"#collapseSystem\" aria-expanded=\"false \">\r\n            <i class=\"fa fa-fw fa-cog \"></i> 系統參數</a>\r\n          <ul class=\"sidebar-sub collapse\" id=\"collapseSystem\" aria-expanded=\"false\">\r\n            <li>\r\n              <a [ngClass]=\"{'active': 'account'==sideActive }\" href=\"#\" [routerLink]=\"['account']\" (click)=\"sidebarActive($event)\">系統帳戶管理</a>\r\n            </li>\r\n            <li>\r\n              <a [ngClass]=\"{'active': 'timer'==sideActive }\" href=\"#\" [routerLink]=\"['timer']\" (click)=\"sidebarActive($event)\">時段管理</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" [ngClass]=\"{'active': 'log'==sideActive }\" href=\"#\" [routerLink]=\"['log']\" (click)=\"sidebarActive($event)\">\r\n            <i class=\"fa fa-fw fa-calendar\"></i>系統日誌\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <form *ngIf=\"isLogin\" class=\"form-inline ml-auto\">\r\n      <!-- <input class=\"form-control mr-sm-2 \" type=\"text\" placeholder=\"Search\" aria-label=\"Search\"> -->\r\n      <label class=\"form-control bg-dark text-white\">Hi, {{ isLogin.teachername }}</label>\r\n      <swal #dialogLogout title=\"確定要登出？\" type=\"question\" [options]=\"{ showCancelButton: 'true' }\" (confirm)=\"logout()\"></swal>\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"dialogLogout.show()\">登出</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/container/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__ = __webpack_require__("../../../../@toverux/ngsweetalert2/dist/types+es2015-modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_common_check_login_service__ = __webpack_require__("../../../../../src/app/service/common/check-login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavComponent = (function () {
    function NavComponent(router, checkloginService) {
        this.router = router;
        this.checkloginService = checkloginService;
        this.sideActive = 'home';
        this.isLogin = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.reloadRedirect();
    };
    /**
     * 權限檢查
     *
     * @memberof NavComponent
     */
    NavComponent.prototype.reloadRedirect = function () {
        this.isLogin = JSON.parse(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('dashboardLogin'));
        if (!this.isLogin) {
            this.router.navigate(["/login"]);
        }
        else {
            this.router.navigate(["/home"]);
        }
    };
    /**
     * 切換選單底色
     *
     * @param {any} e
     * @memberof NavComponent
     */
    NavComponent.prototype.sidebarActive = function (e) {
        this.checkloginService.checkLogin();
        this.sideActive = e.srcElement.hash.replace('#/', '');
    };
    /**
     * 登出
     */
    NavComponent.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].delete('dashboardLogin');
        this.isLogin = false;
        this.checkloginService.checkLogin();
    };
    return NavComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogLogout'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */]) === "function" && _a || Object)
], NavComponent.prototype, "swalDialogLogout", void 0);
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/container/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_common_check_login_service__["a" /* CheckLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_common_check_login_service__["a" /* CheckLoginService */]) === "function" && _c || Object])
], NavComponent);

var _a, _b, _c;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/record/record.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/record/record.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\" role=\"main\">\r\n\r\n  <!-- Breadcrumbs -->\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['']\">首頁</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">兌換紀錄</li>\r\n  </ol>\r\n\r\n  <div class=\"card mb-3\">\r\n    <div class=\"card-header\">\r\n      <i class=\"fa fa-users\"></i> 兌換紀錄 - 共 {{ datas.length }} 筆資料\r\n      <button type=\"button\" class=\"btn btn-primary pull-right\" data-toggle=\"modal\" data-target=\"#myModal\">新增</button>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-default\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>學童帳號</th>\r\n            <th>店家帳號</th>\r\n            <th>兌換點數</th>\r\n            <th>兌換日期</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"isLoading\" class=\"text-center\">\r\n            <td colspan=\"4\">\r\n              <i class=\"fa fa-spinner fa-3x fa-spin\"></i>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let data of datas | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\r\n            <th scope=\"row\">{{ i + ( page - 1 ) * 10 + 1 }}</th>\r\n            <td>{{ data['recordchild']}}</td>\r\n            <td>{{ data['recordstore']}}</td>\r\n            <td>{{ data['recordpoint']}}</td>\r\n            <td>{{ data['recordtime']}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"has-text-centered text-center\">\r\n        <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer small text-muted\">\r\n      共 {{ datas.length }} 筆資料\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"exampleModalLabel\">新增學童</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            <span class=\"sr-only\">Close</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">姓名:</label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">性別:</label>\r\n              <div class=\"form-check\">\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input id=\"sex1\" name=\"sex\" type=\"radio\" class=\"custom-control-input\">\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">男生</span>\r\n                </label>\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input id=\"sex2\" name=\"sex\" type=\"radio\" class=\"custom-control-input\">\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">女生</span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">葷素:</label>\r\n              <div class=\"form-check\">\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input id=\"meal1\" name=\"meal\" type=\"radio\" class=\"custom-control-input\">\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">葷食</span>\r\n                </label>\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input id=\"meal2\" name=\"meal\" type=\"radio\" class=\"custom-control-input\">\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">素食</span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">電話:</label>\r\n              <input type=\"tel\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">住址:</label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">就讀學校:</label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">監護人:</label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">監護人手機:</label>\r\n              <input type=\"tel\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">備註:</label>\r\n              <textarea class=\"form-control\"></textarea>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\r\n          <button type=\"button\" class=\"btn btn-primary\">儲存</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/container/record/record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_record_record_service__ = __webpack_require__("../../../../../src/app/service/record/record.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_common_check_login_service__ = __webpack_require__("../../../../../src/app/service/common/check-login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var RecordComponent = (function () {
    function RecordComponent(recordService, checkloginService) {
        this.recordService = recordService;
        this.checkloginService = checkloginService;
        this.datas = [];
        this.page = 1;
        this.isLoading = true;
    }
    RecordComponent.prototype.ngOnInit = function () {
        this.checkloginService.checkLogin();
        this.recordList();
    };
    RecordComponent.prototype.recordList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.recordService.recordList().subscribe(function (result) {
                            _this.isLoading = false;
                            _this.datas = result;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return RecordComponent;
}());
RecordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-record',
        template: __webpack_require__("../../../../../src/app/container/record/record.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/record/record.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_record_record_service__["a" /* RecordService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_record_record_service__["a" /* RecordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_record_record_service__["a" /* RecordService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_common_check_login_service__["a" /* CheckLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_common_check_login_service__["a" /* CheckLoginService */]) === "function" && _b || Object])
], RecordComponent);

var _a, _b;
//# sourceMappingURL=record.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/store/store.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/store/store.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\" role=\"main\">\r\n\r\n  <!-- Breadcrumbs -->\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['']\">首頁</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">店家管理</li>\r\n  </ol>\r\n\r\n  <div class=\"card mb-3\">\r\n    <div class=\"card-header\">\r\n      <i class=\"fa fa-users\"></i> 店家列表 - 共 {{ datas.length }} 筆資料\r\n      <button type=\"button\" class=\"btn btn-primary pull-right\" data-toggle=\"modal\" data-target=\"#modelAddStore\">新增</button>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-default\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>帳號</th>\r\n            <th>店名</th>\r\n            <th>地址</th>\r\n            <th>店長</th>\r\n            <th>電話</th>\r\n            <th>統一編號</th>\r\n            <th>店家類型</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"isLoading\" class=\"text-center\">\r\n            <td colspan=\"7\">\r\n              <i class=\"fa fa-spinner fa-3x fa-spin\"></i>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let data of datas | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\r\n            <th scope=\"row\">{{ i + ( page - 1 ) * 10 + 1 }}</th>\r\n            <td>{{data.storeusername}}</td>\r\n            <td>{{data.storename}}</td>\r\n            <td>{{data.storeaddr}}</td>\r\n            <td>{{data.storeadminstore}}</td>\r\n            <td>{{data.storetel}}</td>\r\n            <td>{{data.storeein}}</td>\r\n            <td>{{data.storetype}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"has-text-centered text-center\">\r\n        <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer small text-muted\">\r\n      共 {{ datas.length }} 筆資料\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"modelAddStore\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modelAddStoreLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"modelAddStoreLabel\">新增店家</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            <span class=\"sr-only\">Close</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">帳號:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"storeusername\" [(ngModel)]=\"storeusername\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">密碼:</label>\r\n              <input type=\"password\" class=\"form-control\" name=\"storepassword\" [(ngModel)]=\"storepassword\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">確認密碼:</label>\r\n              <input type=\"password\" class=\"form-control\" name=\"storepasswordRe\" [(ngModel)]=\"storepasswordRe\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">店名:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"storename\" [(ngModel)]=\"storename\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">地址:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"storeaddr\" [(ngModel)]=\"storeaddr\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">店長:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"storeadminstore\" [(ngModel)]=\"storeadminstore\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">電話:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"storetel\" [(ngModel)]=\"storetel\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">統一編號:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"storeein\" [(ngModel)]=\"storeein\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">店家類型:</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"storetype\" [(ngModel)]=\"storetype\" required>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\r\n          <swal #dialogSuccess title=\"新增成功\" type=\"success\"></swal>\r\n          <swal #dialogError title=\"資料錯誤，請重新確認\" type=\"error\"></swal>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"userAddStore(modelAddStore);\">儲存</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/container/store/store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__ = __webpack_require__("../../../../../src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__ = __webpack_require__("../../../../@toverux/ngsweetalert2/dist/types+es2015-modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_common_check_login_service__ = __webpack_require__("../../../../../src/app/service/common/check-login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var StoreComponent = (function () {
    function StoreComponent(router, userService, checkloginService) {
        this.router = router;
        this.userService = userService;
        this.checkloginService = checkloginService;
        this.datas = [];
        this.page = 1;
        this.isLoading = true;
        this.storeusername = 'b01';
        this.storepassword = '123456';
        this.storepasswordRe = '123456';
        this.storename = '好米吉便當專賣';
        this.storeaddr = '台北市松山區民生東路五段36巷1號';
        this.storeadminstore = '張大東';
        this.storetel = '02-2768-9942';
        this.storeein = '1145671';
        this.storetype = '';
        this.storephoto = '';
    }
    StoreComponent.prototype.ngOnInit = function () {
        this.checkloginService.checkLogin();
        this.userGetStore();
    };
    StoreComponent.prototype.userGetStore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.userGetStore().subscribe(function (result) {
                            _this.isLoading = false;
                            _this.datas = result;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StoreComponent.prototype.userAddStore = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(obj);
                        if (!(this.storepassword != this.storepasswordRe)) return [3 /*break*/, 1];
                        this.swalDialogError
                            .show().then(function (value) {
                            _this.storepassword = '';
                            _this.storepasswordRe = '';
                        });
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(this.storeusername == '' ||
                            this.storepassword == '' ||
                            this.storepasswordRe == '' ||
                            this.storename == '' ||
                            this.storeaddr == '' ||
                            this.storeadminstore == '' ||
                            this.storetel == '' ||
                            this.storeein == '')) return [3 /*break*/, 2];
                        this.swalDialogError
                            .show().then(function (value) {
                            _this.storepassword = '';
                            _this.storepasswordRe = '';
                        });
                        return [3 /*break*/, 4];
                    case 2:
                        body = {
                            storeusername: this.storeusername,
                            storepassword: this.storepassword,
                            storename: this.storename,
                            storeaddr: this.storeaddr,
                            storeadminstore: this.storeadminstore,
                            storetel: this.storetel,
                            storeein: this.storeein,
                            storetype: this.storetype,
                            storephoto: this.storephoto
                        };
                        return [4 /*yield*/, this.userService.userAddStore(body).subscribe(function (result) {
                                console.log(result);
                                if (result.affectedRows > 0) {
                                    _this.swalDialogSuccess
                                        .show().then(function (value) {
                                        _this.modelClose.nativeElement.click();
                                    });
                                }
                                else {
                                    _this.swalDialogError
                                        .show().then(function (value) {
                                        _this.storepassword = '';
                                        _this.storepasswordRe = '';
                                    });
                                }
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return StoreComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modelClose'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], StoreComponent.prototype, "modelClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogError'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */]) === "function" && _b || Object)
], StoreComponent.prototype, "swalDialogError", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogSuccess'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toverux_ngsweetalert2__["a" /* SwalComponent */]) === "function" && _c || Object)
], StoreComponent.prototype, "swalDialogSuccess", void 0);
StoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store',
        template: __webpack_require__("../../../../../src/app/container/store/store.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/store/store.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_common_check_login_service__["a" /* CheckLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_common_check_login_service__["a" /* CheckLoginService */]) === "function" && _f || Object])
], StoreComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=store.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/timer/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\" role=\"main\">\n\n  <!-- Breadcrumbs -->\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a [routerLink]=\"['']\">首頁</a>\n    </li>\n    <li class=\"breadcrumb-item active\">時段管理</li>\n  </ol>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/container/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__ = __webpack_require__("../../../../../src/app/service/common/check-login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = (function () {
    function TimerComponent(checkloginService) {
        this.checkloginService = checkloginService;
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.checkloginService.checkLogin();
    };
    return TimerComponent;
}());
TimerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timer',
        template: __webpack_require__("../../../../../src/app/container/timer/timer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/timer/timer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__["a" /* CheckLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_common_check_login_service__["a" /* CheckLoginService */]) === "function" && _a || Object])
], TimerComponent);

var _a;
//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/common/check-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckLoginService = (function () {
    function CheckLoginService(router) {
        this.router = router;
        this.isLogin = false;
    }
    /**
   * 檢查登入
   */
    CheckLoginService.prototype.checkLogin = function () {
        this.isLogin = JSON.parse(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('dashboardLogin'));
        if (!this.isLogin) {
            this.router.navigate(["/login"]);
        }
    };
    return CheckLoginService;
}());
CheckLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], CheckLoginService);

var _a;
//# sourceMappingURL=check-login.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/record/record.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecordService = (function () {
    function RecordService(http) {
        this.http = http;
        this.api = '/api/record/';
    }
    RecordService.prototype.recordList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.api)
            .map(function (res) {
            return res.json() || {};
        });
    };
    return RecordService;
}());
RecordService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RecordService);

var _a;
//# sourceMappingURL=record.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    /**
     * 使用者登入
     *
     * @param {object} body
     * @returns
     * @memberof UserService
     */
    UserService.prototype.userLogin = function (body) {
        return this.http.post('/api/user/login', body)
            .map(function (res) {
            return res.json() || {};
        });
    };
    /**
     * 學童資料取得
     *
     * @returns
     * @memberof UserService
     */
    UserService.prototype.userGetChild = function () {
        return this.http.get('/api/child')
            .map(function (res) {
            return res.json() || {};
        });
    };
    /**
     * 學童資料新增
     *
     * @param {object} body
     * @returns
     * @memberof UserService
     */
    UserService.prototype.userAddChild = function (body) {
        return this.http.post('/api/child/add', body)
            .map(function (res) {
            return res.json() || {};
        });
    };
    /**
     * 店家資料取得
     *
     * @returns
     * @memberof UserService
     */
    UserService.prototype.userGetStore = function () {
        return this.http.get('/api/store')
            .map(function (res) {
            return res.json() || {};
        });
    };
    /**
     * 店家資料新增
     *
     * @param {object} body
     * @returns
     * @memberof UserService
     */
    UserService.prototype.userAddStore = function (body) {
        return this.http.post('/api/store/add', body)
            .map(function (res) {
            console.log(res);
            return res.json() || {};
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map