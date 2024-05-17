// script.js

document.addEventListener("DOMContentLoaded", function() {
    const { jsPDF } = window.jspdf;

    window.exportPDF = function() {
        const arroz = document.getElementById('arroz').value || 0;
        const feijao = document.getElementById('feijao').value || 0;
        const farinha = document.getElementById('farinha').value || 0;
        const sardinha = document.getElementById('sardinha').value || 0;
        const acucar = document.getElementById('acucar').value || 0;

        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text('Registro de Quantidades', 10, 10);

        doc.setFontSize(12);
        doc.text(`Arroz: ${arroz}`, 10, 30);
        doc.text(`Feijão: ${feijao}`, 10, 40);
        doc.text(`Farinha: ${farinha}`, 10, 50);
        doc.text(`Sardinha: ${sardinha}`, 10, 60);
        doc.text(`Açúcar: ${acucar}`, 10, 70);

        doc.save('registro_quantidades.pdf');
    };
});
