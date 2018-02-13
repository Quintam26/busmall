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
            new Product('sweep.jpg', 'sweep'),
            new Product('tauntaun.jpg', 'tauntaun'),
            new Product('unicorn.jpg', 'unicorn'),
            new Product('usb.jpg', 'usb'),
            new Product('water-can.jpg', 'water-can'),
            new Product('wine-glass.jpg', 'wine-glass')
        );

        this.showProduct();
    },
    showProduct: function() {
        const selectedProducts = [];
        for(let i = 0; i < 3; i++) {
            const randomNumber = Math.floor(Math.random() * (this.product.length));
            console.log(randomNumber);
            const stuff = this.product[randomNumber];
            selectedProducts.push(stuff);
        }
        console.table(selectedProducts);
    }
};

Product.prototype.render = function() {
    const table = document.querySelector('#place');
    const img = document.createElement('img');
    img.src = `Images/img/${this.imagePath}`;
    img.setAttribute('alt', this.name);
    table.appendChild(img);
    return img;
};

function Product (imagePath, name) {
    //this.count = 0;
    this.imagePath = imagePath;
    this.name = name;
}

game.start();

/*
function random(){
    return Math.floor(Math.random() * images.length);
};
*/