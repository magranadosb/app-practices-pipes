(self["webpackChunkapp_practices_pipes"] = self["webpackChunkapp_practices_pipes"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ventas_pages_basicos_basicos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ventas/pages/basicos/basicos.component */ 27);
/* harmony import */ var _ventas_pages_numeros_numeros_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ventas/pages/numeros/numeros.component */ 7193);
/* harmony import */ var _ventas_pages_no_comunes_no_comunes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ventas/pages/no-comunes/no-comunes.component */ 9141);
/* harmony import */ var _ventas_pages_ordenar_ordenar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ventas/pages/ordenar/ordenar.component */ 628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);







const routes = [
    {
        path: '',
        component: _ventas_pages_basicos_basicos_component__WEBPACK_IMPORTED_MODULE_0__.BasicosComponent,
        pathMatch: 'full'
    },
    {
        path: 'numeros',
        component: _ventas_pages_numeros_numeros_component__WEBPACK_IMPORTED_MODULE_1__.NumerosComponent
    },
    {
        path: 'no-comunes',
        component: _ventas_pages_no_comunes_no_comunes_component__WEBPACK_IMPORTED_MODULE_2__.NoComunesComponent
    },
    {
        path: 'ordenar',
        component: _ventas_pages_ordenar_ordenar_component__WEBPACK_IMPORTED_MODULE_3__.OrdenarComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { useHash: true })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 2707);
/* harmony import */ var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/menu/menu.component */ 6534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




class AppComponent {
    constructor(primeNgConfig) {
        this.primeNgConfig = primeNgConfig;
    }
    ngOnInit() {
        this.primeNgConfig.ripple = true;
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "router-outlet");
    } }, directives: [_shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ventas/ventas.module */ 5268);
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/es-MX */ 3394);
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/fr */ 9575);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);











(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)((_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_4___default()));
(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)((_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5___default()));
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID,
            useValue: 'es-MX'
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_3__.VentasModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_3__.VentasModule] }); })();


/***/ }),

/***/ 6400:
/*!*********************************************!*\
  !*** ./src/app/prime-ng/prime-ng.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimeNgModule": () => (/* binding */ PrimeNgModule)
/* harmony export */ });
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 671);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 456);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menubar */ 7538);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 303);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/fieldset */ 9110);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toolbar */ 5272);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 8320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);








class PrimeNgModule {
}
PrimeNgModule.??fac = function PrimeNgModule_Factory(t) { return new (t || PrimeNgModule)(); };
PrimeNgModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: PrimeNgModule });
PrimeNgModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_2__.CardModule,
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_3__.FieldsetModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule,
        primeng_menubar__WEBPACK_IMPORTED_MODULE_5__.MenubarModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_7__.ToolbarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PrimeNgModule, { exports: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_2__.CardModule,
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_3__.FieldsetModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule,
        primeng_menubar__WEBPACK_IMPORTED_MODULE_5__.MenubarModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_7__.ToolbarModule] }); })();


/***/ }),

/***/ 6534:
/*!***********************************************!*\
  !*** ./src/app/shared/menu/menu.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/menubar */ 7538);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 2707);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ 303);




function MenuComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 3);
} }
function MenuComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "input", 4);
} }
class MenuComponent {
    constructor() {
        this.items = [];
    }
    ngOnInit() {
        this.items = [
            {
                label: 'Pipes de angular',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: "Textos y Fechas",
                        icon: 'pi pi-align-left',
                        routerLink: '/'
                    },
                    {
                        label: "N??meros",
                        icon: 'pi pi-dollar',
                        routerLink: 'numeros'
                    },
                    {
                        label: "No comunes",
                        icon: 'pi pi-globe',
                        routerLink: 'no-comunes'
                    }
                ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog',
                routerLink: 'ordenar'
            }
        ];
    }
}
MenuComponent.??fac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 3, vars: 1, consts: [[3, "model"], ["pTemplate", "start"], ["pTemplate", "end"], ["src", "./favicon.ico", 1, "p-mr-2"], ["type", "text", "pInputText", "", "placeholder", "Search"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p-menubar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MenuComponent_ng_template_1_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, MenuComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("model", ctx.items);
    } }, directives: [primeng_menubar__WEBPACK_IMPORTED_MODULE_1__.Menubar, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText], encapsulation: 2 });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu.component */ 6534);
/* harmony import */ var _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prime-ng/prime-ng.module */ 6400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class SharedModule {
}
SharedModule.??fac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_1__.PrimeNgModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](SharedModule, { declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_1__.PrimeNgModule], exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent] }); })();


/***/ }),

/***/ 27:
/*!***********************************************************!*\
  !*** ./src/app/ventas/pages/basicos/basicos.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicosComponent": () => (/* binding */ BasicosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/card */ 456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



class BasicosComponent {
    constructor() {
        this.nombreLower = 'Eddie Van Halen';
        this.nombreUpper = 'EDDIE VAN HALEN';
        this.nombreCompleto = 'EDdIe VaN HAlEn';
        this.fecha = new Date();
    }
    ngOnInit() {
    }
}
BasicosComponent.??fac = function BasicosComponent_Factory(t) { return new (t || BasicosComponent)(); };
BasicosComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BasicosComponent, selectors: [["app-basicos"]], decls: 71, vars: 44, consts: [[1, "p-grid"], [1, "p-col-4"], ["header", "Uppercase", 3, "subheader"], ["header", "Lowercase", 3, "subheader"], ["header", "Nombre Completo", 3, "subheader"], [1, "p-col-6"]], template: function BasicosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Pipes B\u00E1sicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Pipes inclu\u00EDdos en Angular - Usualmente en el Common Module.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Date | Fecha | Pipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Pipe para mostrar las fechas.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "fecha | date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "fecha | date : 'long'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "fecha | date : 'dd/MM/yyyy hh:mm a'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "fecha | date : 'MMMM dd, yyyy'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " fecha | date : 'long': 'GMT-6'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " fecha | date : 'long': 'GMT-4'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " fecha | date : 'long': '': 'fr'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](50, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](53, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](56, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](59, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](64, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](67, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](70, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("subheader", ctx.nombreLower);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 14, ctx.nombreLower), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("subheader", ctx.nombreUpper);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 16, ctx.nombreUpper), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("subheader", ctx.nombreCompleto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 18, ctx.nombreCompleto), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](50, 20, ctx.fecha));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](53, 22, ctx.fecha, "long"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](56, 25, ctx.fecha, "dd/MM/yyyy hh:mm a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](59, 28, ctx.fecha, "MMMM dd, yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](64, 31, ctx.fecha, "long", "GMT-6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](67, 35, ctx.fecha, "long", "GMT-4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind4"](70, 39, ctx.fecha, "long", "", "fr"));
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_1__.Card], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 9141:
/*!*****************************************************************!*\
  !*** ./src/app/ventas/pages/no-comunes/no-comunes.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoComunesComponent": () => (/* binding */ NoComunesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/fieldset */ 9110);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 671);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





function NoComunesComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", item_r1.key, " - ", item_r1.value, " ");
} }
class NoComunesComponent {
    constructor() {
        //I8nSelect
        this.nombre = 'DANIEL';
        this.genero = 'masculino';
        this.obj = {
            'masculino': 'CHICO',
            'femenino': 'CHICA'
        };
        //I18nPlural
        this.negocios = ['Patatas', 'Comida', 'Farmacia'];
        this.objNe = {
            '=0': 'ning??n comercio',
            '=1': 'un comercio',
            'other': '# comercios'
        };
        //KeyValue Pipe
        this.persona = {
            nombre: 'Daniel',
            edad: 20,
            direccion: 'Ottawa, Canad??'
        };
        //Json Pipe
        this.heroes = [
            {
                nombre: 'Superman',
                vuela: true
            },
            {
                nombre: 'Batman',
                vuela: false
            },
            {
                nombre: 'Spiderman',
                vuela: false
            }
        ];
        //Async Pipe
        this.miObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(1000);
    }
    ngOnInit() {
    }
    cambiarGenero() {
        this.nombre = 'DANIELA';
        this.genero = 'femenino';
    }
    eliminarComercio() {
        this.negocios.pop();
    }
}
NoComunesComponent.??fac = function NoComunesComponent_Factory(t) { return new (t || NoComunesComponent)(); };
NoComunesComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NoComunesComponent, selectors: [["app-no-comunes"]], decls: 42, vars: 30, consts: [[1, "p-grid"], [1, "p-col", "p-md-6"], ["legend", "I18nSelect Pipe", 3, "toggleable"], ["pButton", "", "type", "button", "label", "Cambiar genero", "icon", "pi pi-sort-alt", "iconPos", "left", 1, "p-button-info", 3, "click"], ["legend", "I18nPlural Pipe", 3, "toggleable"], ["pButton", "", "type", "button", "label", "Eliminar comercio", "icon", "pi pi-trash", "iconPos", "left", 1, "p-button-info", 3, "click"], ["legend", "Slice Pipe", 3, "toggleable"], ["legend", "KeyValue Pipe", 3, "toggleable"], [4, "ngFor", "ngForOf"], ["legend", "Json Pipe", 3, "toggleable"], ["legend", "Async Pipe", 3, "toggleable"]], template: function NoComunesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Pipes No Comunes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Pipes inclu\u00EDdos en Angular - Usualmente en el Common Module.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p-fieldset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "i18nSelect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NoComunesComponent_Template_button_click_10_listener() { return ctx.cambiarGenero(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p-fieldset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "i18nPlural");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NoComunesComponent_Template_button_click_16_listener() { return ctx.eliminarComercio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p-fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Original");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "slice:0:2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](27, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p-fieldset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, NoComunesComponent_li_31_Template, 2, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](32, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p-fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](36, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p-fieldset", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](41, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx.nombre, "... Una vez que bajes del veh\u00EDculo, observar\u00E1s varios comercios dentro de la estaci\u00F3n de autobuses. No entres, venden muy caro. Sal de la estaci\u00F3n, camina tres cuadras hacia el norte, doblas a la izquierda, camina otras tres cuadras y ver\u00E1s una tienda grande, llamada \u201CEl puerto del tibur\u00F3n\u201D. Ah\u00ED encontrar\u00E1s lo que buscas. Y lo que no buscas tambi\u00E9n. Por favor, ten mucho cuidado ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](9, 14, ctx.genero, ctx.obj), ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Una vez que bajes del veh\u00EDculo, observar\u00E1s ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](15, 17, ctx.negocios.length, ctx.objNe), " dentro de la estaci\u00F3n de autobuses. No entres, venden muy caro. Sal de la estaci\u00F3n, camina tres cuadras hacia el norte, doblas a la izquierda, camina otras tres cuadras y ver\u00E1s una tienda grande, llamada \u201CEl puerto del tibur\u00F3n\u201D. Ah\u00ED encontrar\u00E1s lo que buscas. Y lo que no buscas tambi\u00E9n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.negocios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](27, 20, ctx.negocios, 0, 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](32, 24, ctx.persona));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](36, 26, ctx.heroes), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](41, 28, ctx.miObservable));
    } }, directives: [primeng_fieldset__WEBPACK_IMPORTED_MODULE_2__.Fieldset, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.I18nSelectPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.I18nPluralPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 7193:
/*!***********************************************************!*\
  !*** ./src/app/ventas/pages/numeros/numeros.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumerosComponent": () => (/* binding */ NumerosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/card */ 456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



class NumerosComponent {
    constructor() {
        this.ventasNetas = 2567789.5567;
        this.porcentaje = 0.4856;
    }
    ngOnInit() {
    }
}
NumerosComponent.??fac = function NumerosComponent_Factory(t) { return new (t || NumerosComponent)(); };
NumerosComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NumerosComponent, selectors: [["app-numeros"]], decls: 20, vars: 20, consts: [[1, "p-grid"], [1, "p-col-4"], ["header", "Number", 3, "subheader"], ["header", "Currency", 3, "subheader"], ["header", "Percent", 3, "subheader"]], template: function NumerosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Decimal Pipe Y Porcentaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Pipes inclu\u00EDdos en Angular - Usualmente en el Common Module.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("subheader", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 6, ctx.ventasNetas));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 8, ctx.ventasNetas), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("subheader", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 10, ctx.ventasNetas));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](14, 12, ctx.ventasNetas + 2000000, "$"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("subheader", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](17, 15, ctx.porcentaje));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](19, 17, ctx.porcentaje, "2.2-2"), " ");
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_1__.Card], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.PercentPipe], encapsulation: 2 });


/***/ }),

/***/ 628:
/*!***********************************************************!*\
  !*** ./src/app/ventas/pages/ordenar/ordenar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdenarComponent": () => (/* binding */ OrdenarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toolbar */ 5272);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 671);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 8320);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 2707);
/* harmony import */ var _pipes_mayusculas_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/mayusculas.pipe */ 2925);
/* harmony import */ var _pipes_ordenar_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/ordenar.pipe */ 5803);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _pipes_stock_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/stock.pipe */ 5028);









function OrdenarComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function OrdenarComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](11, "stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](product_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](product_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](product_r4.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](11, 5, product_r4.quantity));
} }
function OrdenarComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "p-sortIcon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "p-sortIcon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function OrdenarComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](product_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](product_r5.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](product_r5.quantity);
} }
class OrdenarComponent {
    constructor() {
        this.enMayusculas = true;
        this.ordenarPor = '';
        this.productos = [
            {
                "id": "1000",
                "code": "f230fh0g3",
                "name": "Bamboo Watch",
                "description": "Product Description",
                "image": "bamboo-watch.jpg",
                "price": 65,
                "category": "Accessories",
                "quantity": 24,
                "inventoryStatus": "INSTOCK",
                "rating": 5
            },
            {
                "id": "1001",
                "code": "nvklal433",
                "name": "Black Watch",
                "description": "Product Description",
                "image": "black-watch.jpg",
                "price": 72,
                "category": "Accessories",
                "quantity": 61,
                "inventoryStatus": "INSTOCK",
                "rating": 4
            },
            {
                "id": "1002",
                "code": "zz21cz3c1",
                "name": "Blue Band",
                "description": "Product Description",
                "image": "blue-band.jpg",
                "price": 79,
                "category": "Fitness",
                "quantity": 2,
                "inventoryStatus": "LOWSTOCK",
                "rating": 3
            },
            {
                "id": "1003",
                "code": "244wgerg2",
                "name": "Blue T-Shirt",
                "description": "Product Description",
                "image": "blue-t-shirt.jpg",
                "price": 29,
                "category": "Clothing",
                "quantity": 25,
                "inventoryStatus": "INSTOCK",
                "rating": 5
            },
            {
                "id": "1004",
                "code": "h456wer53",
                "name": "Bracelet",
                "description": "Product Description",
                "image": "bracelet.jpg",
                "price": 15,
                "category": "Accessories",
                "quantity": 73,
                "inventoryStatus": "INSTOCK",
                "rating": 4
            },
            {
                "id": "1005",
                "code": "av2231fwg",
                "name": "Brown Purse",
                "description": "Product Description",
                "image": "brown-purse.jpg",
                "price": 120,
                "category": "Accessories",
                "quantity": 0,
                "inventoryStatus": "OUTOFSTOCK",
                "rating": 4
            },
            {
                "id": "1006",
                "code": "bib36pfvm",
                "name": "Chakra Bracelet",
                "description": "Product Description",
                "image": "chakra-bracelet.jpg",
                "price": 32,
                "category": "Accessories",
                "quantity": 5,
                "inventoryStatus": "LOWSTOCK",
                "rating": 3
            },
            {
                "id": "1007",
                "code": "mbvjkgip5",
                "name": "Galaxy Earrings",
                "description": "Product Description",
                "image": "galaxy-earrings.jpg",
                "price": 34,
                "category": "Accessories",
                "quantity": 23,
                "inventoryStatus": "INSTOCK",
                "rating": 5
            },
            {
                "id": "1008",
                "code": "vbb124btr",
                "name": "Game Controller",
                "description": "Product Description",
                "image": "game-controller.jpg",
                "price": 99,
                "category": "Electronics",
                "quantity": 2,
                "inventoryStatus": "LOWSTOCK",
                "rating": 4
            },
            {
                "id": "1009",
                "code": "cm230f032",
                "name": "Gaming Set",
                "description": "Product Description",
                "image": "gaming-set.jpg",
                "price": 299,
                "category": "Electronics",
                "quantity": 63,
                "inventoryStatus": "INSTOCK",
                "rating": 3
            }
        ];
    }
    ngOnInit() {
    }
    cambiarMayusculas() {
        this.enMayusculas = !this.enMayusculas;
    }
    cambiarOrden(valor) {
        this.ordenarPor = valor;
    }
}
OrdenarComponent.??fac = function OrdenarComponent_Factory(t) { return new (t || OrdenarComponent)(); };
OrdenarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: OrdenarComponent, selectors: [["app-ordenar"]], decls: 24, vars: 12, consts: [[1, "p-toolbar-group-left"], [1, "p-toolbar-group-right"], ["pButton", "", "type", "button", "label", "Cambiar may\u00FAsculas", "icon", "pi pi-sort-alt", "iconPos", "left", 1, "p-button-warning", "p-mr-1", 3, "click"], ["pButton", "", "icon", "pi pi-sort", "label", "Por nombre", 1, "p-mr-1", 3, "click"], ["pButton", "", "icon", "pi pi-sort", "label", "Por categor\u00EDa", 1, "p-mr-1", "p-button-success", 3, "click"], ["pButton", "", "icon", "pi pi-sort", "label", "Por cantidad", 1, "p-mr-1", "p-button-help", 3, "click"], [1, "p-grid"], [1, "p-col", "p-mt-2"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "code"], ["field", "code"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "quantity"], ["field", "quantity"]], template: function OrdenarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Pipes Personalizados");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](4, "mayusculas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function OrdenarComponent_Template_button_click_8_listener() { return ctx.cambiarMayusculas(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function OrdenarComponent_Template_button_click_9_listener() { return ctx.cambiarOrden("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function OrdenarComponent_Template_button_click_10_listener() { return ctx.cambiarOrden("category"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function OrdenarComponent_Template_button_click_11_listener() { return ctx.cambiarOrden("quantity"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "p-table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](15, "ordenar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](16, OrdenarComponent_ng_template_16_Template, 11, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, OrdenarComponent_ng_template_17_Template, 12, 7, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "p-table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](21, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](22, OrdenarComponent_ng_template_22_Template, 13, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, OrdenarComponent_ng_template_23_Template, 9, 4, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" Pipes creados por ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](4, 3, "nosotros", ctx.enMayusculas), ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](15, 6, ctx.productos, ctx.ordenarPor));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](21, 9, ctx.productos, 0));
    } }, directives: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortIcon], pipes: [_pipes_mayusculas_pipe__WEBPACK_IMPORTED_MODULE_0__.MayusculasPipe, _pipes_ordenar_pipe__WEBPACK_IMPORTED_MODULE_1__.OrdenarPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe, _pipes_stock_pipe__WEBPACK_IMPORTED_MODULE_2__.StockPipe], encapsulation: 2 });


/***/ }),

/***/ 2925:
/*!*************************************************!*\
  !*** ./src/app/ventas/pipes/mayusculas.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MayusculasPipe": () => (/* binding */ MayusculasPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class MayusculasPipe {
    transform(valor, enMayusculas = true) {
        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();
    }
}
MayusculasPipe.??fac = function MayusculasPipe_Factory(t) { return new (t || MayusculasPipe)(); };
MayusculasPipe.??pipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "mayusculas", type: MayusculasPipe, pure: true });


/***/ }),

/***/ 5803:
/*!**********************************************!*\
  !*** ./src/app/ventas/pipes/ordenar.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdenarPipe": () => (/* binding */ OrdenarPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class OrdenarPipe {
    transform(productos, ordernarPor = '') {
        switch (ordernarPor) {
            case 'name': {
                productos = productos.sort((a, b) => (a.name > b.name) ? 1 : -1);
                break;
            }
            case 'category': {
                productos = productos.sort((a, b) => (a.category > b.category) ? 1 : -1);
                break;
            }
            case 'quantity': {
                productos = productos.sort((a, b) => (a.quantity > b.quantity) ? 1 : -1);
                break;
            }
            default: {
                break;
            }
        }
        return productos;
    }
}
OrdenarPipe.??fac = function OrdenarPipe_Factory(t) { return new (t || OrdenarPipe)(); };
OrdenarPipe.??pipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "ordenar", type: OrdenarPipe, pure: true });


/***/ }),

/***/ 5028:
/*!********************************************!*\
  !*** ./src/app/ventas/pipes/stock.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockPipe": () => (/* binding */ StockPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class StockPipe {
    transform(value) {
        let stock = '';
        if (value <= 0) {
            stock = 'OUTOFSTOCK';
        }
        else if (value > 0 && value < 20) {
            stock = 'LOWSTOCK';
        }
        else if (value >= 20) {
            stock = 'INSTOCK';
        }
        return stock;
    }
}
StockPipe.??fac = function StockPipe_Factory(t) { return new (t || StockPipe)(); };
StockPipe.??pipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "stock", type: StockPipe, pure: true });


/***/ }),

/***/ 5268:
/*!*****************************************!*\
  !*** ./src/app/ventas/ventas.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentasModule": () => (/* binding */ VentasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prime-ng/prime-ng.module */ 6400);
/* harmony import */ var _pages_numeros_numeros_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/numeros/numeros.component */ 7193);
/* harmony import */ var _pages_no_comunes_no_comunes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/no-comunes/no-comunes.component */ 9141);
/* harmony import */ var _pages_basicos_basicos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/basicos/basicos.component */ 27);
/* harmony import */ var _pages_ordenar_ordenar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ordenar/ordenar.component */ 628);
/* harmony import */ var _pipes_mayusculas_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/mayusculas.pipe */ 2925);
/* harmony import */ var _pipes_stock_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/stock.pipe */ 5028);
/* harmony import */ var _pipes_ordenar_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/ordenar.pipe */ 5803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);










class VentasModule {
}
VentasModule.??fac = function VentasModule_Factory(t) { return new (t || VentasModule)(); };
VentasModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: VentasModule });
VentasModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_0__.PrimeNgModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](VentasModule, { declarations: [_pages_numeros_numeros_component__WEBPACK_IMPORTED_MODULE_1__.NumerosComponent,
        _pages_no_comunes_no_comunes_component__WEBPACK_IMPORTED_MODULE_2__.NoComunesComponent,
        _pages_basicos_basicos_component__WEBPACK_IMPORTED_MODULE_3__.BasicosComponent,
        _pages_ordenar_ordenar_component__WEBPACK_IMPORTED_MODULE_4__.OrdenarComponent,
        _pipes_mayusculas_pipe__WEBPACK_IMPORTED_MODULE_5__.MayusculasPipe,
        _pipes_stock_pipe__WEBPACK_IMPORTED_MODULE_6__.StockPipe,
        _pipes_ordenar_pipe__WEBPACK_IMPORTED_MODULE_7__.OrdenarPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_0__.PrimeNgModule], exports: [_pages_numeros_numeros_component__WEBPACK_IMPORTED_MODULE_1__.NumerosComponent,
        _pages_no_comunes_no_comunes_component__WEBPACK_IMPORTED_MODULE_2__.NoComunesComponent,
        _pages_basicos_basicos_component__WEBPACK_IMPORTED_MODULE_3__.BasicosComponent,
        _pages_ordenar_ordenar_component__WEBPACK_IMPORTED_MODULE_4__.OrdenarComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map