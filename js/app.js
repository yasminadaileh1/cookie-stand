'use strict'

var hourWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomCus(minCustomer, maxCustomer) {
    minCustomer = Math.ceil(minCustomer);
    maxCustomer = Math.floor(maxCustomer);

    return Math.floor(Math.random() * (maxCustomer - minCustomer)) + minCustomer;
}
var cookiesStore = [];

var container = document.getElementById('sales');
var tableEl = document.createElement('table');

container.appendChild(tableEl);



function Store(location, minCustomer, maxCustomer, avgSale) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgSale = avgSale;
    this.cusNum = [];
    this.productSales = [];
    this.totalCookie = 0;
    cookiesStore.push(this);
    this.productSalesFun();
}


    Store.prototype.productSalesFun = function(){
        for (let f = 0; f < hourWork.length; f++){
            this.productSales.push(Math.floor(getRandomCus(this.minCustomer, this.maxCustomer) * this.avgSale));
            this.totalCookie += this.productSales[f];


        }
    };

    Store.prototype.render = function(){
        var trFirstRow = document.createElement('tr');
        tableEl.appendChild(trFirstRow);
        var firstCell = document.createElement('td');
        trFirstRow.appendChild(firstCell);
        firstCell.textContent = this.location;

        for (let f = 0; f < hourWork.length; f++){
            var secCell = document.createElement('td');
            trFirstRow.appendChild(secCell);
            secCell.textContent = this.productSales[f];    
        }
        var totalTd = document.createElement('td');
        trFirstRow.appendChild(totalTd);
        totalTd.textContent = this.totalCookie;
    };

   
    

new Store('seatle', '23', '65', '6.3');
new Store('Tokyo', '3', '24', '1.2');
new Store('Dubai', '11', '38', '3.7');
new Store('Paris', '20', '38', '2.3');
new Store('Lami', '2', '16', '4.6');

function renderHeader(){
    var headTr = document.createElement('tr');
    tableEl.appendChild(headTr);
    var emptyTh = document.createElement('th');
    headTr.appendChild(emptyTh);

    for (var i = 0; i < hourWork.length; i++){
        var hourTh = document.createElement('th');
        headTr.appendChild(hourTh);
        hourTh.textContent = hourWork[i];
       
    }
    var totalTh = document.createElement('th');
    headTr.appendChild(totalTh);
    totalTh.textContent = 'total';


}




var newBranch = document.getElementById('addNew');
newBranch.addEventListener('submit', function(event){
    event.preventDefault();
    var location = event.target.location.value;
    var minCustomer = event.target.minCustomer.value;
    var maxCustomer = event.target.maxCustomer.value;
    var avgSale = event.target.avgSale.value;
   var newStore = new Store( location , minCustomer , maxCustomer , avgSale);
   tableEl.deleteRow(tableEl.rows.length- 1);
   newStore.render();
   renderFooter();

 
});
 //fun
    
function renderFooter(){
    var footerTr = document.createElement('tr');
    tableEl.appendChild(footerTr);
    var totalFooter = document.createElement('td');
    footerTr.appendChild(totalFooter);
    totalFooter.textContent = 'Total';

          var totalHour;
          var totalOftotal = 0;
        for (let h = 0; h < hourWork.length ; h++){
             totalHour = 0;
             for (let s = 0; s < cookiesStore.length; s++) {
                 totalHour += cookiesStore[s].productSales[h];
             }
             var tdHourTotal = document.createElement('td');
             footerTr.appendChild(tdHourTotal);  
             tdHourTotal.textContent = totalHour;
             totalOftotal += totalHour;
            
            }
        
            var TotalAll = document.createElement('td');
            footerTr.appendChild(TotalAll);
            TotalAll.textContent = totalOftotal;
            
        } 
    renderHeader();
    for (let i = 0; i < cookiesStore.length; i++){
        cookiesStore[i].render();
        
    }   
    renderFooter();     



   










