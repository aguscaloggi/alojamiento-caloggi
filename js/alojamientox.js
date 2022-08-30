let todoOk = true;
let flname = localStorage.getItem('flname');
let email = localStorage.getItem('email');
let entrada = localStorage.getItem('entrada');
let salida = localStorage.getItem('salida');
let mayores = localStorage.getItem('mayores');
let menores = localStorage.getItem('menores');
let consulta = sessionStorage.getItem('consulta');
const DateTime = luxon.DateTime;

document.getElementById('flname').value = flname;
document.getElementById('email').value = email;
document.getElementById('entrada').value = entrada;
document.getElementById('salida').value = salida;
document.getElementById('mayores').value = mayores;
document.getElementById('menores').value = menores;
document.getElementById('consulta').value = consulta;

form.addEventListener('submit', (e) =>  {
    if (flname.value === '' || flname.value == null) {
        Swal.fire({icon: 'error',
                   title: 'Verifique uno de los campos.'
        })
    }
    if (email.value === '' || email.value == null) {
        Swal.fire({icon: 'error',
                   title: 'Verifique uno de los campos.'
        })
    }
    if (entrada.value === '' || entrada.value == null) {
        Swal.fire({icon: 'error',
                   title: 'Verifique uno de los campos.'
        })
    }
    if (salida.value === '' || salida.value == null) {
        Swal.fire({icon: 'error',
                   title: 'Verifique uno de los campos.'
        })
    }
    if (mayores.value < 0 || mayores.value === '' || mayores.value == null) {
        Swal.fire({icon: 'error',
                   title: 'Verifique uno de los campos.'
        })
    }
    if (menores.value < 0 || menores.value === '' || menores.value == null) {
        Swal.fire({icon: 'error',
                   title: 'Verifique uno de los campos.'
        })
    }
    if (consulta.value === '' || consulta.value == null) {
        Swal.fire({icon: 'error',
                   title: 'Verifique uno de los campos.'
        })
    }
    e.preventDefault()
})

    function enviarFormulario() {

        let flname = document.getElementById('flname').value;
        let email = document.getElementById('email').value;
        let entrada = document.getElementById('entrada').value;
        let salida = document.getElementById('salida').value;
        let mayores = document.getElementById('mayores').value;
        let menores = document.getElementById('menores').value;
        let consulta = document.getElementById('consulta').value;

        let entradaLux = (DateTime.fromJSDate(new Date (entrada)));
        let salidaLux = (DateTime.fromJSDate(new Date (salida)));
        let fechaHoy = DateTime.local;

        if (fechaHoy > entradaLux) {
            Swal.fire({
                title: 'Error!',
                text: 'La consulta debe ser para una fecha posterior a la de hoy.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            todoOk = false;
        } else {
            todoOk = true;
        }
        if (entradaLux <= salidaLux) {
            Swal.fire({
                title: 'Error!',
                text: 'La fecha de salida tiene que ser posterior a la de entrada.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            todoOk = false;
        } else {
            todoOk = true;
        }
        if (mayores < 1) {
            Swal.fire({
                title: 'Error!',
                text: 'Debe tener al menos un mayor a cargo.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
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

            Swal.fire({icon: 'success',
                       title: 'Consulta enviada!'});
        }
    }