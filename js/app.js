'use strict'

var hourWork = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];


function getRandomCus(minCustomer, maxCustomer) {
    minCustomer = Math.ceil(minCustomer);
    maxCustomer = Math.floor(maxCustomer);

    return Math.floor(Math.random() * (maxCustomer - minCustomer)) + minCustomer;
}




function Store(location, minCustomer, maxCustomer, avgSale) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgSale = avgSale;
    this.cusNum = [];
    this.productSales = [];
    this.totalCookie = 0;
    this.totalEl = 0;
    this.tdTotalAll = 0;


    Store.prototype.cusNumFun = function () {
        for (var i = 0; i < hourWork.length; i++) {
            var randomNum = getRandomCus(this.minCustomer, this.maxCustomer);
            this.cusNum.push(randomNum);
        }
    };
    Store.prototype.productSalesFun = function () {
        for (let f = 0; f < hourWork.length; f++) {
            this.productSales.push(Math.floor(this.cusNum[f] * this.avgSale));
            console.log(this.productSales);
            this.totalCookie += this.productSales[f];


        }
    };

    Store.prototype.render = function () {
        document.getElementsByTagName('table');
        var trFirstRow = document.createElement('tr');
        tableEl.appendChild(trFirstRow);
        document.getElementsByTagName(trFirstRow);
        var firstCell = document.createElement('td');
        trFirstRow.appendChild(firstCell);
        firstCell.textContent = this.location;

        for (let i = 0; i < hourWork.length; i++) {
            var tdSecCell = document.createElement('td');
            trFirstRow.appendChild(tdSecCell);
            tdSecCell.textContent = this.productSales[i];
        }
      

        var finalCell = document.createElement('td');
        trFirstRow.appendChild(finalCell);
        finalCell.textContent = this.totalCookie;
    }

}



var StoreContainer = document.getElementById('sales');
var tableEl = document.createElement('table');
StoreContainer.appendChild(tableEl);


var trEl = document.createElement('tr');
tableEl.appendChild(trEl);
var thEl = document.createElement('th');
trEl.appendChild(thEl);

for (var i = 0; i < hourWork.length; i++) {
    var th1El = document.createElement('th');
    th1El.textContent = hourWork[i];
    trEl.appendChild(th1El);
}
var th3El = document.createElement('th');
trEl.appendChild(th3El);
th3El.textContent = 'total';









var store1 = new Store('seatle', 23, 65, 6.3);
var store2 = new Store('Tokyo', 3, 24, 1.2);
var store3 = new Store('Dubai', 11, 38, 3.7);
var store4 = new Store('Paris', 20, 38, 2.3);
var store5 = new Store('Lami', 2, 16, 4.6);

store1.cusNumFun();
store1.productSalesFun();
store1.render();



store2.cusNumFun();
store2.productSalesFun();
store2.render();


store3.cusNumFun();
store3.productSalesFun();
store3.render();


store4.cusNumFun();
store4.productSalesFun();
store4.render();

store5.cusNumFun();
store5.productSalesFun();
store5.render();


// Total raw
var total = 0;
var trSecRow = document.createElement('tr');
tableEl.appendChild(trSecRow);
document.getElementsByTagName(trSecRow);
var tdtotal = document.createElement('td');
trSecRow.appendChild(tdtotal);
tdtotal.textContent = 'total';
for (let i = 0; i < hourWork.length; i++) {
    var totalEl = document.createElement('td');
    trSecRow.appendChild(totalEl);
    totalEl.textContent = store1.productSales[i] + store2.productSales[i] + store3.productSales[i] + store4.productSales[i] + store5.productSales[i];
};
var tdTotalAll = document.createElement('td');
trSecRow.appendChild(tdTotalAll);

tdTotalAll.textContent = store1.totalCookie + store2.totalCookie+store3.totalCookie +store4.totalCookie +store5.totalCookie;




// var container = document.getElementById("sales");
//             this.cusNum = getRandomCus(this.minCustomer,this.maxCustomer);
//             var articleEl = document.createElement('article');
//             container.appendChild(articleEl);
//             var h2El = document.createElement('h2');
//             articleEl.appendChild(h2El);
//             h2El.textContent = Store;
//             var ulEl = document.createElement('ul')
//             articleEl.appendChild(ulEl);
//               for(var i = 0 ; i < hourWork.length ; i++){
//                var liEl = document.createElement('li');
//                liEl.textContent = `${hourWork[i]}: ${this.productSales[i]} cookies`;
//                ulEl.appendChild(liEl);
