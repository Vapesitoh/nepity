// index.js
const express = require('express');
const path = require('path');
const app = express();

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal: envía el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Otra ruta: ejemplo
app.get('/about', (req, res) => {
    res.send('Acerca de nosotros');
});
// Servir archivos estáticos JS
app.use('/js', express.static(path.join(__dirname, 'public/js')));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
