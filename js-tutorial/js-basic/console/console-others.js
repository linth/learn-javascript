



const ex_assert = () => {
  let a = 3;

  if (a == 4) {
    console.log('= 4.');
  }
  else {
    console.log('not = 4.');
    console.assert('This is assert.');
  }
}

const ex_warn = () => {
  console.warn('This is warning.');
}

const ex_error = () => {
  console.error('This is error.');
}

const ex_info = () => {
  console.info('This is info.');
}

ex_assert();
ex_warn();
ex_error();
ex_info();
