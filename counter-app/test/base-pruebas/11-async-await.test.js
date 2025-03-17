import { describe, test, expect } from '@jest/globals';
import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas con async-await y Fetch', () => {
    test('getImagen debe de retornar el url de la imagen', async() => {
        const url = await getImagen();
        expect(url.includes('http')).toBe(true);
        console.log(url);
    });
});