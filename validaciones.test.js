const validaPar = require('./validaciones')

test('email edwin@gmail.com -> true', ()=>{
    expect(validaPar.isValidEstructure('edwin@gmail.com')).toBe(true)
});


test('email 1 -> false', ()=>{
    expect(validaPar.isValidEstructure('1')).toBe(true)
});

test('numero 25 -> No es par',()=>{
    expect(validaPar.isValidPar(25)).toBe('No es par')
});

test('numero 2 -> Es par',()=>{
    expect(validaPar.isValidPar(2)).toBe('Es par')
});