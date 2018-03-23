$(document).ready(function(){
  changeActive();
});

function changeActive(){
  if(window.location.href.indexOf('menu') > -1){
    $('#nav-menu').addClass('active');
  }
  else if(window.location.href.indexOf('news') > -1){
    $('#nav-news').addClass('active');
  }
  else if(window.location.href.indexOf('events') > -1){
    $('#nav-events').addClass('active');
  }
  else if(window.location.href.indexOf('about') > -1){
    $('#nav-about').addClass('active');
  }
  else{
    $('#nav-home').addClass('active');
  }
}
