import { describe, test, expect } from '@jest/globals';
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones'


describe('Pruebas en el archivo 05-funciones.test.js', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe de retornar un objeto con el nombre', () => {
        const nombre = 'Ulises';

        const user = getUsuarioActivo(nombre);
        expect (user).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        });
        
    })
});