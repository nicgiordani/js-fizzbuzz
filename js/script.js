// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var numeri = [];

for (var i = 0; i < 100 + 1; i++) {
  numeri.push(i);
  console.log(numeri[i]);

  if(i % 3 == 0 ) {
    numeri[i] = "Fizz";
  }
}
