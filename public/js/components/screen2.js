'use strict';

const Screen2 = () => {
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row"></div>');
  const carousel = $('<div class="carousel carousel-slider content-carousel" data-indicators="true"></div>');
  const item = $('<div class="carousel-item" href="#one!">');
  const img = $('<img src="img/icons/icon-people.png">');
  const span = $('<div class="content-span center"><span class="strong-span black-text">Paga a tus amigos</span><p>Paga a quien quieras desde donde quieras, sin usar efectivo.</p></div>');

  const registrar = $('<a><div class="btn btn-default btn-carousel">REGISTRARME</div></a>');

  container.append(row);
  row.append(carousel);
  row.append(registrar);
  carousel.append(item);
  item.append(img);
  item.append(span);


  $(document).ready(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  });

  return container;
}
