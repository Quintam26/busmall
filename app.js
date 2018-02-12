function Product(imagePath, imageName) {

    this.count = 0;
    this.imagePath = imagePath;
    this.imageName = imageName;
    
}

const image1 = document.getElementById('#image1');
const image2 = document.getElementById('#image2');
const image3 = document.getElementById('#image3');

const images = [];
images.push(new Product(imagePath, imageName));
images.push(new Product('img/banana.jpg', 'banana'));
images.push(new Product('img/bathroom.jpg', 'bathroom'));
images.push(new Product('img/boots.jpg', 'boots'));
images.push(new Product('img/breakfast.jpg', 'breakfast'));
images.push(new Product('img/bubblegum.jpg', 'bubblegum'));
images.push(new Product('img/chair.jpg', 'chair'));
images.push(new Product('img/cthulhu.jpg', 'cthulu'));
images.push(new Product('img/dog-duck.jpg', 'dog-duck'));
images.push(new Product('img/dragon.jpg', 'dragon'));
images.push(new Product('img/pen.jpg', 'pen'));
images.push(new Product('img/pet-sweep.jpg', 'pet-sweep'));
images.push(new Product('img/scissors.jpg', 'scissors'));
images.push(new Product('img/shark.jpg', 'shark'));
images.push(new Product('img/sweep.jpg', 'sweep'));
images.push(new Product('img/tauntaun.jpg', 'tauntaun'));
images.push(new Product('img/unicorn.jpg', 'unicorn'));
images.push(new Product('img/usb.jpg', 'usb'));
images.push(new Product('img/water-can.jpg', 'water-can'));
images.push(new Product('img/wine-glass.jpg', 'wine-glass'));

function random(){
    return Math.floor(Math.random() * images.length); 
};

function display (){
    image1 = random();
    image2 = random();
    image3 = random();
};