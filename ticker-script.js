var iframe = document.getElementById('scroller');
var counter = 0;

$("#up").click(function(){
  iframe.contentWindow.scrollBy(0, -120);
  counter = counter -1;
  if(counter <= 0){
    counter = 0;
  }
  console.log(counter);
});

$("#down").click(function(){
  counter++;
  if(counter >= 19){
    iframe.contentWindow.scrollTo(0,0);
    counter = 0;
  }else{
  iframe.contentWindow.scrollBy(0, 120);
        }
        console.log(counter);
});
