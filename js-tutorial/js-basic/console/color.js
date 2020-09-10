

var error = () => {
    console.error('This is a error message.');
}

var warning_msg = () => {
    console.warn('This is a warning message.');
}

var general_msg = () => {
    console.log('This is a common message');
}

var custom_msg = () => {
    console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
}


error();
warning_msg();
custom_msg();