# Diagnostic Libre & Apaisée : intégration dans Systeme.io

Trois blocs à coller dans des éléments « Code HTML » (ou « Raw HTML »), un par page du tunnel.

| Étape du tunnel | Fichier | Ce qu'il faut modifier |
|---|---|---|
| 1. Page du diagnostic (page personnalisée) | `1-diagnostic.html` | `PAGE_CAPTURE` = l'adresse de la page 2 |
| 2. Page de capture (formulaire natif : prénom, e-mail, case de consentement) | `2-capture-option.html` (optionnel) | rien, si le champ personnalisé s'appelle `diagnostic` |
| 3. Page de remerciement = résultats | `3-resultats.html` | `LIEN_RDV` (réservation de l'appel) et `PAGE_DIAGNOSTIC` (adresse de la page 1) |

Fonctionnement : le diagnostic calcule les scores, les garde dans le navigateur (localStorage), envoie vers la page de capture, puis la page de remerciement affiche les résultats.
Les trois pages doivent être sur le même domaine (votre sous-domaine systeme.io ou votre domaine perso), sinon les résultats ne sont pas retrouvés.

Sur la page de capture, ajoutez une case de consentement : les réponses concernent la santé (RGPD).
