// Ejercicio 1
function calcularInteres() {
    const capital = parseFloat(document.getElementById('capital').value);
    const tasa = 0.02; // 2%
    const tiempo = 1; // 1 mes
    const interes = capital * tasa * tiempo;

    if (isNaN(capital) || capital < 0 || capital > 9999999) {
        alert("Por favor, ingresa una cantidad válida");
    } else {
        document.getElementById('resultado').innerText = `Interés ganado: $${interes.toFixed(2)}`;
    }
}

// Ejercicio 2
function calcularTotal() {
    const sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    const venta1 = parseFloat(document.getElementById('venta1').value);
    const venta2 = parseFloat(document.getElementById('venta2').value);
    const venta3 = parseFloat(document.getElementById('venta3').value);
    
    const comisionPorVenta = 0.10; // 10%
    const comisionTotal = (venta1 + venta2 + venta3) * comisionPorVenta;
    const sueldoTotal = sueldoBase + comisionTotal;
    
    if (isNaN(sueldoBase) || sueldoBase < 0 || isNaN(venta1) || venta1 < 0 || isNaN(venta2) || venta2 < 0 || isNaN(venta3) || venta3 < 0) {
        alert("Por favor, ingrese una cantidad válida");
    } else {
        document.getElementById('resultado').innerText = `Comisiones Totales: $${comisionTotal.toFixed(2)}\nSueldo Total: $${sueldoTotal.toFixed(2)}`;
    }
}

// Ejercicio 3
function calcularDescuento() {
    const total = parseFloat(document.getElementById('total').value);
    const descuento = total * 0.15;
    const totalAPagar = total - descuento;

    if (isNaN(total) || total < 0) {
        alert("Por favor, ingresa una cantidad válida");
    }
    document.getElementById('resultado').innerText = `Total a pagar: $${totalAPagar.toFixed(2)}`;
}

// Ejercicio 4
function calcularCalificacion() {
    const cal1 = parseFloat(document.getElementById('cal1').value);
    const cal2 = parseFloat(document.getElementById('cal2').value);
    const cal3 = parseFloat(document.getElementById('cal3').value);
    const examen = parseFloat(document.getElementById('examen').value);
    const trabajo = parseFloat(document.getElementById('trabajo').value);
    
    const promedioParciales = (cal1 + cal2 + cal3) / 3;
    const calificacionFinal = (promedioParciales * 0.55) + (examen * 0.30) + (trabajo * 0.15);

    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3) || isNaN(examen) || isNaN(trabajo)) {
        alert("Por favor, ingresa una calificación de caracter numérico");
    } else if (cal1 < 0 || cal1 > 10 || cal2 < 0 || cal2 > 10 || cal3 < 0 || cal3 > 10 || examen < 0 || examen > 10 || examen < 0 || examen > 10 ) {
        alert("Por favor, ingresa una calificación válida");
    } else {
        document.getElementById('resultado').innerText = `Calificación Final: ${calificacionFinal.toFixed(2)}`;
    }  
}

// Ehercicio 5
function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    // Ajustar si no ha llegado el cumpleaños este año
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    
    document.getElementById('resultado').innerText = `Edad: ${edad} años`;
}

// Ejercicio 6
function palabrasANumeros(arr) {
    const numeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    return arr.map(palabra => numeros[palabra] !== undefined ? numeros[palabra] : -1);
}

function traducirPalabras() {
    const input = document.getElementById('palabras').value;
    const palabras = input.split(',').map(p => p.trim());
    const resultado = palabrasANumeros(palabras);
    document.getElementById('resultado').innerText = `Resultado: [${resultado.join(', ')}]`;
}