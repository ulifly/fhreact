
import { describe, test, expect } from '@jest/globals';
import { getSaludo } from '../../../counter-app/src/base-pruebas/02-template-string';

describe ('Pruebas en el archivo 02-template-string.test.js', () => {
    test('Prueba en el método getSaludo', () => {
        const nombre = 'Ulises';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola Ulises');
    });
    
 
});