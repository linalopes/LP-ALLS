'use strict';

const userInfoForm = document.getElementById('user-info-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const addressInput = document.getElementById('address-input');
const cepInput = document.getElementById('cep-input');
const cityInput = document.getElementById('city-input');
const cpfInput = document.getElementById('cpf-input');
userInfoForm.addEventListener('submit', preventFormSubmit);

const regularForm = document.getElementById('regular-form');
const regularInput = document.getElementById('regular-input');
regularForm.addEventListener('submit', preventFormSubmit);

const recordingForm = document.getElementById('recording-form');
const recordingInput = document.getElementById('recording-input');
recordingForm.addEventListener('submit', preventFormSubmit);

const vipForm = document.getElementById('vip-form');
const vipInput = document.getElementById('vip-input');
vipForm.addEventListener('submit', preventFormSubmit);

function preventFormSubmit(e) {
  e.preventDefault();
  return;
}

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', handleSubmit);

function handleSubmit() {
  const payer = {
    name: nameInput.value,
    email: emailInput.value,
    identification: {
      type: 'CPF',
      number: cpfInput.value
    },
    address: {
      street_name: addressInput.value,
      zip_code: cepInput.value
    },
    // city: cityInput.value
  }

  const items = [];

  if (+regularInput.value) {
    items.push({
      title: 'Early Bird',
      unit_price: 1650,
      quantity: +regularInput.value,
      currency_id: 'BRL',
    });
  }

  if (+recordingInput.value) {
    items.push({
      title: 'Gravação',
      unit_price: 500,
      quantity: +recordingInput.value,
      currency_id: 'BRL',
    });
  }

  if (+vipInput.value) {
    items.push({
      title: 'VIP',
      unit_price: 2500,
      quantity: +vipInput.value,
      currency_id: 'BRL',
    });
  }

  console.log({
    payer,
    items,
  });

  allsCheckout(payer, items);
}
