let a = 1080;
let b = 15;
let c = 22;

document.getElementById('js-box').innerHTML = `x = a / b - c. x = ${a / b - c}`;
console.log('js succes');

let tank = {
  gun: '122 mm gun d-25t',
  baseObservation: 370,
  maxSpeed: 45,
  turret: false,
  armor: {
    front: '120mm',
    side: '85mm',
    rear: '30mm'
  }
}

document.getElementById('js-box').innerHTML = tank.armor.front
