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
3. **Formules** — section « Les formules » : ajuste le contenu de chaque formule. Aucun tarif n'est affiché : ils sont annoncés pendant l'appel découverte. Si tu veux les afficher un jour, ajoute un `<p class="price">` dans chaque `<article class="plan">` et le style correspondant.
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

## Couleurs — nuancier Kozellia

Définies en haut de `css/styles.css` (variables `:root`). Toute la charte tient sur un
seul axe chaud crème → bordeaux : aucun blanc pur, aucun noir pur.

| Variable | Valeur | Rôle |
|---|---|---|
| `--papier` | `#FBF4EA` | Fond de page, respiration |
| `--creme` | `#F5E3D0` | Fond de marque, sections alternées |
| `--sable` | `#EBD6C0` | Cartes, séparations, survol |
| `--brique` | `#B8352A` | États actifs, alertes douces |
| `--rouge` | `#921F15` | Signature, appels à l'action |
| `--bordeaux` | `#6E1710` | Texte dense, sections foncées, pied de page |

Trois valeurs dérivées complètent l'axe pour le texte, avec des contrastes conformes
au niveau AA sur fond `--papier` :

| Variable | Valeur | Contraste | Rôle |
|---|---|---|---|
| `--ligne` | `#E3CDB4` | — | Filets de séparation |
| `--encre-mid` | `#6B5145` | 6,66:1 | Texte courant secondaire |
| `--encre-soft` | `#7E6153` | 5,17:1 | Mentions, étiquettes |
| `--clair` | `#D9BCA4` | 6,51:1 sur bordeaux | Texte sur fond foncé |

Le rouge signature n'apparaît qu'à trois endroits : les appels à l'action, la formule
phare et les numéros d'étapes. C'est ce qui lui garde sa valeur.

## Bilan Vitalité (systeme.io)

Le dossier `bilan-vitalite/` contient le guide de montage du questionnaire « Bilan Vitalité »
sur systeme.io : tags, pages, 20 questions, workflows, emails de résultat, fiches programme et recette.
Voir `bilan-vitalite/GUIDE-SYSTEME-IO.md`.
