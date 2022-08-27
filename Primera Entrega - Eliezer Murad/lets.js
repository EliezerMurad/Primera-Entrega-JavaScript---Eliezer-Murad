const comenzar = document.querySelector("#start");

comenzar.addEventListener("click", ()=> {
    let nombre = prompt("¿Cuál es tu nombre?");
    let pregunta1 = prompt("¿Estás listo/a, " + nombre +", para unas preguntas de cultura general? S o N");
    
    
    
        while(pregunta1==="S" || pregunta1==="s" || pregunta1==="N" || pregunta1==="n") {
            if(pregunta1==="N" || pregunta1==="n") {
                alert("Hasta luego!")
                break;
                
            }
             
            if(pregunta1==="S" || pregunta1==="s") {
                    alert("¡Vamos!");
                   
                    let pregunta = prompt("¿En qué año tuvo lugar la revolución Francesa? (1789)");
                        
                        if (pregunta == 1789) {
                            alert("Correcto!");
                        } else if (pregunta < 1789) {
                            alert("Estuviste cerca!");
                            
                        } else if (pregunta > 1789) {
                            alert("Te pasaste!");
                        }
                        else {
                            alert("Incorrecto!")
                        }
                        let pregunta2 = prompt("¿Cuántas horas hay en un día? (24)");
                        
                        if (pregunta2 == 24) {
                            alert("Correcto!");
                        } else if (pregunta2 < 24) {
                            alert("Estuviste cerca!")
                        } else if (pregunta2 > 24) {
                            alert("Te pasaste!")
                        }
                        else {
                            alert("Incorrecto!")
                        }
                
                
                        let pregunta3 = prompt("¿En qué provincia Argentina se encuentra el cerro Uritorco? (Cordoba)");
                        
                        if (pregunta3 == "Cordoba" || pregunta3== "cordoba") {
                            alert("Correcto!");
                        } else {
                            alert("Incorrecto!")
                        }
                        break;
                }
            
        }

})










































