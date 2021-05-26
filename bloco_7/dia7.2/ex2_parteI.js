const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  //"Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."

const orderModifier = (order) => {
    let nome =order.name;

    nome = 'Luiz Silva';

    let valorDevido = order.payment.total
    valorDevido = 'R$ 50,00';

    let novasPizzas = { 
      muzzarela: {
        amount: 1,
        price: 25,},
      calabresa: {
        amount: 1,
        price: 25,
      },
    }
    
    let saboresPizza = order.order.pizza;

    Object.assign(saboresPizza, novasPizzas);

    let chavesPizzas = Object.keys(novasPizzas);

    let drink = order.order.drinks.coke.type;
    
    let fraseFinal2 = `Olá ${nome}, o total do seu pedido de ${chavesPizzas[0]}, ${chavesPizzas[1]} e ${drink} é de ${valorDevido}.`
    
    console.log(fraseFinal2)
};
  
orderModifier(order);