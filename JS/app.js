'use strict';

const game = {
    product: [],
    counter: 0,
    start: function () {

        /* if(localStorage('product')) {
            const product = JSON.parse(localStorage.getItem('product'));
            for(let i = 0; i < product.length; i++) {
                const product = new Product(product[i].imagePath, product[i].name, product[i].timesPicked);
                this.product.push('prodoct');
            }
        } else */{

            this.product.push(
                new Product('banana.jpg', 'Banana', 0),
                new Product('bathroom.jpg', 'Bathroom', 0),
                new Product('boots.jpg', 'Boots', 0),
                new Product('breakfast.jpg', 'Breakfast', 0),
                new Product('bubblegum.jpg', 'Bubblegum', 0),
                new Product('chair.jpg', 'Chair', 0),
                new Product('cthulhu.jpg', 'Cthulu', 0),
                new Product('dog-duck.jpg', 'Dog duck', 0),
                new Product('dragon.jpg', 'Dragon', 0),
                new Product('pen.jpg', 'Pen', 0),
                new Product('pet-sweep.jpg', 'Pet sweep', 0),
                new Product('scissors.jpg', 'Scissors', 0),
                new Product('shark.jpg', 'Shark', 0),
                new Product('sweep.png', 'Sweep', 0),
                new Product('tauntaun.jpg', 'Tauntaun', 0),
                new Product('unicorn.jpg', 'Unicorn', 0),
                new Product('usb.gif', 'USB', 0),
                new Product('water-can.jpg', 'Water can', 0),
                new Product('wine-glass.jpg', 'Wine glass', 0)
            );
        }
        console.log(this.showProduct());

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

            //console.log('selected products', selectedProducts);

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
