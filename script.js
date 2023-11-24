document.addEventListener('DOMContentLoaded', () => {

  var alkaliElements = [
    { number: '3', symbol: 'Li', name: 'Lithium', mass: '6.94' },
    { number: '11', symbol: 'Na', name: 'Sodium', mass: '22.99' },
    { number: '19', symbol: 'K', name: 'Potassium', mass: '39.10' },
    { number: '37', symbol: 'Rb', name: 'Rubidium', mass: '85.47' },
    { number: '55', symbol: 'Cs', name: 'Cesium', mass: '132.91' },
    { number: '87', symbol: 'Fr', name: 'Francium', mass: '223.00' }
  ];

  var alkalineElements = [
    { number: '4', symbol: 'Be', name: 'Beryllium', mass: '9.0122' },
    { number: '12', symbol: 'Mg', name: 'Magnesium', mass: '24.305' },
    { number: '20', symbol: 'Ca', name: 'Calcium', mass: '40.078' },
    { number: '37', symbol: 'Sr', name: 'Strontium', mass: '87.62' },
    { number: '55', symbol: 'Ba', name: 'Barium', mass: '137.33' },
    { number: '87', symbol: 'Ra', name: 'Radium', mass: '226.03' }
  ];

  var group3Elements = [
    { number: '21', symbol: 'Sc', name: 'Scandium', mass: '44.96' },
    { number: '39', symbol: 'Y', name: 'Yttrium', mass: '88.91' },
    { number: '57', symbol: 'La', name: 'Lanthanum', mass: '138.91' },
    { number: '89', symbol: 'Ac', name: 'Actinium', mass: '227.00' }
  ];

  var group4Elements = [
    { number: '22', symbol: 'Ti', name: 'Titanium', mass: '47.87' },
    { number: '40', symbol: 'Zr', name: 'Zirconium', mass: '91.22' },
    { number: '72', symbol: 'Hf', name: 'Hafnium', mass: '178.49' },
    { number: '104', symbol: 'Rf', name: 'Rutherfordium', mass: '(267)' }
  ];

  var group5Elements = [
    { number: '23', symbol: 'V', name: 'Vanadium', mass: '50.94' },
    { number: '41', symbol: 'Nb', name: 'Niobium', mass: '92.91' },
    { number: '73', symbol: 'Ta', name: 'Tantalum', mass: '180.95' },
    { number: '105', symbol: 'Db', name: 'Dubnium', mass: '(270)' }
  ];

  var group6Elements = [
    { number: '24', symbol: 'Cr', name: 'Chromium', mass: '51.99' },
    { number: '42', symbol: 'Mo', name: 'Molybdenum', mass: '95.95' },
    { number: '74', symbol: 'W', name: 'Tungsten', mass: '183.84' },
    { number: '106', symbol: 'Sg', name: 'Seaborgium', mass: '(271)' }
  ];

  var group7Elements = [
    { number: '25', symbol: 'Mn', name: 'Manganese', mass: '54.94' },
    { number: '43', symbol: 'Tc', name: 'Technetium', mass: '(98)' },
    { number: '75', symbol: 'Re', name: 'Rhenium', mass: '186.21' },
    { number: '107', symbol: 'Bh', name: 'Bohrium', mass: '(270)' }
  ];

  var group8Elements = [
    { number: '26', symbol: 'Fe', name: 'Iron', mass: '55.85' },
    { number: '44', symbol: 'Ru', name: 'Ruthenium', mass: '101.07' },
    { number: '76', symbol: 'Os', name: 'Osmium', mass: '190.23' },
    { number: '108', symbol: 'Hs', name: 'Hassium', mass: '(277)' }
  ];

  var group9Elements = [
    { number: '27', symbol: 'Co', name: 'Cobalt', mass: '58.93' },
    { number: '45', symbol: 'Rh', name: 'Rhodium', mass: '102.91' },
    { number: '77', symbol: 'Ir', name: 'Iridium', mass: '192.22' },
    { number: '109', symbol: 'Mt', name: 'Meitnerium', mass: '(276)' }
  ];

  var group10Elements = [
    { number: '28', symbol: 'Ni', name: 'Nickel', mass: '58.69' },
    { number: '46', symbol: 'Pd', name: 'Palladium', mass: '106.42' },
    { number: '78', symbol: 'Pt', name: 'Platinum', mass: '195.08' },
    { number: '110', symbol: 'Ds', name: 'Darmstadtium', mass: '(281)' }
  ];

  var group11Elements = [
    { number: '29', symbol: 'Cu', name: 'Copper', mass: '63.55' },
    { number: '47', symbol: 'Ag', name: 'Silver', mass: '107.87' },
    { number: '79', symbol: 'Au', name: 'Gold', mass: '196.97' },
    { number: '111', symbol: 'Rg', name: 'Roentgenium', mass: '(280)' }
  ];

  var group12Elements = [
    { number: '30', symbol: 'Zn', name: 'Zinc', mass: '65.38' },
    { number: '48', symbol: 'Cd', name: 'Cadmium', mass: '112.41' },
    { number: '80', symbol: 'Hg', name: 'Mercury', mass: '200.59' },
    { number: '112', symbol: 'Cn', name: 'Copernicium', mass: '(285)' }
  ];

  var group13Elements = [
    { number: '5', symbol: 'B', name: 'Boron', mass: '10.81' },
    { number: '13', symbol: 'Al', name: 'Aluminum', mass: '26.98' },
    { number: '31', symbol: 'Ga', name: 'Gallium', mass: '69.72' },
    { number: '49', symbol: 'In', name: 'Indium', mass: '114.82' },
    { number: '81', symbol: 'Tl', name: 'Thallium', mass: '204.38' },
    { number: '113', symbol: 'Nh', name: 'Nihonium', mass: '(284)' }
  ];

  var group14Elements = [
    { number: '6', symbol: 'C', name: 'Carbon', mass: '12.01' },
    { number: '14', symbol: 'Si', name: 'Silicon', mass: '28.09' },
    { number: '32', symbol: 'Ge', name: 'Germanium', mass: '72.63' },
    { number: '50', symbol: 'Sn', name: 'Tin', mass: '118.71' },
    { number: '82', symbol: 'Pb', name: 'Lead', mass: '207.2' },
    { number: '114', symbol: 'Fl', name: 'Flerovium', mass: '(289)' }
  ];

  var group15Elements = [
    { number: '7', symbol: 'N', name: 'Nitrogen', mass: '14.01' },
    { number: '15', symbol: 'P', name: 'Phosphorus', mass: '30.97' },
    { number: '33', symbol: 'As', name: 'Arsenic', mass: '74.92' },
    { number: '51', symbol: 'Sb', name: 'Antimony', mass: '121.76' },
    { number: '83', symbol: 'Bi', name: 'Bismuth', mass: '208.98' },
    { number: '115', symbol: 'Mc', name: 'Moscovium', mass: '(290)' }
  ];

  var group16Elements = [
    { number: '8', symbol: 'O', name: 'Oxygen', mass: '16.00' },
    { number: '16', symbol: 'S', name: 'Sulfur', mass: '32.06' },
    { number: '34', symbol: 'Se', name: 'Selenium', mass: '78.97' },
    { number: '52', symbol: 'Te', name: 'Tellurium', mass: '127.60' },
    { number: '84', symbol: 'Po', name: 'Polonium', mass: '(209)' },
    { number: '116', symbol: 'Lv', name: 'Livermorium', mass: '(293)' }
  ];

  var group17Elements = [
    { number: '9', symbol: 'F', name: 'Fluorine', mass: '18.998' },
    { number: '17', symbol: 'Cl', name: 'Chlorine', mass: '35.45' },
    { number: '35', symbol: 'Br', name: 'Bromine', mass: '79.90' },
    { number: '53', symbol: 'I', name: 'Iodine', mass: '126.90' },
    { number: '85', symbol: 'At', name: 'Astatine', mass: '210.00' },
    { number: '117', symbol: 'Ts', name: 'Tennessine', mass: '(294)' }
  ];

  var group18Elements = [
    { number: '2', symbol: 'He', name: 'Helium', mass: '4.0026' },
    { number: '10', symbol: 'Ne', name: 'Neon', mass: '20.180' },
    { number: '18', symbol: 'Ar', name: 'Argon', mass: '39.948' },
    { number: '36', symbol: 'Kr', name: 'Krypton', mass: '83.80' },
    { number: '54', symbol: 'Xe', name: 'Xenon', mass: '131.29' },
    { number: '86', symbol: 'Rn', name: 'Radon', mass: '222.00' },
    { number: '118', symbol: 'Og', name: 'Oganesson', mass: '(295)' }
  ];

  var lanthanoids = [
    { number: 58, symbol: 'Ce', name: 'Cerium', mass: '140.116' },
    { number: 59, symbol: 'Pr', name: 'Praseodymium', mass: '140.90765' },
    { number: 60, symbol: 'Nd', name: 'Neodymium', mass: '144.242' },
    { number: 61, symbol: 'Pm', name: 'Promethium', mass: '(147)' },
    { number: 62, symbol: 'Sm', name: 'Samarium', mass: '150.36' },
    { number: 63, symbol: 'Eu', name: 'Europium', mass: '151.965' },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', mass: '157.253' },
    { number: 65, symbol: 'Tb', name: 'Terbium', mass: '158.92535' },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', mass: '162.500' },
    { number: 67, symbol: 'Ho', name: 'Holmium', mass: '164.93032' },
    { number: 68, symbol: 'Er', name: 'Erbium', mass: '167.259' },
    { number: 69, symbol: 'Tm', name: 'Thulium', mass: '168.93422' },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', mass: '173.045' },
    { number: 71, symbol: 'Lu', name: 'Lutetium', mass: '174.967' }
  ];

  var actinoids = [
    { number: 90, symbol: 'Th', name: 'Thorium', mass: '232.03806' },
    { number: 91, symbol: 'Pa', name: 'Protactinium', mass: '231.03588' },
    { number: 92, symbol: 'U', name: 'Uranium', mass: '238.02891' },
    { number: 93, symbol: 'Np', name: 'Neptunium', mass: '(237)' },
    { number: 94, symbol: 'Pu', name: 'Plutonium', mass: '(242)' },
    { number: 95, symbol: 'Am', name: 'Americium', mass: '(243)' },
    { number: 96, symbol: 'Cm', name: 'Curium', mass: '(247)' },
    { number: 97, symbol: 'Bk', name: 'Berkelium', mass: '(247)' },
    { number: 98, symbol: 'Cf', name: 'Californium', mass: '(251)' },
    { number: 99, symbol: 'Es', name: 'Einsteinium', mass: '(252)' },
    { number: 100, symbol: 'Fm', name: 'Fermium', mass: '(257)' },
    { number: 101, symbol: 'Md', name: 'Mendelevium', mass: '(258)' },
    { number: 102, symbol: 'No', name: 'Nobelium', mass: '(259)' },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', mass: '(262)' }
  ];  

  var grp1 = document.getElementById('grp1');
  var grp2 = document.getElementById('grp2');
  var grp3 = document.getElementById('grp3');
  var grp4 = document.getElementById('grp4');
  var grp5 = document.getElementById('grp5');
  var grp6 = document.getElementById('grp6');
  var grp7 = document.getElementById('grp7');
  var grp8 = document.getElementById('grp8');
  var grp9 = document.getElementById('grp9');
  var grp10 = document.getElementById('grp10');
  var grp11 = document.getElementById('grp11');
  var grp12 = document.getElementById('grp12');
  var grp13 = document.getElementById('grp13');
  var grp14 = document.getElementById('grp14');
  var grp15 = document.getElementById('grp15');
  var grp16 = document.getElementById('grp16');
  var grp17 = document.getElementById('grp17');
  var grp18 = document.getElementById('grp18');
  var lanth = document.getElementById('lan');
  var actin = document.getElementById('act');

  // Function to create and append alkali elements

  // function creatingElements(fName, indexNo, clsName, grpName) {
  //   window[fName] = function(data, index) {
  //     var newElement = document.createElement('div');
  //     newElement.className = `tiles prd${index + indexNo} ${clsName}`;

  //     ['number', 'symbol', 'name', 'mass'].forEach(function(property) {
  //       var childElement = document.createElement('div');
  //       childElement.className = property;
  //       childElement.textContent = data[property];
  //       newElement.appendChild(childElement);
  //     });

  //     console.log("Attempting to append to:", grpName);

  //     // Ensure that grpName is a valid DOM element
  //     if (grpName instanceof Element) {
  //       grpName.appendChild(newElement);
  //       console.log("Append successful!");
  //     } else {
  //       console.error("Invalid element for appending.");
  //     }
  //   };
  // }  

  // creatingElements('createAlkaliElement', 1, 'alkali', 'grp1');
  // creatingElements('createAlkalineElement', 2, 'alkaline', 'grp2');
  // creatingElements('createGroup3Element', 4, 'grp3Ele', 'grp3');

  function createAlkaliElement(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 2) + ' alkali';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp1.appendChild(newElement);
  }

  function createAlkalineElement(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 2) + ' alkaline';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp2.appendChild(newElement);
  }

  function createGroup3Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 4) + ' grp3Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp3.appendChild(newElement);
  }

  function createGroup4Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 4) + ' grp4Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp4.appendChild(newElement);
  }

  function createGroup5Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 4) + ' grp5Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp5.appendChild(newElement);
  }

  function createGroup6Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 4) + ' grp6Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp6.appendChild(newElement);
  }

  function createGroup7Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 4) + ' grp7Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp7.appendChild(newElement);
  }

  function createGroup8Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 4) + ' grp8Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp8.appendChild(newElement);
  }

  function createGroup9Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 4) + ' grp9Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp9.appendChild(newElement);
  }

  function createGroup10Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 4) + ' grp10Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp10.appendChild(newElement);
  }

  function createGroup11Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 4) + ' grp11Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp11.appendChild(newElement);
  }

  function createGroup12Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 4) + ' grp12Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp12.appendChild(newElement);
  }

  function createGroup13Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 2) + ' grp13Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp13.appendChild(newElement);
  }

  function createGroup14Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 2) + ' grp14Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp14.appendChild(newElement);
  }

  function createGroup15Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 2) + ' grp15Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp15.appendChild(newElement);
  }

  function createGroup16Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 2) + ' grp16Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp16.appendChild(newElement);
  }

  function createGroup17Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 2) + ' grp17Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp17.appendChild(newElement);
  }

  function createGroup18Element(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 1) + ' grp18Ele';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    grp18.appendChild(newElement);
  }

  function createLanthElement(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 6) + ' lanth';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    lanth.appendChild(newElement);
  }

  function createActinElement(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 7) + ' actin';

    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });

    actin.appendChild(newElement);
  }

  // Create and append alkali elements using the sample data
  alkaliElements.forEach(function (elementData, index) {
    createAlkaliElement(elementData, index);
  });

  alkalineElements.forEach(function (elementData, index) {
    createAlkalineElement(elementData, index);
  });

  group3Elements.forEach(function (elementData, index) {
    createGroup3Element(elementData, index);
  });

  group4Elements.forEach(function (elementData, index) {
    createGroup4Element(elementData, index);
  });

  group5Elements.forEach(function (elementData, index) {
    createGroup5Element(elementData, index);
  });

  group6Elements.forEach(function (elementData, index) {
    createGroup6Element(elementData, index);
  });

  group7Elements.forEach(function (elementData, index) {
    createGroup7Element(elementData, index);
  });

  group8Elements.forEach(function (elementData, index) {
    createGroup8Element(elementData, index);
  });

  group9Elements.forEach(function (elementData, index) {
    createGroup9Element(elementData, index);
  });

  group10Elements.forEach(function (elementData, index) {
    createGroup10Element(elementData, index);
  });

  group11Elements.forEach(function (elementData, index) {
    createGroup11Element(elementData, index);
  });

  group12Elements.forEach(function (elementData, index) {
    createGroup12Element(elementData, index);
  });

  group13Elements.forEach(function (elementData, index) {
    createGroup13Element(elementData, index);
  });

  group14Elements.forEach(function (elementData, index) {
    createGroup14Element(elementData, index);
  });

  group15Elements.forEach(function (elementData, index) {
    createGroup15Element(elementData, index);
  });

  group16Elements.forEach(function (elementData, index) {
    createGroup16Element(elementData, index);
  });

  group17Elements.forEach(function (elementData, index) {
    createGroup17Element(elementData, index);
  });

  group18Elements.forEach(function (elementData, index) {
    createGroup18Element(elementData, index);
  });

  lanthanoids.forEach(function (elementData, index) {
    createLanthElement(elementData, index);
  });

  actinoids.forEach(function (elementData, index) {
    createActinElement(elementData, index);
  });

  const alkali = document.querySelectorAll('.alkali');
  const alkaline = document.querySelectorAll('.alkaline');
  const grp3Ele = document.querySelectorAll('.grp3Ele');
  const grp4Ele = document.querySelectorAll('.grp4Ele');
  const grp5Ele = document.querySelectorAll('.grp5Ele');
  const grp6Ele = document.querySelectorAll('.grp6Ele');
  const grp7Ele = document.querySelectorAll('.grp7Ele');
  const grp8Ele = document.querySelectorAll('.grp8Ele');
  const grp9Ele = document.querySelectorAll('.grp9Ele');
  const grp10Ele = document.querySelectorAll('.grp10Ele');
  const grp11Ele = document.querySelectorAll('.grp11Ele');
  const grp12Ele = document.querySelectorAll('.grp12Ele');
  const grp13Ele = document.querySelectorAll('.grp13Ele');
  const grp14Ele = document.querySelectorAll('.grp14Ele');
  const grp15Ele = document.querySelectorAll('.grp15Ele');
  const grp16Ele = document.querySelectorAll('.grp16Ele');
  const grp17Ele = document.querySelectorAll('.grp17Ele');
  const grp18Ele = document.querySelectorAll('.grp18Ele');
  const lanthEle = document.querySelectorAll('.lanth');
  const actinEle = document.querySelectorAll('.actin');
  const other = document.querySelectorAll('.other');

  const number = document.querySelectorAll('.number');
  const mass = document.querySelectorAll('.mass');
  const name = document.querySelectorAll('.name');
  const tiles = document.querySelectorAll('.tiles');

  function tileColor(grpName, color) {
    grpName.forEach(element => {
      element.style.borderColor = `${color}`;
      element.style.filter = `drop-shadow(0 0 5px ${color})`;
    });
  };

  function indColor(symbols, color) {
    tiles.forEach(tile => {
      const symbol = tile.querySelector('.symbol');
  
      if (symbols.includes(symbol.textContent)) {
        tile.style.borderColor = color;
        tile.style.filter = `drop-shadow(0 0 5px ${color})`;
      }
    });
  }

  function fontS(clsName, fontSize) {
    clsName.forEach(element => {
      element.style.fontSize = `${fontSize}`;
    });
  }

  tileColor(other, 'aquamarine')
  tileColor(alkali, 'crimson')
  tileColor(alkaline, 'yellow')
  tileColor(grp3Ele, 'rgb(225, 119, 34)')
  tileColor(grp4Ele, 'rgb(225, 119, 34)')
  tileColor(grp5Ele, 'rgb(225, 119, 34)')
  tileColor(grp6Ele, 'rgb(225, 119, 34)')
  tileColor(grp7Ele, 'rgb(225, 119, 34)')
  tileColor(grp8Ele, 'rgb(225, 119, 34)')
  tileColor(grp9Ele, 'rgb(225, 119, 34)')
  tileColor(grp10Ele, 'rgb(225, 119, 34)')
  tileColor(grp11Ele, 'rgb(225, 119, 34)')
  tileColor(grp12Ele, 'rgb(225, 119, 34)')
  tileColor(grp13Ele, 'aquamarine')
  tileColor(grp14Ele, 'rgb(225, 119, 34)')
  tileColor(grp15Ele, 'rgb(225, 119, 34)')
  tileColor(grp16Ele, 'lime')
  tileColor(grp17Ele, 'greenyellow')
  tileColor(grp18Ele, 'cyan')
  tileColor(lanthEle, 'blue')
  tileColor(actinEle, 'brown')

  var forAquamarine = ['B', 'C', 'N', 'O', 'Si', 'P', 'S', 'As', 'Se', 'Te']
  var forLime = ['Al', 'Ga', 'In', 'Tl', 'Nh', 'Ge', 'Sn', 'Pb', 'Fl', 'Sb', 'Bi', 'Mc', 'Po', 'Lv']
  var unknown = ['Mt', 'Ds', 'Rg', 'Nh', 'Mc', 'Lv', 'Ts', 'Og']
  
  // const box = document.querySelectorAll('.box');
  // const text = document.querySelector('.text');
  
  // function boxColor(key, color) { 
  //   box.forEach(element => {
  //     if (text.textContent === key) {
  //       element.style.borderColor = color;
  //       element.style.filter = `drop-shadow(0 0 5px ${color})`;
  //     }
  //   });
  // }

  // boxColor('Alkali Metals', 'white');
  // boxColor('Alkaline Earth Metals', 'yellow');
  // boxColor('Unknown', 'blue');

  const AlkaliKBox = document.querySelector('.AlkaliKBox'); 
  const AlkalineKBox = document.getElementsByClassName('AlkalineKBox');
  const LanthanoidsKBox = document.getElementsByClassName('LanthanoidsKBox');
  const ActinoidsKBox = document.getElementsByClassName('ActinoidsKBox');
  const TransitionKBox = document.getElementsByClassName('TransitionKBox');
  const PostTransitionKBox = document.getElementsByClassName('PostTransitionKBox');
  const MetalloidsKBox = document.getElementsByClassName('MetalloidsKBox');
  const othMetalsKBox = document.getElementsByClassName('othMetalsKBox');
  const NobleGasesKBox = document.getElementsByClassName('NobleGasesKBox');
  const UnknownKBox = document.getElementsByClassName('UnknownKBox');

  indColor(AlkaliKBox, 'white')

  // document.getElementsByClassName('AlkaliKBox').style.borderColor = 'green';
  
  indColor(forAquamarine, 'aquamarine');
  indColor(forLime, 'lime');
  indColor(unknown, 'gray');

  fontS(number, '12px')
  fontS(mass, '12px')
  fontS(name, '10px')

});

