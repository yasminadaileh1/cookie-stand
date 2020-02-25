'use strict'


var seatle =
{
    hourWork: ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomer: 23,
    maxCustomer: 65,
    avgSale: 6.3,
    cusNum: [],
    productSales: [],
    totle : 0,
    
    deducte: function () {
        for (let i = 0; i < this.hourWork.length; i++) {
            this.cusNum.push(getRandomCus(this.minCustomer, this.maxCustomer));
        }
        console.log(this.cusNum);
    },
  

    calculate: function(){
        for (let f = 0; f < this.cusNum.length; f++) {
          this.productSales.push(Math.floor(this.cusNum[f] *this.avgSale));
         
          this.totle += this.productSales[f];
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
         }
        ulEl.innerHTML += '<li>'+'total: '+this.totle+'</li>';
        }
};
seatle.deducte();
seatle.calculate();
seatle.render();

var Tokyo =
{
    hourWork: ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomer: 3,
    maxCustomer: 24,
    avgSale: 1.2,
    cusNum: [],
    productSales: [],
    totle : 0,
    deducte: function () {
        for (let i = 0; i < this.hourWork.length; i++) {
            this.cusNum.push(getRandomCus(this.minCustomer, this.maxCustomer));
            
        }
        console.log(this.cusNum);
    },
  

    calculate: function(){
        for (let f = 0; f < this.cusNum.length; f++) {
            this.productSales.push(Math.floor(this.cusNum[f] *this.avgSale));
            this.totle += this.productSales[f];
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
           ulEl.appendChild(liEl);}
           ulEl.innerHTML += '<li>'+'total: '+this.totle+'</li>';
         }

};
Tokyo.deducte();
Tokyo.calculate();
Tokyo.render();

var Dubai =
{
    hourWork: ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomer: 11,
    maxCustomer: 38,
    avgSale: 3.7,
    cusNum: [],
    productSales: [],
    totle : 0,
    deducte: function () {
        for (let i = 0; i < this.hourWork.length; i++) {
            this.cusNum.push(getRandomCus(this.minCustomer, this.maxCustomer));
            
        }
     
    },
  

    calculate: function(){
        for (let f = 0; f < this.cusNum.length; f++) {
            this.productSales.push(Math.floor(this.cusNum[f] *this.avgSale));
            this.totle += this.productSales[f];
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
          }
           ulEl.innerHTML += '<li>'+'total: '+this.totle+'</li>';
         }

};
Dubai.deducte();
Dubai.calculate();
Dubai.render();


var Paris =
{
    hourWork: ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomer: 20,
    maxCustomer: 37,
    avgSale: 2.3,
    cusNum: [],
    productSales: [],
    totle : 0,
    deducte: function () {
        for (let i = 0; i < this.hourWork.length; i++) {
            this.cusNum.push(getRandomCus(this.minCustomer, this.maxCustomer));
        }
        console.log(this.cusNum);
    },
    productSales: [],

    calculate: function(){
        for (let f = 0; f < this.cusNum.length; f++) {
            this.productSales.push(Math.floor(this.cusNum[f] *this.avgSale));
            this.totle += this.productSales[f];
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
           ulEl.appendChild(liEl);}
           ulEl.innerHTML += '<li>'+'total: '+this.totle+'</li>';

         }

};
Paris.deducte();
Paris.calculate();
Paris.render();

var Lima =
{
    hourWork: ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomer: 2,
    maxCustomer: 16,
    avgSale: 4.6,
    cusNum: [],
    productSales: [],
    totle : 0,
    deducte: function () {
        for (let i = 0; i < this.hourWork.length; i++) {
            this.cusNum.push(getRandomCus(this.minCustomer, this.maxCustomer));
        }
        console.log(this.cusNum);
    },

    calculate: function(){
        for (let f = 0; f < this.cusNum.length; f++) {
            this.productSales.push(Math.floor(this.cusNum[f] *this.avgSale));
            this.totle += this.productSales[f];
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
           ulEl.appendChild(liEl);}
           ulEl.innerHTML += '<li>'+'total: '+this.totle+'</li>';

         }


};
Lima.deducte();
Lima.calculate();
Lima.render();

function getRandomCus(minCustomer, maxCustomer) {
    minCustomer = Math.ceil(minCustomer);
    maxCustomer = Math.floor(maxCustomer);

    return Math.floor(Math.random() * (maxCustomer - minCustomer)) + minCustomer;
}


