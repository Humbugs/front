var JSE = require('jekyll-store-engine');

var productPageElem = document.getElementById('product-page');

if(productPageElem) {
  JSE.Actions.setVisitedLimit({ limit: 4 });
  JSE.Actions.visit({ name: productPageElem.getAttribute('data-name') });

  // Load Yotpo
  (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/Mw5fsUfLYOvSOLArDgvTCGwFzBuLGI5OcYuZ0reP/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();
}
