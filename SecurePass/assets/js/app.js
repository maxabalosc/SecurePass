// assets/js/app.js

import { applyTranslations, setLang, getLang } from './i18n.js';
import { initRegisterPage, initLoginPage, initHomePage } from './auth.js';
import { initPasskeysPage } from './passkeys.js';
import { initSettingsPage, passwordMeetsRequirements } from './settings.js';
import { $ } from './utils.js';

// expose password validator 
window.passwordMeetsRequirements = passwordMeetsRequirements;

document.addEventListener('DOMContentLoaded', () => {
  // language selects
  document.querySelectorAll('#langSelect').forEach(sel=>{
    sel.value = getLang();
    sel.addEventListener('change', (e)=> { setLang(e.target.value); });
  });

  applyTranslations();

  const page = document.body.dataset.page || '';

  // brand click behaviour
  const brandTitle = document.querySelector('.brand-title');
  if(brandTitle) brandTitle.addEventListener('click', ()=> {
    if(localStorage.getItem('securepass_user')) location.href = 'home.html';
    else location.href = 'register.html';
  });

  // tutorial modal buttons
  const btnGotIt = $('tutorialGotIt'); if(btnGotIt) btnGotIt.addEventListener('click', ()=> { const m = $('tutorialModal'); if(m) m.classList.add('hidden'); });
  const btnDontShow = $('tutorialDontShow'); if(btnDontShow) btnDontShow.addEventListener('click', ()=> { localStorage.setItem('securepass_tutorial_hide','true'); const m = $('tutorialModal'); if(m) m.classList.add('hidden'); });

  // route initialization
  if(page === 'register') initRegisterPage();
  if(page === 'login') initLoginPage();
  if(page === 'home') initHomePage();
  if(page === 'passkeys') initPasskeysPage();
  if(page === 'settings') initSettingsPage();
});
