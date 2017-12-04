
var Cat = function(){
    this.Nicknames = ko.observableArray([
        {name:"Tabtab"},
        {name:"T-Bone"},
        {name:"Mr.T"},
        {name:"Tabutha Tab Tabby Catty Cat"},
    ])
    this.clickCount = ko.observable(0);
    this.Na = ko.observable('Nicknames');
    this.name = ko.observable('Tabby');
    this.levelone = ko.observable('Infant');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
    this.level = ko.computed(function() {
        var click = this.clickCount();
        var title;
        if (click < 10) {
            title= "Newborn"
        }
        else if (click < 50) {
            title = "infant"
        }
        else if(click < 100){
            title = "Child"
        }
        else if(click < 200){
            title = "Teen"
        }
        else if(click < 500){
            title = "Adult"
        }
        else{
            title = "Ninja"
        }
        return title;

    },this)

}


var ViewModel = function(){

    this.currentCat = ko.observable(new Cat())

    this.incrementCounter = function(){
        this.clickCount(this.clickCount()+1)
    }

}







ko.applyBindings(new ViewModel())