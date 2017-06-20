'use strict';

const Screen1 = () => {
  const div = $('<div></div>');
  const title = $('<h1 class="center-align">Yapeeeeeee</h1>');

  div.append(title);

  return div;
}

$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
});
