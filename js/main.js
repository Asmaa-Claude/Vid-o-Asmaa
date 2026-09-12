/* ============================================================
   Business Simple — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---- Adresse de réception du formulaire -----------------
     Remplace cette valeur par ta vraie adresse e-mail.
     Pour un envoi automatique (sans ouvrir le logiciel de mail),
     renseigne FORM_ENDPOINT avec l'URL d'un service type
     Formspree / Tally / Getform. Sinon, laisse la chaîne vide :
     le formulaire prépare alors un e-mail pré-rempli.
  --------------------------------------------------------- */
  var CONTACT_EMAIL  = 'contact@business-simple.fr';
  var FORM_ENDPOINT  = '';

  /* ---- Menu mobile ---- */
  var burger = document.getElementById('burger');
  var nav    = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  /* ---- Ombre de l'en-tête au défilement ---- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Une seule question de FAQ ouverte à la fois ---- */
  var faqs = document.querySelectorAll('.faq');
  faqs.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqs.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ---- Année courante dans le pied de page ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---- Formulaire de contact ---- */
  var form   = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  function setStatus(message, type) {
    if (!status) return;
    status.textContent = message;
    status.className = 'form-status' + (type ? ' ' + type : '');
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = {
        prenom:   form.prenom.value.trim(),
        email:    form.email.value.trim(),
        activite: form.activite.value.trim(),
        etape:    form.etape.value,
        message:  form.message.value.trim()
      };

      /* Validation */
      var invalid = null;
      if (!data.prenom) invalid = form.prenom;
      else if (!isValidEmail(data.email)) invalid = form.email;
      else if (!data.message) invalid = form.message;

      ['prenom', 'email', 'message'].forEach(function (name) {
        form[name].removeAttribute('aria-invalid');
      });

      if (invalid) {
        invalid.setAttribute('aria-invalid', 'true');
        invalid.focus();
        setStatus('Merci de remplir correctement les champs obligatoires.', 'error');
        return;
      }

      var button = form.querySelector('button[type="submit"]');

      /* Envoi via un service externe si configuré */
      if (FORM_ENDPOINT) {
        button.disabled = true;
        setStatus('Envoi en cours…', '');

        fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
          .then(function (res) {
            if (!res.ok) throw new Error('Réponse ' + res.status);
            form.reset();
            setStatus('Merci ' + data.prenom + ' ! Ta demande est bien partie, je te réponds sous 48 h ouvrées.', 'ok');
          })
          .catch(function () {
            setStatus('L’envoi a échoué. Écris-moi directement à ' + CONTACT_EMAIL + '.', 'error');
          })
          .then(function () { button.disabled = false; });
        return;
      }

      /* Repli : e-mail pré-rempli */
      var body =
        'Prénom : ' + data.prenom + '\n' +
        'E-mail : ' + data.email + '\n' +
        'Activité : ' + (data.activite || 'non précisée') + '\n' +
        'Étape : ' + data.etape + '\n\n' +
        'Blocage principal :\n' + data.message + '\n';

      var href = 'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent('Appel découverte — ' + data.prenom) +
        '&body=' + encodeURIComponent(body);

      window.location.href = href;
      setStatus('Ton logiciel de messagerie s’ouvre avec le message pré-rempli. Il ne reste plus qu’à l’envoyer.', 'ok');
    });
  }
})();
