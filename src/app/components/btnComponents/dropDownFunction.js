export const dropDownFunction = (names, state, closeClass, openClass)=>{
        if(names === 'btnBurger' && state){
            return openClass
        }else if(names !=='btnBurger' && !state){
            return closeClass
        } else if (names ==='btnBurger' && !state){
            return closeClass
        } else if (names !=='btnBurger' && state){
            return closeClass
        }else {
            return closeClass
        }
}


export default dropDownFunction;