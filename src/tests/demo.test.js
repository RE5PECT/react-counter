describe('Pruebas en el archivo demo.test.js', () => {
  test('Should be equal strings', () => {
    // Inicializacion
    const mensaje = 'Hola Mundo';

    // Estimulo
    const mensaje2 = 'Hola Mundo';

    // Observar
    expect(mensaje).toBe(mensaje2);
  });
});
