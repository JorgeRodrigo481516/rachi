import './styles/sass/main.scss';

import './assets/images/favicon.svg';
import './assets/images/logo.svg';
import './assets/images/person-plus.svg';
import './assets/images/carbon-security.svg';
import './assets/images/face.svg';
import './assets/images/google-play-logo.svg';
import './assets/images/app-store-logo.svg';

const test = () => {
  const elsCardPreferido = document.getElementsByClassName('card--preferido');
  const lengthElsCardPreferido = elsCardPreferido.length;

  for (let i = 0; i < lengthElsCardPreferido; i += 1) {
    const elButton = document.createElement('span');
    elButton.classList.add('card__preferido');
    elButton.textContent = 'Preferido';

    elsCardPreferido[i].firstElementChild.insertAdjacentElement(
      'afterend',
      elButton
    );
  }
};

document.getElementsByTagName('body')[0].onload = test;
