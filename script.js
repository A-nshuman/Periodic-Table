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
    { number: '114', symbol: 'Fl', name: 'Flerovium', mass: '(289)' }
  ];

  var halogens = [
    { number: '9', symbol: 'F', name: 'Fluorine', mass: '18.998' },
    { number: '17', symbol: 'Cl', name: 'Chlorine', mass: '35.45' },
    { number: '35', symbol: 'Br', name: 'Bromine', mass: '79.90' },
    { number: '53', symbol: 'I', name: 'Iodine', mass: '126.90' },
    { number: '85', symbol: 'At', name: 'Astatine', mass: '210.00' },
    { number: '115', symbol: 'Mc', name: 'Moscovium', mass: '(290)' }
  ];

  var nobleGases = [
    { number: '2', symbol: 'He', name: 'Helium', mass: '4.0026' },
    { number: '10', symbol: 'Ne', name: 'Neon', mass: '20.180' },
    { number: '18', symbol: 'Ar', name: 'Argon', mass: '39.948' },
    { number: '36', symbol: 'Kr', name: 'Krypton', mass: '83.80' },
    { number: '54', symbol: 'Xe', name: 'Xenon', mass: '131.29' },
    { number: '86', symbol: 'Rn', name: 'Radon', mass: '222.00' },
    { number: '116', symbol: 'Lv', name: 'Livermorium', mass: '(293)' }
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

  // Function to create and append alkali elements

  function createAlkaliElement(data, index) {
    var newElement = document.createElement('div');
    newElement.className = 'tiles prd' + (index + 2) + ' alkali';

    // Create and append child elements
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

    // Create and append child elements
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
  
    // Create and append child elements
    ['number', 'symbol', 'name', 'mass'].forEach(function (property) {
      var childElement = document.createElement('div');
      childElement.className = property;
      childElement.textContent = data[property];
      newElement.appendChild(childElement);
    });
  
    grp3.appendChild(newElement);
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


  const alkali = document.querySelectorAll('.alkali');
  const alkaline = document.querySelectorAll('.alkaline');
  const grp3Ele = document.querySelectorAll('.grp3Ele');
  const other = document.querySelectorAll('.other');

  const number = document.querySelectorAll('.number');
  const mass = document.querySelectorAll('.mass');
  const name = document.querySelectorAll('.name');

  function tileColor(grpName, color) {
    grpName.forEach(element => {
      element.style.borderColor = `${color}`;
      element.style.filter = `drop-shadow(0 0 5px ${color})`;
    });
  };

  function fontS(clsName, fontSize) {
    clsName.forEach(element => {
      element.style.fontSize = `${fontSize}`;
    });
  }

  tileColor(other, 'greenyellow')
  tileColor(alkali, 'crimson')
  tileColor(alkaline, 'yellow')
  tileColor(grp3Ele, 'rgb(225, 119, 34)')

  fontS(number, '12px')
  fontS(mass, '12px')
  fontS(name, '10px')

});

