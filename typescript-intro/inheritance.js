var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FullName = /** @class */ (function () {
    function FullName(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    FullName.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    return FullName;
}());
var Age = /** @class */ (function (_super) {
    __extends(Age, _super);
    function Age(firstname, lastname, age) {
        var _this = _super.call(this, firstname, lastname) || this;
        _this.age = age;
        return _this;
    }
    Age.prototype.getMyAge = function () {
        return this.age;
    };
    return Age;
}(FullName));
var myInfo = new Age('Dimitris', 'Kostaras', 18);
console.log("I am " + myInfo.getFullname() + " and my age is " + myInfo.getMyAge());
