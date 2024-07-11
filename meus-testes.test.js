const isEven = require('./index')

test('Este teste deve verificar se um número é par', () => {
    const entrada = 2
    const saida_esperada = true
    expect(isEven(entrada)).toBe(saida_esperada)
})

test('Este teste deve verificar se um número é par e falhar', () => {
    const entrada = 1
    const saida_esperada = true
    expect(isEven(entrada)).toEqual(saida_esperada)
})

test('Este teste deve verificar se a área está certa', () => {
    const entrada = {
        altura: 10,
        largura: 20,
        raio: null
    }
    const saida_esperada_quadrado = 200
    const saida_esperada_triangulo = 100
    expect(isEven(entrada, 'quadrado')).toEqual(saida_esperada_quadrado)
    expect(isEven(entrada, 'triangulo')).toEqual(saida_esperada_triangulo)
})

test('Este teste deve verificar se a área do círculo está certa', () => {
    const entrada = {
        altura: 10,
        largura: 20,
        raio: 5
    }
    const saida_esperada_circulo = null
    expect(isEven(entrada, 'quadrado')).toEqual(saida_esperada_circulo)
})

test('Este teste deve verificar se for enviado um objeto errado', () => {
    const dimensões = {
        altura: 10,
        largura: 20,
        raio: 5
    }
    const formato = 'hexagono'
    const saida_esperada = 'não trabalhamos com esse objeto'
    expect(isEven(dimensões, formato)).toEqual(saida_esperada)
})

