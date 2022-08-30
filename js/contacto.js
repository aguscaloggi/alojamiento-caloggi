let todoOk = true;
let flname = localStorage.getItem('flname');
let email = localStorage.getItem('email');
let telefono = localStorage.getItem('telefono');
let consulta = sessionStorage.getItem('consulta');
const form = document.getElementById('form');

flname = document.getElementById('flname').value;
email = document.getElementById('email').value;
telefono = document.getElementById('telefono').value;
consulta = document.getElementById('consulta').value;

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
    if (telefono < 0 || telefono.value === '' || telefono.value == null) {
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
    let telefono = document.getElementById('telefono').value;
    let consulta = document.getElementById('consulta').value;

    localStorage.setItem('flname', flname);
    localStorage.setItem('email', email);
    localStorage.setItem('telefono', telefono);
    sessionStorage.setItem('consulta', consulta);

    Swal.fire({icon: 'success',
               title: 'Consulta enviada!'});
}
