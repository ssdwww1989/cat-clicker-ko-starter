


var initialCats=[
    { clickCount : 0,
        name:'Tabby',
        imgSrc:'img/22252709_010df3379e_z.jpg',
        nicknames:['Tabtab','T-Bone','Mr. T','Tabitha Tab Tabby Catty Cat'],

    },
    { clickCount : 0,
        name:'Tigger',
        imgSrc:'img/434164568_fea0ad4013_z.jpg',
        nicknames:['Tigger']
    },
    { clickCount : 0,
        name:'Scaredy',
        imgSrc:'img/1413379559_412a540d29_z.jpg',
        nicknames:['Casper']

    },{ clickCount : 0,
        name:'Shadow',
        imgSrc:'img/4154543904_6e2428c421_z.jpg',
        nicknames:['Shooby']
    },{ clickCount : 0,
        name:'test',
        imgSrc:'img/9648464288_2516b35537_z.jpg',
        nicknames:['Zzzzz']
    }
]


var Cat = function(data){
    this.Nicknames = ko.observableArray(data.nicknames)
    this.clickCount = ko.observable(data.clickCount);
    this.Na = ko.observable(data.Na);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);

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
   var self = this;
    this.catList = ko.observableArray([])
    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem))
    })

    this.currentCat = ko.observable(this.catList()[0])
    this.incrementCounter = function(){
        self.currentCat().clickCount(self.currentCat().clickCount()+1)
    }

    this.test = function(clickedCat){
        self.currentCat(clickedCat)
    }

}





ko.applyBindings(new ViewModel())