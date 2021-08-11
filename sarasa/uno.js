function mostrar() {
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let seguir;
  let contReptiles = 0;
  let acumEdadReptiles = 0;
  let promEdadReptiles = 0;
  let edadMasJoven; 
  let tipoMasJoven;
  let sexoMasJoven;
  let flagMasJoven = 1;
  let totalMascotas = 0 ;
  let porcAves;
  let tipoMayorCantidad;


  do{
      nombre = prompt("Ingrese nombre de la mascota: ");
      while(nombre.length < 3 || nombre.length > 8)
      {
        nombre = prompt("Nombre invalido.Reingrese nombre(entre 3 y 8 caracteres): ");
      } 
      edad = parseInt(prompt("Ingrese edad de la mascota: "));
      while(isNaN(edad) || edad == 0)
      {
        edad = prompt("Edad invalida.Reingrese edad: ");
      }
      tipo = prompt("Ingresar tipo de mascota(mamifero/reptil/ave): ");
      while(tipo !="mamifero" && tipo != "reptil" && tipo != "ave")
      {
        tipo = prompt("Tipo de mascota invalido.Reingresar tipo(mamifero/reptil/ave): ");
      }
      if(tipo == "reptil")
      {
        sangre = prompt("Ingrese sangre fria: ");
        while(sangre != "fria")
        {
          sangre = prompt("Error. Ingrese sangre fria");
        }
      }else{
          sangre = prompt("Ingrese tipo de sangre(fria/calida): ");
          while(sangre !="fria" && sangre !="calida")
          {
             sangre = prompt("Tipo de sangre invalida.Reingrese tipo(fria/calida): ");
          }
        }
      sexo = prompt("Ingrese sexo de la mascota (m/h): ");
      while(sexo!='m' && sexo!='h')
      {
        sexo = prompt("Error. Reingrese sexo(m/h): ");
      }
      switch(tipo)
      {
        case "reptil":
          contReptiles = contReptiles + 1;
          acumEdadReptiles = acumEdadReptiles + edad;
          totalMascotas = totalMascotas + 1;
          break;
        case "ave":
          contAves = contAves + 1;
          totalMascotas = totalMascotas + 1;
          break;
        case "mamifero":
          contMamifero = contMamifero + 1;  
          totalMascotas = totalMascotas + 1;
          break;
      }
      if(flagMasJoven || edad < edadMasJoven)
      {
        edadMasJoven = edad;
        tipoMasJoven = tipo;
        sexoMasJoven = sexo;
        flagMasJoven = 0;
      }
      seguir = prompt("Desea ingresar otra mascota? s/n: ");
  }while(seguir == 's');

  if(contReptiles != 0)
  {
    promEdadReptiles = acumEdadReptiles / contReptiles ;
  }
  if(totalMascotas > 0 && contAves > 0)
  {
    porcAves = contAves * 100 /totalMascotas;
  }
  if(contReptiles > contMamifero && contReptiles > contAves)
  {
    tipoMayorCantidad = "reptil";
  }else if(contMamifero > contReptiles && contMamifero > contAves)
  {
    tipoMayorCantidad = "mamifero";
  }else
  {
    tipoMayorCantidad = "ave";
  }
  
document.write("El promedio de edad de los reptiles es" + promEdadReptiles +"<br>");
document.write("El tipo de sexo de la mascota mas joven es"+ tipoMasJoven+ "y el sexo es "+ sexoMasJoven + "<br>");
document.write("El porcentaje de aves es de"+ porcAves + "<br>" );
document.write("El tipo de mascota con mas cantidad es" + tipoMayorCantidad+ "<br>");
}
