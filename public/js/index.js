'use strict';

const render = (root) => {
  root.empty();

  const wrapper = $('<div class="wrapper"></div>');
  //----->Condicional para las pantallas
  if(state.screen1 === true) {
      wrapper.append(Screen1(_=>{render(root)}));
    }else if(state.screen2 === true){
      wrapper.append(Screen2(_=>{render(root)}));
      }

    root.append(wrapper);
}

const state = {
  screen1: null,
  screen2: null
};

$( _ => {
  // $.post('users.js', (body, data) => {
  //
  state.screen1= true;

  const root = $('#root');
  render(root);
  // });
});
