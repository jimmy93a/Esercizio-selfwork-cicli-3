

// Selfwork cicli 3

let choose_beverage = prompt('Scegli la tua bevanda: \n 1 - Acqua \n 2 - Coca Cola \n 3 - Birra');

while (choose_beverage != 1 && choose_beverage !=2 && choose_beverage !=3){

    choose_beverage = prompt('Scegli la tua bevanda: \n 1 - Acqua \n 2 - Coca Cola \n 3 - Birra');
    
    
}


if(choose_beverage == 1){
    console.log('E’ stata selezionata l’acqua');
    
}else if(choose_beverage == 2){
    console.log('E’ stata selezionata coca cola');

}else if(choose_beverage == 3){
    console.log('E’ stata selezionata birra');

}