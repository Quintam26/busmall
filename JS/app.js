'use strict';

const game = {
    product: [],
    counter: 0,
    start: function () {

        this.product.push(
            new Product('banana.jpg', 'Banana'),
            new Product('bathroom.jpg', 'Bathroom'),
            new Product('boots.jpg', 'Boots'),
            new Product('breakfast.jpg', 'Breakfast'),
            new Product('bubblegum.jpg', 'Bubblegum'),
            new Product('chair.jpg', 'Chair'),
            new Product('cthulhu.jpg', 'Cthulu'),
            new Product('dog-duck.jpg', 'Dog duck'),
            new Product('dragon.jpg', 'Dragon'),
            new Product('pen.jpg', 'Pen'),
            new Product('pet-sweep.jpg', 'Pet sweep'),
            new Product('scissors.jpg', 'Scissors'),
            new Product('shark.jpg', 'Shark'),
            new Product('sweep.png', 'Sweep'),
            new Product('tauntaun.jpg', 'Tauntaun'),
            new Product('unicorn.jpg', 'Unicorn'),
            new Product('usb.gif', 'USB'),
            new Product('water-can.jpg', 'Water can'),
            new Product('wine-glass.jpg', 'Wine glass')
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

                if(game.counter === 25){
                    document.getElementById('place').hidden = true;
                    document.getElementById('goAway').style.display = 'block';
                }

                game.clearBoard();
                game.showProduct();
                game.counter ++;
                game.end();

            }
        }
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

    end: function(){
        //this.game.removeEventListener('click');
        this.createChart();

        localStorage.setItem('product', JSON.stringify(this.product));
    },

    getRandomProduct: function() {
        const section = document.getElementById('place');
        const selectedProducts = [];
        while(selectedProducts.length < 3) {
            const randomNumber = Math.floor(Math.random() * this.product.length);
            const stuff = this.product[randomNumber];

            if(!selectedProducts.includes(stuff)){
                selectedProducts.push(stuff);
                section.appendChild(stuff.render());
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

function Product (imagePath, name) {
    this.imagePath = imagePath;
    this.name = name;
    this.timesPicked = 0;
}

Product.prototype.render = function() {
    const ele = document.createElement('img');
    ele.src = `Images/img/${this.imagePath}`;
    ele.setAttribute('alt', this.name);
    ele.addEventListener('click', game.tallyProduct);
    return ele;
};

game.start();
