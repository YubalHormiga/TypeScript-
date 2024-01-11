
// Objetos
type Vehiculo = {
  carroceria: String, modelo: String, antibalas: Boolean, pasajeros: Number, disparar?: () => void
}
const batimovil: Vehiculo = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4
};

const bumblebee: Vehiculo = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() { // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type Villano = {
  nombre: String,
  edad?: Number,
  mutante: Boolean
}

const villanos: Villano[] = [{
  nombre: "Lex Luthor",
  edad: 54,
  mutante: false
}, {
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
}, {
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type Charles = {
  poder: String
  estatura: Number
}
const charles: Charles = {
  poder: "psiquico",
  estatura: 1.78
};

console.log(charles)
type Apocalipsis = {
  lider: Boolean,
  miembros: String[]
}
const apocalipsis: Apocalipsis = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: (Apocalipsis | Charles);

mystique = charles;
mystique = apocalipsis;
