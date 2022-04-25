const setPreferidos = () => {
  const elsCardPreferido = document.getElementsByClassName('card--preferido');
  const lengthElsCardPreferido = elsCardPreferido.length;

  for (let i = 0; i < lengthElsCardPreferido; i += 1) {
    const elBestSeller = document.createElement('img');
    elBestSeller.classList.add('card__best-seller');
    elBestSeller.src = 'icons-best-seller.svg';

    const elButton = document.createElement('span');
    elButton.classList.add('card__preferido');
    elButton.textContent = 'Preferido';

    elsCardPreferido[i].insertBefore(elBestSeller, elsCardPreferido[i].firstElementChild);
    
    elsCardPreferido[i].children[1].insertAdjacentElement(
      'afterend',
      elButton
    );
  }
};

export { setPreferidos };