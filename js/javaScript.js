(() => {

    const encriptar = document.getElementById('encriptar');
    const desencriptar = document.getElementById('desencriptar');
    const copiar = document.getElementById('copiar');
    const div_container = document.getElementById('resolved-div');
    const resolved = document.querySelector('.resolved');


    const mensaje = document.getElementById('mensaje');
    const mensajeResuelto = document.getElementById('mensaje-resuelto');


    encriptar.addEventListener('click', encriptar_mensaje);


    desencriptar.addEventListener('click', desencriptar_mensaje);

    copiar.addEventListener('click', () => {
        navigator.clipboard.writeText(mensajeResuelto.textContent);
    })


    function encriptar_mensaje() {

        const length = mensaje.value.length;

        if (!length)
            return;

        const cadena = mensaje.value.toLowerCase();


        let newCadena = '';

        for (let i = 0; i < length; i++) {

            const char = cadena.charAt(i);

            switch (char) {
                case 'a':
                    newCadena += 'ai';
                    break;
                case 'e':
                    newCadena += 'enter';
                    break;
                case 'i':
                    newCadena += 'imes';
                    break;
                case 'o':
                    newCadena += 'ober';
                    break;
                case 'u':
                    newCadena += 'ufat';
                    break;

                default:
                    newCadena += char;
                    break;
            }

        }

        div_container.style.display = 'none';

        mensajeResuelto.textContent = newCadena;

        copiar.style.display = 'block';

        resolved.style.justifyContent = 'space-between'
    }

    function desencriptar_mensaje() {

        if (!mensaje.value.length) return;

        let cadena = mensaje.value.toLowerCase();

        cadena = cadena.replaceAll('ai', 'a');
        cadena = cadena.replaceAll('enter', 'e');
        cadena = cadena.replaceAll('imes', 'i');
        cadena = cadena.replaceAll('ober', 'o');
        cadena = cadena.replaceAll('ufat', 'u');

        div_container.style.display = 'none';

        mensajeResuelto.textContent = cadena;

        copiar.style.display = 'block';

    }

})();