'use strict';

const render = (root) => {
  root.empty();

  const wrapper = $('<div class="wrapper"></div>');
  //----->Condicional para las pantallas
  if(state.screen1 === true) {
      wrapper.append(Screen1(_=>{render(root)}));
    }else if(state.screen2 === true){
      wrapper.append(Screen2(_=>{render(root)}));
    }else if(state.screen3 === true){
      wrapper.append(Screen3(_=>{render(root)}));
    }else if(state.screen4 === true){
      wrapper.append(Screen4(_=>{render(root)}));
    }else if(state.screen5 === true){
      wrapper.append(Screen5(_=>{render(root)}));
    }

    root.append(wrapper);
}

const state = {
  screen1: null,
  screen2: null,
  screen3:  null,
  screen4:  null,
  screen5: null
  // validate: false,
  // user: {},
};

$( _ => {
  // $.post('users.js', (body, data) => {
  //
  state.screen1= true;

  const root = $('#root');
  render(root);
  // });
});
