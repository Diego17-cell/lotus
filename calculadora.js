function calcular() {
    const finca = document.getElementById("finca").value;
    const personas = parseInt(document.getElementById("personas").value);
    const mensaje = document.getElementById("mensaje");
    const resultadoBruto = document.getElementById("resultadoBruto");
    const resultadoIVA = document.getElementById("resultadoIVA");

    
    mensaje.textContent = "";
    resultadoBruto.textContent = "";
    resultadoIVA.textContent = "";

    
    if (isNaN(personas) || personas <= 0) {
        mensaje.textContent = "Por favor, ingresa una cantidad válida de personas.";
        return;
    }

    
    const fincas = {
        Flower: { capacidad: 10, precio: 37 },
        Zen: { capacidad: 8, precio: 40 },
        Nirvana: { capacidad: 12, precio: 35 },
        Mandala: { capacidad: 15, precio: 30 }
    };

    const fincaSeleccionada = fincas[finca];

    
    if (personas > fincaSeleccionada.capacidad) {
        mensaje.textContent = `La cantidad de personas excede la capacidad máxima de la finca ${finca} (${fincaSeleccionada.capacidad} personas).`;
        return;
    }

    
    const valorBruto = personas * fincaSeleccionada.precio;
    const valorConIVA = valorBruto * 1.19;

    
    resultadoBruto.textContent = `Valor bruto: $${valorBruto.toFixed(2)} USD.`;
    resultadoIVA.textContent = `Valor con IVA (19%): $${valorConIVA.toFixed(2)} USD.`;
}

function limpiarCampos() {
    
    document.getElementById("finca").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("mensaje").textContent = "";
    document.getElementById("resultadoBruto").textContent = "";
    document.getElementById("resultadoIVA").textContent = "";
}

