class Estudiante {
    name = "Oscar";
    subjects = ["javascript", "html", "css"];
    obtenDatos(){
        const persona = {
            nombre: this.name,
            asignaturas: this.subjects
        }
        return persona;
    }
}

const estudiante = new Estudiante;
console.log(estudiante.obtenDatos());