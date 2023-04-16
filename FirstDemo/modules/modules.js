// export edilecek fonksiyon
function sum(a, b) {
    return a + b;
  }
  
  // module.exports ile fonksiyon export edilir
  module.exports = sum;
  // export edilecek fonksiyon
function multiply(a, b) {
    return a * b;
  }
  
  // exports ile fonksiyon export edilir
  exports.multiply = multiply;
  
  // export edilecek fonksiyonlar
function square(x) {
    return x * x;
  }
  
  function cube(x) {
    return x * x * x;
  }
  
  // module.exports ile square fonksiyonu export edilir
  module.exports = square;
  
  // exports ile cube fonksiyonu export edilir
  exports.cube = cube;
  
  //Fonksiyonları ve nesneleri doğrudan export etmek:
// export edilecek fonksiyonlar ve nesneler
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  const PI = 3.14159;
  
  // Fonksiyonları ve nesneleri doğrudan export etmek
  module.exports.greet = greet;
  module.exports.PI = PI;
  
//exports nesnesini doğrudan kullanarak:// export edilecek fonksiyonlar
exports.add = function(a, b) {
    return a + b;
  };
  
  exports.subtract = function(a, b) {
    return a - b;
  };

  //Fonksiyon veya nesneleri doğrudan module.exports'a atayarak:
  // export edilecek fonksiyonlar ve nesneler
function greet(name) {
    console.log(`Hello, ${name}!`);
    const PI = 3.14159;
  }
  
 
  
  // Fonksiyon ve nesneleri doğrudan module.exports'a atamak
  module.exports = {
    greet,
    PI
  };
  
  //Fonksiyon veya nesneleri exports nesnesine atayarak:
  // export edilecek fonksiyonlar ve nesneler
function area(radius) {
    return Math.PI * radius * radius;
  }
  
  const circumference = function(radius) {
    return 2 * Math.PI * radius;
  };
  
  // Fonksiyon veya nesneleri exports nesnesine atamak
  exports.area = area;
  exports.circumference = circumference;
  

  module.exports = {
  toplama: toplama,
  cikarma: cikarma
}

//module.exports ile exports temel farkı module .exporst={...}diyerek birden fazla fonksiyon export edebilirsin