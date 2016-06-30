"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var LocationsComponent = (function () {
    function LocationsComponent(_router) {
        this._router = _router;
    }
    LocationsComponent.prototype.ngOnInit = function () {
        this.title = "Locations";
        // this.router = Router
        // console.log(this.router)
        // console.log(APP_ROUTER_PROVIDERS)
        // this.router.navigate(['/dashboard']);
    };
    LocationsComponent.prototype.gotoDashboard = function () {
        // APP_ROUTER_PROVIDERS[0][6].provide.navigate(['/dashboard']);
    };
    LocationsComponent = __decorate([
        core_1.Component({
            selector: 'locations',
            templateUrl: 'app/locations/locations.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LocationsComponent);
    return LocationsComponent;
}());
exports.LocationsComponent = LocationsComponent;
//# sourceMappingURL=locations.component.js.map