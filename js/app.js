'use strict'


var seatle =
{
    hourWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
    minCustomer: 23,
    maxCustomer: 65,
    avgSale: 6.3,
    cusNum: [],
    deducte: function () {
        for (let i = 0; i < this.hourWork.length; i++) {
            this.cusNum.push(getRandomCus(this.minCustomer, this.maxCustomer));
        }
        console.log(this.cusNum);
    },
    productSales: [],

    calculate: function(){
        for (let f = 0; f < this.cusNum.length; f++) {
          this.productSales.push(this.cusNum[f] * this.avgSale);
          
        }
        console.log(this.productSales);
    },
    render : function(){
        var container = document.getElementById("sales");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);;
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = seatle;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for(var i = 0 ; i < this.hourWork.length ; i++){
           var liEl = document.createElement('li');
           liEl.textContent = `${this.hourWork[i]}: ${this.productSales[i]} cookies`;
           ulEl.appendChild(liEl);

         }}
};
seatle.deducte();
seatle.calculate();
seatle.render();

var Tokyo =
{
    hourWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
    minCustomer: 3,
    maxCustomer: 24,
    avgSale: 1.2,
    cusNum: [],
    deducte: function () {
        for (let i = 0; i < this.hourWork.length; i++) {
            this.cusNum.push(getRandomCus(this.minCustomer, this.maxCustomer));
        }
        console.log(this.cusNum);
    },
    productSales: [],

    calculate: function(){
        for (let f = 0; f < this.cusNum.length; f++) {
          this.productSales.push(this.cusNum[f] * this.avgSale);
          
        }
        console.log(this.productSales);
    },
   
    render : function(){
        var container = document.getElementById("sales");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);;
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = seatle;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for(var i = 0 ; i < this.hourWork.length ; i++){
           var liEl = document.createElement('li');
           liEl.textContent = `${this.hourWork[i]}: ${this.productSales[i]} cookies`;
           ulEl.appendChild(liEl);

         }}

};
Tokyo.deducte();
Tokyo.calculate();
Tokyo.render();

var Dubai =
{
    hourWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
    minCustomer: 11,
    maxCustomer: 38,
    avgSale: 3.7,
    cusNum: [],
    deducte: function () {
        for (let i = 0; i < this.hourWork.length; i++) {
            this.cusNum.push(getRandomCus(this.minCustomer, this.maxCustomer));
        }
        console.log(this.cusNum);
    },
    productSales: [],

    calculate: function(){
        for (let f = 0; f < this.cusNum.length; f++) {
          this.productSales.push(this.cusNum[f] * this.avgSale);
          
        }
        console.log(this.productSales);
    },
    
    render : function(){
        var container = document.getElementById("sales");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);;
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = seatle;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for(var i = 0 ; i < this.hourWork.length ; i++){
           var liEl = document.createElement('li');
           liEl.textContent = `${this.hourWork[i]}: ${this.productSales[i]} cookies`;
           ulEl.appendChild(liEl);

         }}

};
Dubai.deducte();
Dubai.calculate();
Dubai.render();


var Paris =
{
    hourWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
    minCustomer: 20,
    maxCustomer: 37,
    avgSale: 2.3,
    cusNum: [],
    deducte: function () {
        for (let i = 0; i < this.hourWork.length; i++) {
            this.cusNum.push(getRandomCus(this.minCustomer, this.maxCustomer));
        }
        console.log(this.cusNum);
    },
    productSales: [],

    calculate: function(){
        for (let f = 0; f < this.cusNum.length; f++) {
          this.productSales.push(this.cusNum[f] * this.avgSale);
          
        }
        console.log(this.productSales);
    },
    render : function(){
        var container = document.getElementById("sales");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);;
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = seatle;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for(var i = 0 ; i < this.hourWork.length ; i++){
           var liEl = document.createElement('li');
           liEl.textContent = `${this.hourWork[i]}: ${this.productSales[i]} cookies`;
           ulEl.appendChild(liEl);

         }}

};
Paris.deducte();
Paris.calculate();
Paris.render();

var Lima =
{
    hourWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
    minCustomer: 2,
    maxCustomer: 16,
    avgSale: 4.6,
    cusNum: [],
    deducte: function () {
        for (let i = 0; i < this.hourWork.length; i++) {
            this.cusNum.push(getRandomCus(this.minCustomer, this.maxCustomer));
        }
        console.log(this.cusNum);
    },
    productSales: [],

    calculate: function(){
        for (let f = 0; f < this.cusNum.length; f++) {
          this.productSales.push(this.cusNum[f] * this.avgSale);
          
        }
        console.log(this.productSales);
    },
     
    render : function(){
        var container = document.getElementById("sales");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);;
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = seatle;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for(var i = 0 ; i < this.hourWork.length ; i++){
           var liEl = document.createElement('li');
           liEl.textContent = `${this.hourWork[i]}: ${this.productSales[i]} cookies`;
           ulEl.appendChild(liEl);

         }}


};
Lima.deducte();
Lima.calculate();
Lima.render();

function getRandomCus(minCustomer, maxCustomer) {
    minCustomer = Math.ceil(minCustomer);
    maxCustomer = Math.floor(maxCustomer);

    return Math.floor(Math.random() * (maxCustomer - minCustomer)) + minCustomer;
}


