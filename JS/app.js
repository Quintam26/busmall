'use strict';

const game = {
    product: [],
    counter: 0,
    start: function () {

        /*if(localStorage('product')) {
            const product = JSON.parse(localStorage.getItem('product'));
            for(let i = 0; i < product.length; i++) {
                const product = new Product(product[i].imagePath, product[i].name, product[i].timesPicked);
                this.product.push('prodoct');
            }
        } else*/ {
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
        }
        this.showProduct();

    },

    tallyProduct: function() {
        const productSelected = event.target.src;
        const filePath = productSelected.split('/').pop();
        console.log(game.product);

        for(let i = 0; i < game.product.length; i++) {

            if(filePath === game.product[i].imagePath){
                game.product[i].timesPicked++;

                if(game.counter === 4){
                    document.getElementById('place').hidden = true;
                    document.getElementById('goAway').style.display = 'block';
                }

                game.createChart();
                game.clearBoard();
                game.showProduct();
                game.counter ++;

            }
        }
    },

    end: function(){
        this.game.removeEventListener('click');
        this.createChart();

        localStorage.setItem('product', JSON.stringify(this.product));
    },

    createChart: function() {
        const chartCanvas = document.getElementById('chart');
        const chartCtx = chartCanvas.getContext('2d');

        const names = [];
        const timesClicked = [];
        for(let i = 0; i < this.product.length; i++) {
            names.push(this.product[i].name);
            timesClicked.push(this.product[i].timesPicked);
        }
        console.log('names', names);
        console.log('timeClicked', timesClicked);

        new Chart(chartCtx, {
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

    getRandomProduct: function() {
        const section = document.getElementById('place');
        const selectedProducts = [];
        while(selectedProducts.length < 3) {
            const randomNumber = Math.floor(Math.random() * this.product.length);
            const stuff = this.product[randomNumber];

            if(!selectedProducts.includes(stuff)){
                selectedProducts.push(stuff);
                section.appendChild(stuff.getElement());
            }

            console.log('selected products', selectedProducts);

        }

    },


    showProduct: function() {

        this.getRandomProduct();

    },


    clearBoard: function() {
        const section = document.getElementById('place');
        section.innerHTML = '';
    }
};


function Product (imagePath, name, timesPicked) {
    this.imagePath = imagePath;
    this.name = name;
    this.timesPicked = timesPicked;
}


Product.prototype.getElement = function() {
    const ele = document.createElement('img');
    ele.src = `Images/img/${this.imagePath}`;
    ele.setAttribute('alt', this.name);
    ele.addEventListener('click', game.tallyProduct);
    return ele;
};


game.start();
