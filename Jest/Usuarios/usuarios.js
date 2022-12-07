module.exports = {
    diaria: diarias =>  {
        if (Math.min(...diarias)) {
        return diarias.reduce((acc, diaria) => {
            acc += diaria;
            return acc;
        }, 0)
    
    } return 0;
}

}