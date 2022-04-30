fetch('https://rest.coinapi.io/v1/assets/BTC;ETH;DOGE,SHIB?apikey=9A305AA9-095D-4BDC-9FB4-63C77A3FEA89')
  .then(response => response.json())
  .then(data => console.log(data));