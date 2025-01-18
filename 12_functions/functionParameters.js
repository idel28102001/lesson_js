const ourFunction = (firstname, lastname='DEFAULT_LASTNAME') => {
  console.log('ourFunction was called with params:',firstname,lastname);
}

ourFunction('Ivan', 'Ivanov');
ourFunction('Ivan');
ourFunction();