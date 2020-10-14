import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")


describe('Pruebas en el componente <AddCategory />', () => {

    
    const setCategories =  jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>);
    const value = 'Hola Mundo';

    beforeEach(() => {
        
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    })

    test('Deberia de mostrar correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('debe de buscar la caja de texto', () => {

        const input = wrapper.find('input');

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe( value );

    })

    test('No debe de postear la informacion onSubmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
        
    })

    test('Debe de llamar al serCategories y limpiar la caja de texto', () => {

        wrapper.find('input').simulate('change', { target: { value }});
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( wrapper.find('input').prop('value') ).toBe('');
        
    })
    
    
    
    
})
