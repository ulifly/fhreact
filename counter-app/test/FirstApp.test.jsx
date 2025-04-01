import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en el archivo FirstApp.test.jsx', () => {
    test('debe coincidir con el snapshot', () => {
        const nombre = 'Goku';
        const { container } = render(<FirstApp nombre="{nombre}"/>);

        expect(container).toMatchSnapshot();
        console.log()
        
    })
});
