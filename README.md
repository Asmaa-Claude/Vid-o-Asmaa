# Business Simple — site vitrine

Site vitrine d'une page présentant l'accompagnement **Business Simple** : aider les femmes
à développer leur activité en ligne grâce à un système de vente simple.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | La page principale (hero, problème, méthode, accompagnement, pour qui, résultats, formules, FAQ, contact) |
| `mentions-legales.html` | Mentions légales + politique de confidentialité (à compléter) |
| `css/styles.css` | Toute la mise en forme |
| `js/main.js` | Menu mobile, apparitions au défilement, FAQ, formulaire |

Site 100 % statique : aucune dépendance, aucune étape de build.

## Voir le site en local

Ouvre `index.html` dans ton navigateur, ou lance un petit serveur :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## À personnaliser avant la mise en ligne

1. **Adresse e-mail** — remplace `contact@business-simple.fr` dans `index.html` (section contact et lien direct) et dans `js/main.js` (constante `CONTACT_EMAIL`).
2. **Témoignages** — section « Résultats » d'`index.html` : remplace les blocs d'exemple par de vrais retours de clientes. Ne publie jamais de témoignage inventé.
3. **Tarifs** — section « Les formules » : ajuste les prix et le contenu de chaque formule, puis supprime la phrase « Les tarifs ci-dessous sont des exemples ».
4. **Mentions légales** — complète tous les champs entre crochets dans `mentions-legales.html`.
5. **Photo** — tu peux remplacer le visuel du hero (`.hero-visual`) par ta photo si tu en as une.

## Brancher le formulaire de contact

Par défaut, le formulaire ouvre le logiciel de messagerie de la visiteuse avec un message
pré-rempli. Pour recevoir les demandes automatiquement :

1. Crée un formulaire sur un service comme Formspree, Getform ou Tally.
2. Copie l'URL d'envoi fournie.
3. Dans `js/main.js`, renseigne la constante `FORM_ENDPOINT` avec cette URL.

Le script envoie alors les données en JSON et affiche un message de confirmation.

## Mise en ligne

N'importe quel hébergeur de site statique convient : GitHub Pages, Netlify, Vercel, ou un
hébergement classique par FTP. Il suffit de déposer les fichiers tels quels.

## Couleurs

Définies en haut de `css/styles.css` (variables `:root`) — change-les à un seul endroit
pour reskinner tout le site.

| Variable | Valeur | Usage |
|---|---|---|
| `--terra` | `#B85C38` | Couleur principale, boutons |
| `--gold` | `#C9963F` | Accents, badges |
| `--cream` | `#FBF7F2` | Fond général |
| `--sand` | `#F1E7DB` | Sections alternées |
| `--ink` | `#221C18` | Texte et sections foncées |
