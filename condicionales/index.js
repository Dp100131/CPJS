/**
 * Condicionales:
 * 
 *      If - else if and else
 *      switch
 */

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {

    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertDuo":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;

    default:
        console.log("Esta opción no está soportada.")
        break;
 }

 if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == 'ExpertDuo') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("Esta opción no está soportada.");
}