var diaDeLaSemana = new Date();
switch (diaDeLaSemana.getDay()) {
    case 1:
        alert("Estamos a Lunes. Recuerda actualizar página (F5) para saber el dia en que estamos")
        break; //<---- codigo para romper el proceso
    case 2:
        alert("Estamos a Martes. Recuerda actualizar página (F5) para saber el dia en que estamos")
        break;
    case 3:
        alert("Estamos a Miércoles. Recuerda actualizar página (F5) para saber el dia en que estamos")
        break;
    case 4:
        alert("Estamos a Jueves. Recuerda actualizar página (F5) para saber el dia en que estamos")
        break;
    case 5:
        alert("Estamos a Viernes. Recuerda actualizar página (F5) para saber el dia en que estamos")
        break;
    case 6:
        alert("Estamos a Sábado. Recuerda actualizar página (F5) para saber el dia en que estamos")
        break;
    case 0:
        alert("Estamos a Domingo. Recuerda actualizar página (F5) para saber el dia en que estamos")
        break;
    default:
        alert("Número de día desconocido, no se puede informar el dia")
        break;
}
//console.log(diaDeLaSemana.getDay());