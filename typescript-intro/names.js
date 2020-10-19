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
var myName = new FullName('Dimitris', 'Kostaras');
myName.getFullname();
