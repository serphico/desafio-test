const axios = require('axios');


const getAxios = async() => {
    try {
        await axios.get('http://localhost:8080/product')
        .then( res => console.log(res.data))
        
    } catch (error) {
        console.log( `error: ${error}`)
    }
}

const getByIdAxios = async() => {
    try {
        await axios.get('http://localhost:8080/product/62659a4c9fc6bb67a577d7e4')
        .then( res => console.log(res.data))
        
    } catch (error) {
        console.log( `error: ${error}`)
    }
}

const postAxios = async() => {
    try {
        await axios.post('http://localhost:8080/product',{
            title: 'Samsung A52',
            price: 80000,
            description: 'Celular más Copado',
            photo: 'celular2.png',
            category: 'celular'
        })
        .then( res => console.log(res))
        
    } catch (error) {
        console.log( `error: ${error}`)
    }
}

const deleteAxios = async() => {
    try {
        await axios.delete('http://localhost:8080/product')
        .then( res => console.log(res.data))
        
    } catch (error) {
        console.log( `error: ${error}`)
    }
}

const deleteByIdAxios = async() => {
    try {
        await axios.delete('http://localhost:8080/product/62659a4c9fc6bb67a577d7e4')
        .then( res => console.log(res))
        
    } catch (error) {
        console.log( `error: ${error}`)
    }
}

const putAxios = async() => {
    try {
        await axios.put('http://localhost:8080/product/62659a4c9fc6bb67a577d7e4',{
            title: 'Samsung A52',
            price: 85000,
            description: 'Celular requete Copado',
            photo: 'celular2.png',
            category: 'celular'
        })
        .then( res => console.log(res.data))
        
    } catch (error) {
        console.log( `error: ${error}`)
    }
}

postAxios();