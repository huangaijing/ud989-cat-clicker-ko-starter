var initialCats = [
    {
        clickCount: 0,
        name: "Tabby",
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        nicknames: ["Mr. T", "Morning Call", "sweet"]
    },
    {
        clickCount: 0,
        name: "Tabby1",
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        nicknames: ["sweet"]
    },
    {
        clickCount: 0,
        name: "Tabby2",
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        nicknames: ["Mr. T"]
    }
];

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);//"Tabby"
    this.imgSrc = ko.observable(data.imgSrc);//"img/434164568_fea0ad4013_z.jpg"
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
    this.nicknames = ko.observableArray(data.nicknames);
};

//  [ ] Make the cats show up in a list 
//
//  [ ] Make the currentCat change when you click on a cat in the list
//


var ViewModel = function () {
    var that = this;
    this.catList = ko.observableArray([]);
    initialCats.forEach(function (catItem) {
        that.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        that.currentCat().clickCount(that.currentCat().clickCount() + 1);
    };
}
ko.applyBindings(new ViewModel());