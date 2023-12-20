import OBJ_NavBar from "./BarraNavegacion.js";
import typewriter from "./AnimacionHeader.js"; // efecto maquina de escribir.
import OBJ_Project from "./_Proyectos.js";
import formulary from  "./_formValidation.js";
import  "./correciones.js"; // documento a eliminar

// Commit en master
console.log("Commit en master");

document.addEventListener("DOMContentLoaded",() => {
    // Commit 1 en feature
    console.log("Commit 1 en feature");
    
    const $typewriter = typewriter(); // Efecto maquina de escribir en el header.
    
    // Barra de navegacion.
    const $Navbar = new OBJ_NavBar(); 
    $Navbar.PositionFixed_And_HidenBarYellow();

    // Section proyectos.
    const $project = new OBJ_Project();
    $project.Request_JSON();

    // Validacion de formulario.
    const $OBJ_formulary      = new formulary();
    const $form_to_contact_me = document.querySelector("#form-to-contact-me");

    $form_to_contact_me.addEventListener("submit",(e) => {
        e.preventDefault();

        $OBJ_formulary.collecting_information(e); // Validando formulario.
    });

    // Commit 1 en master
    console.log("Commit 1 en master");

    // Commit 2 en master
    console.log("Commit 2 en master");

    // Ejemplo 3 - Commit en master
    console.log("Ejemplo 3 - commit en  master");
});