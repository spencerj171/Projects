const _btc = 0.15000000;
const _eth = 0.20000000;
const _ltc = 2.05000000;

$(document).ready(function(){
	getCryptoPrices();
  getStocks();
});


function getCryptoPrices(){
	const url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
  	data = $.ajax({
    	type: "GET",
    	url: url,
    	dataType: 'json',
    	success: function(data){
        var arr = [];
        for(var i = 0; i < data.length; i++){
          if(data[i].id === "bitcoin" || data[i].id === "ethereum" || data[i].id === "litecoin"){
            arr.push(data[i]);
            arr.sort();
          }
        }

        if(arr[2].price_usd == 305 || arr[2].price_usd == 290){ alert('!!!!!'); }

        let bwallet = Math.round(arr[0].price_usd * _btc);
        let ewallet = Math.round(arr[1].price_usd * _eth);
        let lwallet = Math.round(arr[2].price_usd * _ltc);

    		$('#search .name').text(arr[0].name + "(" + arr[0].symbol + ")");
        $('#search .price').text("$" + arr[0].price_usd + " USD");
        $('#search .change').text(arr[0].percent_change_1h + "%");

        $('#djia .name').text(arr[1].name + "(" + arr[1].symbol + ")");
        $('#djia .price').text("$" + arr[1].price_usd + " USD");
        $('#djia .change').text(arr[1].percent_change_1h + "%");

        $('#gspc .name').text(arr[2].name + "(" + arr[2].symbol + ")");
        $('#gspc .price').text("$" + arr[2].price_usd + " USD");
        $('#gspc .change').text(arr[2].percent_change_1h + "%");

        $('#ixic .name').text(arr[2].name + "(" + arr[2].symbol + ")");
        $('#ixic .price').text("$" + arr[2].price_usd + " USD");
        $('#ixic .change').text(arr[2].percent_change_1h + "%");

        for(var i = 0; i < arr.length; i++){
          if(arr[i].percent_change_1h < 0){
            $('#' + arr[i].id + ' .change').addClass('negative');
            $('#' + arr[i].id + ' .change').prepend('&#8595; ');
          } else{
            $('#' + arr[i].id + ' .change').addClass('positive');
            $('#' + arr[i].id + ' .change').prepend('&#8593; ');
          }
        }
    	}
    });
}

function getStocks(){
  new TradingView.MediumWidget({
  "container_id": "tv-medium-widget-5e6f9",
  "symbols": [
    [
      "Apple",
      "AAPL "
    ],
    [
      "Google",
      "GOOGL"
    ],
    [
      "Microsoft",
      "MSFT"
    ],
    [
      "Bitcoin",
      "COINBASE:BTCUSD|1y"
    ],
    [
      "Ethereum",
      "COINBASE:ETHUSD|1y"
    ],
    [
      "Litecoin",
      "COINBASE:LTCUSD|1y"
    ]
  ],
  "greyText": "Quotes by",
  "gridLineColor": "#e9e9ea",
  "fontColor": "#83888D",
  "underLineColor": "#dbeffb",
  "trendLineColor": "#4bafe9",
  "width": "100%",
  "height": "400px",
  "locale": "en"
  });
}

setInterval(getCryptoPrices, 10000);
