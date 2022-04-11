"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 9421:
/*!**********************************************!*\
  !*** ./src/app/groceries-service.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroceriesServiceService": () => (/* binding */ GroceriesServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let GroceriesServiceService = class GroceriesServiceService {
    constructor() {
        this.items = [];
    }
    getItems() {
        return this.items;
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    addItem(item) {
        this.items.push(item);
    }
    editItem(item, index) {
        this.items[index] = item;
    }
};
GroceriesServiceService.ctorParameters = () => [];
GroceriesServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: "root",
    })
], GroceriesServiceService);



/***/ }),

/***/ 3060:
/*!*************************************************!*\
  !*** ./src/app/input-dialog-service.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputDialogServiceService": () => (/* binding */ InputDialogServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _groceries_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groceries-service.service */ 9421);




let InputDialogServiceService = class InputDialogServiceService {
    constructor(alertController, dataService) {
        this.alertController = alertController;
        this.dataService = dataService;
    }
    showPrompt(item, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: item ? "Edit Item" : "Add Item",
                message: item ? "Please edit item..." : "Please enter item...",
                inputs: [
                    {
                        name: "name",
                        type: "text",
                        placeholder: "Name",
                        value: item ? item.name : null,
                    },
                    {
                        name: "quantity",
                        type: "text",
                        placeholder: "Quantity",
                        value: item ? item.quality : null,
                    },
                ],
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: (item) => {
                            console.log("Confirm Cancel");
                        },
                    },
                    {
                        text: "Save",
                        handler: (item) => {
                            console.log("Confirm Save", item);
                            if (index !== undefined) {
                                this.dataService.editItem(item, index);
                            }
                            else {
                                this.dataService.addItem(item);
                            }
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
InputDialogServiceService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _groceries_service_service__WEBPACK_IMPORTED_MODULE_0__.GroceriesServiceService }
];
InputDialogServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], InputDialogServiceService);



/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _groceries_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../groceries-service.service */ 9421);
/* harmony import */ var _input_dialog_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input-dialog-service.service */ 3060);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 1952);








let Tab1Page = class Tab1Page {
    constructor(toastController, alertController, dataService, InputDialogService, socialSharing) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.dataService = dataService;
        this.InputDialogService = InputDialogService;
        this.socialSharing = socialSharing;
        this.title = "Grocery List";
    }
    loadItem() {
        return this.dataService.getItems();
    }
    editItem(item, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Editing Item - ", item, index);
            const toast = yield this.toastController.create({
                message: "Editing Item - " + index + "...",
                duration: 2000,
            });
            yield toast.present();
            yield this.InputDialogService.showPrompt(item, index);
        });
    }
    shareItem(item, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Sharing Item - ", item, index);
            const toast = yield this.toastController.create({
                message: "Sharing Item - " + index + "...",
                duration: 2000,
            });
            yield toast.present();
            let message = "Grocery Item - Name: " + item.name + " - Quantity: " + item.quantity;
            let subject = "Shared via Groceries app";
            this.socialSharing.share(message, subject).then(() => {
                // Sharing via email is possible
                console.log("Shared successfully!");
            }).catch((error) => {
                // Sharing via email is not possible
                console.error("Error while sharing ", error);
            });
        });
    }
    removeItem(item, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Removing Item - ", item, index);
            const toast = yield this.toastController.create({
                message: "Removing Item - " + index + "...",
                duration: 2000,
            });
            yield toast.present();
            this.dataService.removeItem(index);
        });
    }
    addItem() {
        console.log("Adding item");
        this.InputDialogService.showPrompt();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _groceries_service_service__WEBPACK_IMPORTED_MODULE_2__.GroceriesServiceService },
    { type: _input_dialog_service_service__WEBPACK_IMPORTED_MODULE_3__.InputDialogServiceService },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-tab1",
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".no-item {\n  text-align: center;\n}\n\nh3.no-item {\n  color: #488aff;\n}\n\n.buttonPrimary {\n  background-color: #008CBA;\n}\n\n.buttonSecondary {\n  background-color: #4CAF50;\n}\n\n.buttonLight {\n  background-color: #F2F2F2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1pdGVtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgzLm5vLWl0ZW0ge1xuICAgIGNvbG9yOiAjNDg4YWZmXG59XG5cbi5idXR0b25QcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Q0JBO1xufVxuXG4uYnV0dG9uU2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xufVxuXG4uYnV0dG9uTGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG59Il19 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n    <ion-header translucent=\"\">\n        <ion-toolbar>\n            <ion-title>{{title}}</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content padding>\n        <h3 class=\"no-item\" *ngIf=\"loadItem().length === 0\">\n            No Item available on the list!\n        </h3>\n        <ion-list>\n            <ion-item-sliding *ngFor=\"let item of loadItem(); let i = index\">\n                <ion-item>\n                    <h6>{{item.name}}</h6>\n                    <h6 style=\"padding-left: 5px;\">{{item.quantity}}</h6>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <button class=\"buttonPrimary\" type=\"button\" (click)=\"editItem(item, i)\">\n                        <ion-icon name=\"create-outline\"></ion-icon>\n                        Edit\n                    </button>\n\n                    <button class=\"buttonLight\" type=\"button\" (click)=\"shareItem(item, i)\">\n                        <ion-icon name=\"share-social-outline\"></ion-icon>\n                        Share\n                    </button>\n\n                    <button class=\"buttonSecondary\" type=\"button\" (click)=\"removeItem(item, i)\" ion-button\n                            color=\"secondary\">\n                        <ion-icon name=\"trash-outline\"></ion-icon>\n                        Done\n                    </button>\n                </ion-item-options>\n            </ion-item-sliding>\n\n        </ion-list>\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n            <ion-fab-button (click)=\"addItem()\">\n                <ion-icon name=\"add\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab>\n    </ion-content>\n</ion-app>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map