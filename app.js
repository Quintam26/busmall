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
        for(let i = 0; i < 3; i++){
            const randomNumber = Math.floor(Math.random() * (this.product.length));
            console.log(randomNumber);
            const stuff = this.product[randomNumber];
            selectedProducts.push(stuff);

            console.log('img ele for product', stuff.render());
        }
        console.table(selectedProducts);

    }
};

function Product (imagePath, name) {
    //this.count = 0;
    this.imagePath = imagePath;
    this.name = name;
}
Product.prototype.render = function() {
    const ele = document.createElement('img');
    ele.src = `img/${this.imagePath}`;
    ele.setAttribute('alt', this.name);
    return ele;
};

game.start();

/*
function random(){
    return Math.floor(Math.random() * images.length);
};


function display (){
    let i = 0;
    image1 = random();

    image2 = random();
        while(image2===image1) {
            random();
        }

    image3 = random();
    while(image3===image2||image1) {
        random();
    }
};

const image1 = document.getElementById('#image1');
const image2 = document.getElementById('#image2');
const image3 = document.getElementById('#image3');
*/
