import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")


describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories =  jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    beforeEach(() => {
        
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    })

    test('Deberia de mostrar correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('debe de buscar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe( value );

    })

    test('No debe de postear la informacion onSubmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
        
    })
    
    
    
})
