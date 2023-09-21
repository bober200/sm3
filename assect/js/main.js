let price = prompt('Стоимость товара');
let money = prompt('Сколько у тебя денег');

if(price == money){
    alert('Покупка совершена');
}else{
    if(price > money){
       let x = price - money;
       alert('Не хватает - '+ x);
    }else{
        let x = money - price;
        alert('Покупка совершена. Ваша сдача - '+ x);
    }
}