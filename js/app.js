var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
    // this.imgAttribution = 
    this.level = ko.computed(function () {
        if (this.clickCount() >= 100) {
            return "Teen";
        }
        if (this.clickCount() >= 10) {
            return "Infant";
        }
        return "Born";
    }, this);
    this.nicknames = ko.observableArray([
        "Mr. T",
        "Morning Call",
        "sweet"
        ]);
};

var ViewModel = function () {
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function () {
        this.currentCat.clickCount(this.currentCat.clickCount() + 1);
    };
}
ko.applyBindings(new ViewModel());