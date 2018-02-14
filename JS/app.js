'use strict';

const game = {
    product: [],
    counter: 0,
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

    tallyProduct: function() {
        const productSelected = event.target.src;
        const filePath = productSelected.split('/').pop();
        console.log(game.product);

        for(let i = 0; i < game.product.length; i++) {

            if(filePath === game.product[i].imagePath){
                game.product[i].timesPicked++;

                game.counter ++;
                if(game.counter >= 2){
                    prompt('damn it');
                }

                game.clearBoard();
                game.showProduct();

            }
        }
    },

    getRandomProduct: function() {
        const section = document.getElementById('place');
        const selectedProducts = [];
        for(let i = 0; i < 3; i++) {
            const randomNumber = Math.floor(Math.random() * (this.product.length));
            console.log(randomNumber);
            const stuff = this.product[randomNumber];
            selectedProducts.push(stuff);
            //if(stuff === selectedProducts[i]){

            //}
            console.log('img ele for product: ', stuff.getElement());
            section.appendChild(stuff.getElement());

        }
        console.table(selectedProducts);
    },

    showProduct: function() {

        this.getRandomProduct();

    },

    clearBoard: function() {
        const section = document.getElementById('place');
        section.innerHTML = '';
    }
};

function Product (imagePath, name) {
    this.imagePath = imagePath;
    this.name = name;
    this.timesPicked = 0;
}

Product.prototype.getElement = function() {
    const ele = document.createElement('img');
    ele.src = `Images/img/${this.imagePath}`;
    ele.setAttribute('alt', this.name);
    ele.addEventListener('click', game.tallyProduct);
    return ele;
};

game.start();

/*
    createChart: function() {
        const chartCanvas = document.getElementById('chart');
        const chartCtx = chartCanvas.msGetInputContext('2d');

        const names = [];
        const timesClicked = [];
        for(let i = 0; i < this.product.length; i++) {
            names.push(this.product[i].name);
            timesClicked.push(this.product[i].timesPicked);
        }
        console.log('names', names);
        console.log('timeClicked', timesClicked);

        const chart = new Chart(chartCtx, {
            type: 'bar',
            data: {
                labels: names,
                datasets: [{
                    label: 'number of times picked',
                    data: timesClicked
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

    },
    */