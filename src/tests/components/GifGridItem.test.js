import React from 'react';
import { shallow } from 'enzyme';
import "@testing-library/jest-dom";
import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba del componente GifGridItem', () => {
    
            const title = "Soy un Titulo";
            const url = "http://localhost/algo.jpg";
    
            const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('Debe mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
 
    })
    
    test('<debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
    })

    test('debe de obtener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        //console.log( img.props('img') );

        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt')).toBe(title);
    })

    test('debe tener animate__fadeIn', () => {

    const div = wrapper.find('div');

    //expect( div.prop('className').split(" ").slice(2, 3).toString() ).toBe( 'animate__fadeIn' );
    expect( div.prop('className').includes('animate__fadeIn')).toBe( true );

    })
    
    
    
    
})

