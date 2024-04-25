// Función para cargar las categorías desde la API
function cargar_categoria() {
    try{ fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(categorias => {
        imprimir_categorias(categorias);
    
    })
}
    
    catch(error) {
        console.error('Error al obtener las categorías:', error);
    };
}

// Función para imprimir las categorías como checkboxes
function imprimir_categorias(lista_categorias) {
    // Selecciona el elemento contenedor donde se agregarán las categorías
    let div_informacion = document.querySelector(`.div_descripcion`);
    // Verifica si el elemento contenedor se encontró
    if (div_informacion) {
        // Itera sobre la lista de categorías
        lista_categorias.forEach(element => {
            // Crea un div para cada categoría con un checkbox y una etiqueta
            let div = document.createElement("div");
            div.innerHTML = `
                <input type="checkbox" id="${element}" name="categorias[]" value="${element}">
                <label for="${element}">${element}</label>
            `;
            // Agrega el div al elemento contenedor
            div_informacion.appendChild(div);
        });
    } else {
        console.error('No se encontró el elemento contenedor con la clase "div_descripcion"');
    }
}

// Llama a la función para cargar las categorías cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    cargar_categoria();
});

// Exporta la función cargar_categoria
export { cargar_categoria };
