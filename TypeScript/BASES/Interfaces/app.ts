// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender: Boolean;
  velocidadMaxima?: Number
  acelerar(): void
}
const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir: Boolean,
  comer: Boolean,
  llorar: Boolean
}
const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false
}

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Ciudad{
  (ciudadanos:string[]):Number
}

const ciudadGotica:Ciudad = (ciudadanos: string[]): number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
    */
interface PersonaInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void; // en consola una breve descripción.
}

class Persona implements PersonaInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;

  constructor(nombre: string, edad: number, sexo: string, estadoCivil: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }

  imprimirBio() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Estado Civil: ${this.estadoCivil}`);
  }
}

// Ejemplo de uso
const persona1 = new Persona('Juan', 30, 'Masculino', 'Soltero');
persona1.imprimirBio();

