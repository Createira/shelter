const pets = ['a', 'b', 'c', 'd', 'e'];

for(let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}

// Логические операторы

// || (ИЛИ)

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";

console.log(name); // 'John'

// && (И)

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour === 12 && minute === 30) {
  alert( 'The time is 12:30' );
}

// ! (НЕ)

let currentUser = null;
let defaultUser = "John";

let name = currentUser || "unnamed";



alert( 3 || 4 ); // 3




if (-1 || 0) {
    alert( 'first' ); // 'first'
}

if (-1 && 0) {
    alert( 'second' );  //
}

if (null || -1 && 1) {
    alert( 'third' ); //?
}




const a = 2 + 2;

switch (a) {
  case 4:
    alert('Правильно!');
    break;

  case 3:
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}

if (a == 4) {
    alert( 'Правильно!' );
} else if (a == 3 && a == 5) {
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
} else {
    alert( "Нет таких значений" );
}



switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}


if (browser === 'Edge') {
    alert( "You've got the Edge!" );
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}