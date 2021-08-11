function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let materias;
  let promedioAlumno;
  let edad;
  let mejorPromedioFisica;
  let flagAlumnosCursando = 1;
  let edadAlumnaMasJoven;
  let nombreMasJoven;
  let estudiantesFisica;
  let estudiantesQuimica;
  let estudiantesSistemas;
  let nombreMasMaterias;
  let edadMasMaterias;
  let contadorMaterias = 0;
  let porcQuimica;
  let porcFisica;
  let porcSistemas;

  
  for(let totalAlumnos = 500;totalAlumnos > 0;totalAlumnos--){
    nombre = prompt("Ingresar nombre: ");
    carrera = prompt("Ingresar Carrera(Quimica/Fisica/Sistemas): ");
    while(carrera != "Quimica" && carrera != "Fisica" && carrera !="Sistemas")
    {
      carrera = prompt("Error.Reingrese carrera(Quimica/Fisica/Sistemas): ");
    }
    sexo = prompt("Ingresar sexo(Masculino/Femenimo/No binario): ");
    while(sexo != "Masculino" && sexo !="Femenino" && sexo !="No binario")
    {
      sexo = prompt("Error.Reingrese sexo(Masculino/Femenino/No binario");
    }
    materias = parseInt(prompt("Ingresar cantidad de materias: "));
    while(isNaN(materias) || materias == 0 || materias > 5)
    {
        materias = prompt("Error.Reingrese materias(1 a 5):");
    }
    promedioAlumno = parseInt(prompt("Ingresar promedio del alumno(0 a 10): "));
    while(isNaN(promedioAlumno) || promedioAlumno >10 )
    {
      promedioAlumno = parseInt(prompt("Error.Reingresar promedio(0 a 10)"))
    }
    edad = parseInt(prompt("Ingresar edad: "));
    if(edad < edadAlumnaMasJoven && sexo == "Femenino")
    {
        nombreMasJoven = nombre;
    }
    if(materias > contadorMaterias && carrera !="Quimica")
    {
      nombreMasMaterias = nombre;
      edadMasMaterias = edad;
    }
    while(isNaN(edad) || edad < 17)
    {
      edad = prompt("Error.Ingrese edad: ");
    }
    switch(carrera)
    {
      case "Quimica":
      estudiantesQuimica = estudiantesQuimica + 1;
      break;
      case "Fisica":
        estudiantesFisica= estudiantesFisica + 1;
        if(promedioAlumno > mejorPromedioFisica || flagAlumnosCursando == 1)
        {
          mejorEnFisica = nombre;
          flagAlumnosCursando = 0;
        }
      break;
      case "Sistemas":
        estudiantesSitemas = estudiantesSistemas +1;
      break;

    }
    
  }
  if ( totalAlumnos > 0)
  {
    porcFisica = estudiantesFisica * 100 /totalAlumnos;
    porcQuimica = estudiantesQuimica * 100 /totalAlumnos;
    porcSistemas = estudiantesSistemas * 100 /totalAlumnos;
  }
}
