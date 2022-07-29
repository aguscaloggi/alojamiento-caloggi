let todoOk = true;
let flname = localStorage.getItem('flname');
let email = localStorage.getItem('email');
let entrada = localStorage.getItem('entrada');
let salida = localStorage.getItem('salida');
let mayores = localStorage.getItem('mayores');
let menores = localStorage.getItem('menores');
let consulta = sessionStorage.getItem('consulta');

document.getElementById('flname').value = flname;
document.getElementById('email').value = email;
document.getElementById('entrada').value = entrada;
document.getElementById('salida').value = salida;
document.getElementById('mayores').value = mayores;
document.getElementById('menores').value = menores;
document.getElementById('consulta').value = consulta;

    function enviarFormulario() {
        let today = new Date();
        let m = today.getMonth();
        let d = today.getDay();
        let y = today.getYear();
        let fecha = (m,d,y);
    
        let entradaDate = new Date(entrada);
        let salidaDate = new Date(salida);
    
        let flname = document.getElementById('flname').value;
        let email = document.getElementById('email').value;
        let entrada = document.getElementById('entrada').value;
        let salida = document.getElementById('salida').value;
        let mayores = document.getElementById('mayores').value;
        let menores = document.getElementById('menores').value;
        let consulta = document.getElementById('consulta').value;

        if (fecha > entradaDate) {
            alert("La consulta debe ser para una fecha posterior a la de hoy.");
            todoOk = false;
        } else {
            todoOk = true;
        }
        if (entradaDate < salidaDate) {
            alert("La fecha de salida tiene que ser posterior a la de entrada.")
            todoOk = false;
        } else {
            todoOk = true;
        }
        if (mayores < 1) {
            alert("Debe tener al menos un mayor a cargo.");
            todoOk = false;
        } else {
            todoOk = true;
        }
        
        if (todoOk) {
        
            localStorage.setItem('flname', flname);
            localStorage.setItem('email', email);
            localStorage.setItem('entrada', entrada);
            localStorage.setItem('salida', salida);
            localStorage.setItem('mayores', mayores);
            localStorage.setItem('menores', menores);
            sessionStorage.setItem('consulta', consulta);
        }
    }