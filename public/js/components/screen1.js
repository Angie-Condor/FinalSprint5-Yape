'use strict';

const Screen1 = () => {
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row"></div>');
  const carousel = $('<div class="carousel carousel-slider content-carousel" data-indicators="true"></div>');
  const item = $('<div class="carousel-item" href="#one!">');
  const img = $('<img src="img/icons/icon-people.png">');
  const span = $('<div class="content-span center"><span class="strong-span black-text">Paga a tus amigos</span><p>Paga a quien quieras desde donde quieras, sin usar efectivo.</p></div>');
  const item2 = $('<div class="carousel-item" href="#two!">');
  const img2 = $('<img src="img/icons/happy-person.png">');
  const span2 = $('<div class="content-span center"><span class="strong-span black-text">Sin número de cuenta</span><p>Elige a quién pagar desde tu lista de contactos.</p></div>');
  const item3 = $('<div class="carousel-item" href="#three!">');
  const img3 = $('<img src="img/icons/group-people.png">');
  const span3 = $('<div class="content-span center"><span class="strong-span black-text">Gratis y Seguro</span><p>La transferencia es inmediata y gratuita de una cuenta a otra.</p></div>');
  const registrar = $('<a><div class="btn btn-default btn-carousel">REGISTRARME</div></a>');

  container.append(row);
  row.append(carousel);
  row.append(registrar);
  carousel.append(item);
  item.append(img);
  item.append(span);
  carousel.append(item2);
  item2.append(img2);
  item2.append(span2);
  carousel.append(item3);
  item3.append(img3);
  item3.append(span3);

  $(document).ready(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  });

  return container;
}
