var app = new Vue({
    el: '#app',
    data: {
        // no pude liga la foto a la carpeta assets y esta en el directorio principal
        img: './assets/1.jpg',
        // Porducto y su Descripcion
        producto: 'Álbum Minecraft',
        descripcion: 'Álbum basado en el Famoso Juego de Consolas - PC - Moviles.',
        // VAMOS A HACER LOS STOCKS. STOCK ES LA CANTIDAD TOTAL DE MIS PRODUCTOS
        stock: 12,
        parrafo1: 'Hay Stock',
        parrafo2: 'Quedan Muy Pocas Unidades',
        parrafo3: 'Agotadas',
        // DETALLES DEL PRODUCTO EN UN ARRAY (ARREGLO)
        detalles: ['Ancho = 21cm / Largo = 32cm', 'Cantidad de Laminas = 180', 'Full Color'],
        // AHORA VAMOS A HACER QUE AL PASAR EL MOUSE POR E LOS NOMBRES PORTADA Y INTERIOR SE CAMBIE LA IMAGEN PARA ESO DEBEMOS HACER UN ARREGLO
        variantes: [
            {
                // crear un id
                id: 1,
                tipo: 'Portada',
                img: './assets/1.jpg',
            },
            {
                id: 2,
                tipo: 'Interior',
                img: './assets/2.png',
            }
        ],
        // PAGINA CREADA EN EL DIRECCTORIO PRINCIPAL PARA QUE AL REALIZAR CLICK EN PAGINA NUEVA SE REDIRECCIONE A ESA PAGINA LA CUAL SALDRIA EL TEXTO EN CONSTRUCCCION.
        // link: '/prueba.html',
        // CREACION DE LA VARIABLE CARRO CON UN ENTERO
        carro: 0,
        // FIN DE TODOS LOS DATOS 
        boton1: 'Agregar al Carro',
        boton2: 'Sacar del Carro'
    },

    methods: {
        // LO PRIMERO QUE VAMOS A REALIZAR ES EL CAMBIO DE LA IMAGEN AL PASAR EL MOUSE SOBRE NUESTRAS VARIANTES LAS CUALES ERAN PORTADA E INTERIOR.
        actualizarImg(img) {
            this.img = img;
        },
        // CREACION DE BOTONES Y SUS FUNCIONES
        agregaraCarro(){
            // LLAMAR AL CARRO DESDE DATO UTILIZANDO THIS Y EL CARRO QUE ESTA EN 0 IRA AUMENTANDO 1 EN 1 Y AL LLAMAR Y POR EL CONTRARIO THIS.STOCK DEBE DISMINUIR CON LO CONTRARIO
            this.carro += 1
            this.stock -= 1
        },
        sacardeCarro(){
            // PRIMERO ES EL IF LLAMAR A CARRO Y ESTE DEBE SER MAYOR A 0
            if(this.carro > 0){                    
            // AQUI DEBEMOS REALIZAR LO CONTRARIO DE AGREGAR POR ENDE SE CAMBIAN LOS SIMBOLOS Y SE LLAMAN A LOS MISMOS DATOS
            this.carro -= 1
            this.stock += 1
            }
        }
    },

    computed: {
        inStock(){
            return this.stock > 0 ? true : false //retorna el stock >0 ? (if) es verdadero : (else) es falso
        }
    },

    
})