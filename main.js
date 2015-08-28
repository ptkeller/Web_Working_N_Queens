var num = document.querySelector('#num');
var button = document.querySelector('#go');
var result = document.querySelector('.result');

if(window.Worker){
  var myWorker = new Worker("worker.js");

  num.onchange = function(){
    myWorker.postMessage([num.value]);
  };

  myWorker.onmessage = function(e){
    result.textContent = e.data;
  };
}
