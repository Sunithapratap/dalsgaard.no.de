
importScripts('isprime.js');

self.addEventListener('message', function(e) {
  for (var i = 3; i < e.data; i++) {
    if (isPrime(i)) {
      self.postMessage(i);
    }
  }
  self.postMessage(0);
  self.close();
}, false);
