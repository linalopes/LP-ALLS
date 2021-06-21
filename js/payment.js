'use strict';

const mp = new MercadoPago('TEST-ddbc6460-0b96-4331-a4ed-91c0e5f8534a', {
  locale: 'pt-BR'
});

async function allsCheckout(payer, items) {
  try {
    const body = {
      payer,
      items,
    };

    const response = await fetch('https://sqncikjun8.execute-api.us-east-1.amazonaws.com/payments/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const { id } = await response.json();

    // config and open Mercado Pago checkout
    const checkout = mp.checkout({
      preference: { id },
      autoOpen: true,
    });
  } catch(error) {
    console.log(error);
    window.alert('Erro');
  }
}
