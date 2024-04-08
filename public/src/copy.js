import copy from 'copy-to-clipboard';
function copier() {

copy('Text');

// Copy with options
copy('Text', {
  debug: true,
  message: 'Press #{key} to copy',
});
}   

