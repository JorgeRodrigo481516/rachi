import './styles/sass/main.scss';

import './assets/images/favicon.svg';
import './assets/images/logo.svg';
import './assets/images/person-plus.svg';
import './assets/images/carbon-security.svg';
import './assets/images/face.svg';
import './assets/images/google-play-logo.svg';
import './assets/images/app-store-logo.svg';
import './assets/images/icons-best-seller.svg';

import { setPreferidos } from './utilities/setPreferidos';

document.getElementsByTagName('body')[0].onload = setPreferidos;
