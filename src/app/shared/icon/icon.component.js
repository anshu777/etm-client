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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IconComponent = /** @class */ (function () {
    // DomSanitizer is needed to dynamically inject the src attribute
    // and avoid JS injection.
    function IconComponent() {
        this.onClick = new core_1.EventEmitter();
    }
    IconComponent.prototype.ngOnInit = function () {
        this.src = this.url;
        //this.src = this.sanitize.bypassSecurityTrustHtml(this.url);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], IconComponent.prototype, "url", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], IconComponent.prototype, "onClick", void 0);
    IconComponent = __decorate([
        core_1.Component({
            selector: 'pp-icon',
            template: require('./icon.html'),
            styles: [require('./icon.scss').toString()]
        }),
        __metadata("design:paramtypes", [])
    ], IconComponent);
    return IconComponent;
}());
exports.IconComponent = IconComponent;
//# sourceMappingURL=icon.component.js.map