const game = {
    product = [],
    start: function (){

        this.product.push(
            new Product('img/banana.jpg', 'banana'),
            new Product('img/bathroom.jpg', 'bathroom'),
            new Product('img/boots.jpg', 'boots'),
            new Product('img/breakfast.jpg', 'breakfast'),
            new Product('img/bubblegum.jpg', 'bubblegum'),
            new Product('img/chair.jpg', 'chair'),
            new Product('img/cthulhu.jpg', 'cthulu'),
            new Product('img/dog-duck.jpg', 'dog-duck'),
            new Product('img/dragon.jpg', 'dragon'),
            new Product('img/pen.jpg', 'pen'),
            new Product('img/pet-sweep.jpg', 'pet-sweep'),
            new Product('img/scissors.jpg', 'scissors'),
            new Product('img/shark.jpg', 'shark'),
            new Product('img/sweep.jpg', 'sweep'),
            new Product('img/tauntaun.jpg', 'tauntaun'),
            new Product('img/unicorn.jpg', 'unicorn'),
            new Product('img/usb.jpg', 'usb'),
            new Product('img/water-can.jpg', 'water-can'),
            new Product('img/wine-glass.jpg', 'wine-glass'),
        );

        this.showProduct();
    },
    showProduct: function() {

        }
};

function Product (imagePath, imageName) {
    this.count = 0;
    this.imagePath = imagePath;
    this.imageName = imageName;    
}

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
