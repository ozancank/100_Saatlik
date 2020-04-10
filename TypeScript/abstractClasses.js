var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("Kaydedildi.");
    };
    return KrediBase;
}());
var TuketiciKredi = /** @class */ (function (_super) {
    __extends(TuketiciKredi, _super);
    function TuketiciKredi() {
        return _super.call(this) || this;
    }
    TuketiciKredi.prototype.hesapla = function () {
        console.log("Tüketici kredisine göre hesaplandı.");
    };
    return TuketiciKredi;
}(KrediBase));
var KonutKredi = /** @class */ (function (_super) {
    __extends(KonutKredi, _super);
    function KonutKredi() {
        return _super.call(this) || this;
    }
    KonutKredi.prototype.hesapla = function () {
        console.log("Konut kredisine göre hesaplandı.");
    };
    return KonutKredi;
}(KrediBase));
var tk = new TuketiciKredi();
tk.hesapla();
tk.kaydet();
var kk = new KonutKredi();
tk.hesapla();
tk.kaydet();
