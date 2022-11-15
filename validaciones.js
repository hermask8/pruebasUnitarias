class Valida{

    isValidEstructure(entrada){
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return re.test(String(entrada).toLowerCase());
    }

    isValidPar(entrada){
        if((entrada%2)==0)
        {
            return 'Es par'
        }
        else
        {
            return 'No es par'
        }
    }
}

module.exports = new Valida();