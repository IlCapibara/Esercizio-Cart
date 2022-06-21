/*
    Per una nota App di food delivery, ci viene richiesto di 
    implementare alcune funzionalità per la gestione del carrello.
*/


//prodotti attualmente presenti nel carrello dell'utente
const productsInCart = [
    {id: 324234, category:0, quantity:1, title: 'Margherita', description: "Pomodoro, mozzarella e basilico", ingredients: ['pomodoro','mozzarella','basilico'], price: 6.5},
    {id: 098394, category:0, quantity:1, title: 'Calzone Classico', description: "Ripieno di Pomodoro, mozzarella e prosciutto cotto",ingredients: ['pomodoro','mozzarella','prosciutto cotto'], price: 7.0},
    {id: 432432, category:4, quantity:1, title: 'Coca Cola Zero (33CL)', description: "", price: 3.0},
    {id: 564564, category:0, quantity:1, title: 'Salamino', description: "Pomodoro, mozzarella e salamino piccante", ingredients: ['pomodoro','mozzarella','salamino'], price: 7.5},
        {id: 564564, category:0, quantity:1, title: 'Salamino', description: "Mozzarella, salsiccia, patate al forno", ingredients: ['mozzarella','salsiccia','patate al forno'], price: 7.5},
    {id: 333445, category:4, quantity:1, title: 'Acqua Naturale (1L)', description: "", price: 2},
    {id: 656765, category:3, quantity:3, title: 'Cheesecake Cioccolato', description: "Dolce a base di formaggio fresco e topping al cioccolato", price: 5},
]

//array statico di oggetti che contiene tutte le categorie presenti nell'app
const categories = [
    {id:0, name: "pizze"},
    {id:1, name: "panini"},
    {id:2, name: "sushi"},
    {id:3, name: "dessert"},
    {id:4, name: "bevande"},
]; 

//FUNZIONI DA IMPLEMENTARE:

/* 
    ---------------------------------------
    getTotalAmount: restituisce il prezzo finale che l'utente dovrà pagare al checkout
    ---------------------------------------
    
*/

const getTotalAmount=()=>{
    let sum=0;
	for(product of productsInCart){
  	sum += product.price*product.quantity;    
  } 
  return sum;
}

console.log(getTotalAmount());
/* 
    ---------------------------------------
    getCategoryCode: prende come parametro il nome di una categoria e ne restituisce l'id
    ---------------------------------------
    */
const getCategoryCode=(categoryName)=>{
    return categories.find(category => category.name===categoryName)?.id;
}
console.log(getCategoryCode('pizze'));
/*

    ---------------------------------------
    getCategoryCount: prende come parametro il nome di una categoria e restituisce il numero di prodotti presenti per questa
    ---------------------------------------
*/
const getCategoryCount=(categoryName)=>{
    let code = getCategoryCode(categoryName);
    return productsInCart.filter(product=>product.category===code)
}
console.log(getCategoryCount('pizze'))
/*
    ---------------------------------------
    removeFromCart: prende l'id di un prodotto e ne rimuove una unità dal carrello. Se quantity diventa 0, rimuove il prodotto dall'array
    ---------------------------------------
*/
removeFromCart = (id) =>{
    let cart = productsInCart.map(product =>{
        if(product.id===id, product.quantity>=2){
            return {...product, quantity : product.quantity - 1};
        }

        return product;
    });
    let index = cart.findIndex(item => item.id === id);
    if(cart.find(item => item.id===id).quantity = 1){
        cart.splice(index);
    }
    return cart;
}

console.log(removeFromCart(333445));
/*
    ---------------------------------------
    printCart: stampa su console tutti i prodotti divisi per categoria. 

    formato richiesto:
        *** PIZZA ***
        - 1 x Margherita (Pomodoro, mozzarella e basilico) | 6.5€
        - 1 x Calzone classico (Ripieno di Pomodoro, mozzarella e prosciutto cotto) | 7€

        *** BEVANDE ***
        - 1 x Coca Cola Zero (33CL) | 3€

        *** TOTALE ***
        16.5€
    ---------------------------------------
*/
printCart = () =>{
    let pizze = productsInCart.filter(product => product.category === 0);
    let panini = productsInCart.filter(product => product.category === 1);
    let sushi = productsInCart.filter(product => product.category === 2);
    let dessert = productsInCart.filter(product => product.category === 3);
    let bevande = productsInCart.filter(product => product.category === 4);
    let totale= getTotalAmount();
    //PIZZE
    console.log('***PIZZE***');
    if(pizze.length===0){
        pizze.push('vuoto');
        console.log(pizze)
    }else{
        pizze.map(pizza=>{
            console.log(`${pizza.quantity} x ${pizza.title}(${pizza.ingredients}) | ${pizza.price}€`)
           })
    };
    //PANINI
    console.log('***PANINI***');
    if(panini.length===0){
        panini.push('vuoto');
        console.log(panini);
    }else{
        panini.map(panino=>{
            console.log(`${panino.quantity} x ${panino.title}(${panino.ingredients}) | ${panino.price}€`)
           })
    };
    //SUSHI
    console.log('***SUSHI***');
    if(sushi.length===0){
        sushi.push('vuoto');
    }else{
        sushi.map(susho=>{
            console.log(`${susho.quantity} x ${susho.title}(${susho.ingredients}) | ${susho.price}€`) //susho da oggi è il singolare di sushi
           })
    };
    //DESSERT
    console.log('***DESSERT***');
    if(dessert.length===0){
        dessert.push('vuoto');
        console.log(dessert);
    }else{
        dessert.map(dolce=>{
            console.log(`${dolce.quantity} x ${dolce.title}(${dolce.ingredients}) | ${dolce.price}€`)
           })
    };
    //BEVANDE
    console.log('***BEVANDE***');
    if(bevande.length===0){
        bevande.push('vuoto');
        console.log(bevande)
    }else{
        bevande.map(bevanda=>{
            console.log(`${bevanda.quantity} x ${bevanda.title}(${bevanda.ingredients}) | ${bevanda.price}€`)
           })
    };
    //TOTALE
    console.log('***TOTALE***');
    console.log(`€${totale}`)
};

printCart()
/*
    ---------------------------------------
    getPizzeBianche: Restituisce tutte le pizze bianche presenti nel carrello (pizze senza pomodoro)
    ---------------------------------------

*/
const getPizzeBianche = ()=> {
    let pizze = productsInCart.filter(product => product.category=0);
    let pizzeBianche=[];
    for(i=0; i<pizze.length; i++){
        if(!pizze[i].ingredients.includes('pomodoro')){
            pizzeBianche.push(pizze[i]);
        }
    }
    return pizzeBianche;
} //ho un problema con le pizze bianche 

console.log(getPizzeBianche());