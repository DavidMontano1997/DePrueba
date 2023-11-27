import OBJ_NavBar from "./BarraNavegacion.js";
import typewriter from "./AnimacionHeader.js"; // efecto maquina de escribir.
import OBJ_Project from "./_Proyectos.js";
import formulary from  "./_formValidation.js";
import  "./correciones.js"; // documento a eliminar

document.addEventListener("DOMContentLoaded",() => {
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

    // Commit 2 en RamaB
    console.log("Commit 2 en RamaB");

    $form_to_contact_me.addEventListener("submit",(e) => {
        e.preventDefault();

        $OBJ_formulary.collecting_information(e); // Validando formulario.

        // Cambio g2
        const visitor = $OBJ_formulary.GetInformationUser("DavidMG1997");
        console.log(visitor);
        console.log("Hola desde Modificandoheader!!!");

        // Commit A - Rama master
        console.log("Commit A - Rama master");

        // Commit B - Rama master
        console.log("Commit B - Rama master");
    });

    // Commit 1 en NuevaRama
    console.log("Commit 1 - NuevaRama");

    // Commit 1 en RamaUno
    console.log("Commit 1 - RamaUno");

    // Commit 2 en RamaUno
    console.log("Commit 2 - RamaUno");

    // Commit en RamaA
    console.log("Commit en RamaA");

    // Commit 2 en RamaA
    console.log("Commit 2 en RamaA");
});