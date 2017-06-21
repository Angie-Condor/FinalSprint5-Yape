'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Screen1());

  root.append(wrapper);
}

const state = {
  user: null,
  status: null
};

$( _ => {
  // $.post('users.js', (body, data) => {
  //
  //   if (data) { return alert(data.message);}

    const root = $('#root');
    render(root);
  // });
});
