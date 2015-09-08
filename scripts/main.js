//alert('hello');
document.querySelector("#update-button").addEventListener('click', function() {

var thimbles = Number(document.querySelector('#thimbles').value);
console.log(thimbles);
var swords = Number(document.querySelector('#swords').value);
console.log(swords);

var totalCost = thimbles + (swords * 37);
  if(totalCost === 1 ) {
  document.querySelector('#the-total').textContent = totalCost + " money";
  }
  else {
  document.querySelector('#the-total').textContent = totalCost + " monies";
  }


});
