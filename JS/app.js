'use strict';

const game = {
    product: [],
    start: function () {

        this.product.push(
            new Product('banana.jpg', 'banana'),
            new Product('bathroom.jpg', 'bathroom'),
            new Product('boots.jpg', 'boots'),
            new Product('breakfast.jpg', 'breakfast'),
            new Product('bubblegum.jpg', 'bubblegum'),
            new Product('chair.jpg', 'chair'),
            new Product('cthulhu.jpg', 'cthulu'),
            new Product('dog-duck.jpg', 'dog-duck'),
            new Product('dragon.jpg', 'dragon'),
            new Product('pen.jpg', 'pen'),
            new Product('pet-sweep.jpg', 'pet-sweep'),
            new Product('scissors.jpg', 'scissors'),
            new Product('shark.jpg', 'shark'),
            new Product('sweep.png', 'sweep'),
            new Product('tauntaun.jpg', 'tauntaun'),
            new Product('unicorn.jpg', 'unicorn'),
            new Product('usb.gif', 'usb'),
            new Product('water-can.jpg', 'water-can'),
            new Product('wine-glass.jpg', 'wine-glass')
        );

        this.showProduct();
    },

    getRandomProduct: function() {
        const section = document.getElementById('place');
        const selectedProducts = [];
        for(let i = 0; i < 3; i++) {
            const randomNumber = Math.floor(Math.random() * (this.product.length));
            console.log(randomNumber);
            const stuff = this.product[randomNumber];
            selectedProducts.push(stuff);

            console.log('img ele for product: ', stuff.getElement());
            section.appendChild(stuff.getElement());
        }
        console.table(selectedProducts);
    },

    showProduct: function() {
        this.getRandomProduct();
    }
};

function Product (imagePath, name) {
    //this.count = 0;
    this.imagePath = imagePath;
    this.name = name;
}

Product.prototype.getElement = function() {
    const ele = document.createElement('img');
    ele.src = `Images/img/${this.imagePath}`;
    ele.setAttribute('alt', this.name);
    return ele;
};

game.start();

/*
function random(){
    return Math.floor(Math.random() * images.length);
};
*/