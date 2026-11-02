# Questionnaire de diagnostic — Libre & Apaisée

**Pour :** Assia, infirmière · Libre & Apaisée
**Objectif :** comprendre la situation de chaque femme (stress, tabac, sucre), repérer celles qui sont prêtes à se faire accompagner, et les amener à réserver l'appel découverte gratuit de 20 minutes.
**Outil :** Systeme.io (tunnel de vente + formulaire + tags + règles d'automatisation)
**Durée pour la répondante :** 6 à 8 minutes, environ 25 questions (presque toutes en un clic).

Ton : vouvoiement, chaleureux, jamais culpabilisant. On évite « addiction au sucre », « volonté », « craquer » (en reproche), « détox ».

---

## 1. Comment le monter dans Systeme.io

Systeme.io ne calcule pas de score automatiquement. Le questionnaire repose donc sur trois éléments natifs, qui fonctionnent sur toutes les offres :

1. **Les champs personnalisés** (Paramètres → Champs personnalisés) : chaque réponse est enregistrée dans la fiche contact. Assia relit la fiche avant l'appel.
2. **Les tags** : certaines réponses ajoutent un tag (ex. `LA-stress-eleve`). Les tags servent à segmenter les e-mails et à repérer les profils prioritaires.
3. **Un tunnel en plusieurs pages** : une page = un bloc de questions. Cela fait moins peur qu'un long formulaire et augmente le taux de complétion.

### Structure du tunnel

| Étape du tunnel | Type de page Systeme.io | Contenu |
|---|---|---|
| 1. Accueil | Page de capture (optin) | Présentation + prénom + e-mail + consentement |
| 2. Votre stress | Page personnalisée avec formulaire | Bloc A |
| 3. Le tabac | Page personnalisée avec formulaire | Bloc B |
| 4. Le sucre | Page personnalisée avec formulaire | Bloc C |
| 5. Votre parcours | Page personnalisée avec formulaire | Bloc D |
| 6. Votre projet | Page personnalisée avec formulaire | Bloc E |
| 7. Résultat | Page de remerciement | Message + bouton de réservation de l'appel |

> Pourquoi demander l'e-mail dès la page 1 : si la personne abandonne en cours de route, elle est quand même dans la liste et peut recevoir une relance (« Vous n'avez pas terminé votre diagnostic »).

### Types de champs à utiliser

- **Liste déroulante (select)** : pour toutes les questions à choix unique. C'est le format le plus fiable dans Systeme.io et le plus simple à lire dans la fiche contact.
- **Texte** : pour les réponses ouvertes courtes.
- **Zone de texte (textarea)** si votre éditeur la propose ; sinon un champ texte suffit.
- Les questions « plusieurs réponses possibles » sont transformées ici en **choix unique « le plus fréquent »** ou en **2 listes déroulantes** : les cases à cocher multiples ne s'enregistrent pas bien dans une fiche contact.

### Tags et règles d'automatisation

Dans **Automatisations → Règles**, créez une règle par réponse décisive :
**Déclencheur :** « Formulaire soumis » (page concernée) → **Condition** : champ = valeur → **Action :** ajouter le tag.
Si votre offre ne permet pas les conditions sur les champs, vous pouvez à la place créer une page par bloc avec **un formulaire par réponse décisive** — mais c'est plus lourd ; la lecture de la fiche contact avant l'appel reste la méthode principale.

Tags proposés (préfixe `LA-` pour Libre & Apaisée) :

| Tag | Ajouté quand… |
|---|---|
| `LA-diagnostic-commence` | Page 1 soumise |
| `LA-diagnostic-termine` | Page 6 soumise |
| `LA-stress-eleve` | Q5 ≥ 7/10 |
| `LA-tabac-forte-dependance` | Q9 = « Dans les 5 minutes » ou Q8 = « Plus de 20 » |
| `LA-sucre-emotionnel` | Q13 = « Presque tous les jours » ou « Plusieurs fois par semaine » |
| `LA-peur-prise-de-poids` | Q19 = « Prendre du poids » |
| `LA-prete` | Q21 ≥ 8/10 **et** Q22 = « Dans les prochaines semaines » ou « Le plus vite possible » |
| `LA-plusieurs-tentatives` | Q16 = « 2 ou 3 fois » ou « Plus de 3 fois » |
| `LA-a-orienter` | Q24 ≠ « Non, rien de tout cela » |
| `LA-pref-cabinet` / `LA-pref-en-ligne` | selon Q23 |

---

## 2. Le questionnaire

Les identifiants entre crochets (`[la_stress_niveau]`) sont les noms à donner aux champs personnalisés.

### Page 1 — Accueil

**Titre :** Et si, pour arrêter le tabac et le sucre, on commençait par votre stress ?

**Texte :**
> Bonjour, je suis Assia, infirmière. J'accompagne les femmes qui veulent se libérer du tabac et du sucre, en commençant par ce qui les déclenche : le stress.
>
> Ce diagnostic prend environ 6 minutes. Il n'y a pas de bonne ou de mauvaise réponse, et aucun jugement : plus vous êtes honnête, plus je pourrai vous orienter justement.
>
> À la fin, vous découvrirez votre profil et vous pourrez réserver un appel gratuit de 20 minutes avec moi.

**Champs :**

1. **Votre prénom** — champ natif *Prénom* (obligatoire)
2. **Votre adresse e-mail** — champ natif *E-mail* (obligatoire)
3. **Votre numéro de téléphone** (facultatif, pour l'appel) — champ natif *Téléphone*
4. **Votre âge** `[la_age]` — liste déroulante :
   - Moins de 30 ans
   - 30 – 39 ans
   - 40 – 49 ans
   - 50 – 59 ans
   - 60 ans et plus

**Case de consentement (obligatoire) :**
> ☐ J'accepte que les réponses à ce questionnaire, qui concernent ma santé, soient utilisées par Assia, infirmière, uniquement pour préparer notre échange et m'envoyer des informations liées à l'accompagnement. Je peux demander leur suppression à tout moment. [lien vers la politique de confidentialité]

**Bouton :** Je commence mon diagnostic

---

### Page 2 — Bloc A : Votre stress

*Intro :* Commençons par le plus important : votre stress au quotidien.

**Q5. Sur une échelle de 1 à 10, à combien évaluez-vous votre niveau de stress ces dernières semaines ?** `[la_stress_niveau]`
Liste déroulante : 1 (très calme) · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9 · 10 (je suis débordée)

**Q6. Qu'est-ce qui vous pèse le plus en ce moment ?** `[la_stress_source]`
- Mon travail
- Ma famille / mes enfants
- Mon couple
- L'argent
- Ma santé
- Tout en même temps, la charge mentale
- Autre

**Q7. Quand le stress monte, que se passe-t-il le plus souvent ?** `[la_stress_reaction]`
- J'allume une cigarette
- Je mange quelque chose de sucré
- Les deux : cigarette et sucre
- Je m'énerve ou je pleure
- Je garde tout pour moi
- J'ai déjà des techniques qui m'aident (respiration, sport…)

**Q7 bis. Comment dormez-vous ?** `[la_sommeil]`
- Bien, je me sens reposée
- Moyennement, je me réveille souvent fatiguée
- Mal, j'ai du mal à m'endormir ou je me réveille la nuit

---

### Page 3 — Bloc B : Le tabac

*Intro :* Parlons maintenant de la cigarette. Ces deux premières questions sont celles qu'utilisent les soignants pour évaluer la dépendance à la nicotine.

**Q8. Combien de cigarettes fumez-vous par jour ?** `[la_tabac_quantite]`
- Je ne fume pas / plus
- Moins de 10
- 11 à 20
- 21 à 30
- Plus de 30

**Q9. Combien de temps après votre réveil fumez-vous votre première cigarette ?** `[la_tabac_premiere]`
- Dans les 5 minutes
- Entre 6 et 30 minutes
- Entre 31 et 60 minutes
- Après 60 minutes

**Q10. Depuis combien de temps fumez-vous ?** `[la_tabac_anciennete]`
- Moins de 5 ans
- 5 à 10 ans
- 10 à 20 ans
- Plus de 20 ans

**Q11. À quel moment la cigarette vous semble-t-elle la plus indispensable ?** `[la_tabac_moment]`
- Avec le café / au réveil
- Pendant les pauses au travail
- Après les repas
- Le soir, pour décompresser
- Quand je suis stressée ou contrariée
- En soirée, avec d'autres personnes

**Q11 bis. Utilisez-vous la cigarette électronique ?** `[la_vape]`
- Non
- Oui, en plus des cigarettes
- Oui, à la place des cigarettes

---

### Page 4 — Bloc C : Le sucre

*Intro :* Le sucre est souvent la deuxième béquille quand ça déborde. Voyons comment ça se passe pour vous.

**Q12. À quel moment avez-vous le plus envie de sucré ?** `[la_sucre_moment]`
- En fin d'après-midi
- Le soir, après le dîner ou devant un écran
- Après une contrariété ou une journée difficile
- Quand je suis fatiguée
- Toute la journée
- Je n'ai pas vraiment d'envies de sucré

**Q13. À quelle fréquence mangez-vous du sucré pour vous calmer ou vous réconforter, plutôt que par faim ?** `[la_sucre_frequence]`
- Presque tous les jours
- Plusieurs fois par semaine
- De temps en temps
- Rarement ou jamais

**Q14. Qu'est-ce que vous mangez ou buvez le plus dans ces moments-là ?** `[la_sucre_type]`
- Chocolat, biscuits, gâteaux
- Bonbons, viennoiseries
- Sodas, jus, boissons sucrées
- Pain, pâtes, féculents en grande quantité
- Autre

**Q15. Après avoir mangé du sucré dans ces moments, vous vous sentez plutôt…** `[la_sucre_ressenti]`
- Soulagée, apaisée
- Soulagée sur le moment, puis coupable
- Fatiguée, ballonnée
- Énervée contre moi

---

### Page 5 — Bloc D : Votre parcours

**Q16. Avez-vous déjà essayé d'arrêter de fumer ?** `[la_tentatives]`
- Jamais
- Une fois
- 2 ou 3 fois
- Plus de 3 fois

**Q17. Si oui, avec quelle aide ?** `[la_tentatives_aide]`
- Seule, sans aide
- Patchs, gommes ou autres substituts
- Cigarette électronique
- Médecin, tabacologue ou médicament
- Hypnose, acupuncture ou laser
- Application ou livre
- Je n'ai jamais essayé

**Q18. Qu'est-ce qui vous a fait reprendre ?** `[la_reprise_cause]`
- Une période de stress
- La prise de poids
- Le manque physique (irritabilité, nervosité)
- Les habitudes : café, pauses, soirées
- Mon entourage qui fume
- Je n'ai jamais arrêté

**Q19. Aujourd'hui, quelle est votre plus grande crainte si vous arrêtez ?** `[la_crainte]`
- Prendre du poids
- Ne plus savoir gérer mon stress
- Être irritable avec mes proches
- Échouer encore une fois
- Remplacer la cigarette par le sucre
- Autre

---

### Page 6 — Bloc E : Votre projet

**Q20. Pourquoi voulez-vous changer maintenant ?** `[la_motivation]`
- Pour ma santé
- Pour mes enfants / ma famille
- Pour retrouver du souffle et de l'énergie
- Pour me sentir fière de moi
- Pour faire des économies
- Pour un projet de grossesse
- Sur conseil d'un médecin

**Q20 bis. Dans 3 mois, si tout s'est bien passé, qu'est-ce qui aurait changé dans votre vie ?** `[la_vision]` — zone de texte
*Aide sous le champ :* Écrivez avec vos mots, même en une phrase.

**Q21. Sur une échelle de 1 à 10, à quel point êtes-vous prête à vous faire accompagner pour y arriver ?** `[la_motivation_niveau]`
1 (pas du tout) · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9 · 10 (je suis prête)

**Q22. Quand aimeriez-vous commencer ?** `[la_delai]`
- Le plus vite possible
- Dans les prochaines semaines
- Dans quelques mois
- Je me renseigne seulement

**Q23. Quel format vous conviendrait le mieux ?** `[la_format]`
- Au cabinet à [ville]
- En ligne (visio)
- Un mélange des deux
- Je ne sais pas encore

**Q23 bis. Êtes-vous prête à investir du temps et de l'argent dans un accompagnement sur 8 à 10 semaines si celui-ci vous correspond ?** `[la_investissement]`
- Oui, c'est une priorité pour moi
- Oui, selon le tarif et les modalités
- Je ne sais pas encore
- Non, je cherche une solution gratuite

**Q24. Pour votre sécurité, l'une de ces situations vous concerne-t-elle ?** `[la_sante]`
- Grossesse en cours ou allaitement
- Problème cardiaque, AVC ou hypertension non suivie
- Trouble du comportement alimentaire (actuel ou passé)
- Dépression ou anxiété suivie par un médecin
- Diabète
- Non, rien de tout cela

*Texte sous la question :* Cela ne vous empêche pas d'être accompagnée : cela me permet d'adapter le suivi et, si besoin, d'en parler avec votre médecin.

**Q25 (facultatif). Y a-t-il autre chose que vous aimeriez me dire ?** `[la_message]` — zone de texte

**Bouton :** Voir mon résultat

---

## 3. La page de résultat

Une seule page de remerciement suffit, avec un texte qui parle aux trois situations et un bouton vers la réservation (Systeme.io → calendrier de réservation, ou lien Calendly/Google Agenda).

**Titre :** Merci [Prénom], votre diagnostic est bien reçu.

**Texte :**
> D'après vos réponses, vous vous reconnaissez sans doute dans l'un de ces trois profils :
>
> **La cigarette-soupape.** Le stress monte, la cigarette le fait redescendre… pour un moment. Elle est devenue votre seule vraie pause de la journée.
>
> **Le duo cigarette et sucre.** Quand vous fumez moins, le sucré prend le relais, et inversement. Ce n'est pas un manque de volonté : ce sont deux façons de calmer le même stress.
>
> **Le cercle de la culpabilité.** Vous avez déjà essayé, parfois plusieurs fois. Chaque reprise a laissé un goût d'échec qui ajoute du stress… et relance l'envie.
>
> Dans les trois cas, la solution commence au même endroit : votre stress. C'est exactement ce que nous regardons ensemble pendant l'appel découverte.
>
> **Pendant 20 minutes, gratuitement :**
> - nous relisons vos réponses ensemble ;
> - je vous explique ce qui entretient vos envies de cigarette et de sucre ;
> - vous repartez avec une première piste concrète, que vous choisissiez d'être accompagnée ou non.

**Bouton :** Je réserve mon appel gratuit

*En petit :* Ce questionnaire ne remplace pas une consultation médicale. En cas de doute sur votre santé, parlez-en à votre médecin.

> **Option avancée :** si vous voulez un résultat personnalisé par profil, créez 3 pages de résultat et 3 e-mails différents, envoyés par une règle d'automatisation selon les tags (`LA-sucre-emotionnel` → profil 2 ; `LA-plusieurs-tentatives` → profil 3 ; sinon profil 1).

---

## 4. Grille de lecture pour Assia (avant l'appel)

Ouvrez la fiche contact et calculez ces trois scores. Ils servent à choisir par quoi commencer l'appel, pas à poser un diagnostic médical.

### Dépendance au tabac (indice HSI, 0 à 6)

| Q8 — cigarettes par jour | Points | Q9 — première cigarette | Points |
|---|---|---|---|
| 10 ou moins | 0 | Après 60 min | 0 |
| 11 à 20 | 1 | 31 à 60 min | 1 |
| 21 à 30 | 2 | 6 à 30 min | 2 |
| Plus de 30 | 3 | Dans les 5 min | 3 |

0–1 : faible · 2–4 : moyenne · 5–6 : forte → substituts nicotiniques à doser dès le départ.

### Stress (0 à 10)
Reprendre Q5. Ajouter 1 point si sommeil « Mal » (Q7 bis). 7 ou plus : commencer l'appel par le stress.

### Sucre émotionnel
Q13 « Presque tous les jours » ou « Plusieurs fois par semaine » + Q15 « coupable » ou « énervée » : le sucre est une vraie béquille, à traiter en même temps que le tabac.

### Priorité commerciale

| Profil | Critères | Action |
|---|---|---|
| **Chaude** | Q21 ≥ 8, Q22 = vite ou semaines, Q23 bis = oui | Appeler dans les 24 h, proposer l'accompagnement complet |
| **Tiède** | Q21 entre 5 et 7, ou Q23 bis = « selon le tarif » | Appel découverte, insister sur les résultats concrets et les modalités de paiement |
| **Froide** | Q21 ≤ 4 ou Q22 = « je me renseigne » | Séquence e-mail de contenu, relance dans 1 mois |
| **À orienter** | Q24 ≠ « rien de tout cela » | Vérifier avec la personne, et si besoin avec son médecin, avant de proposer l'accompagnement |

---

## 5. Déroulé de l'appel découverte (20 min)

1. **Accueil (2 min)** — « J'ai lu vos réponses, merci pour votre sincérité. »
2. **Sa situation (6 min)** — repartir de Q7, Q11 et Q12 : « Vous m'avez dit que c'était surtout le soir… racontez-moi une soirée type. »
3. **Le vrai frein (4 min)** — Q18 et Q19 : « Qu'est-ce qui a fait que ça n'a pas tenu la dernière fois ? »
4. **Sa vision (3 min)** — relire Q20 bis à voix haute : « Dans 3 mois, vous voulez… Qu'est-ce que ça changerait pour vous ? »
5. **La proposition (5 min)** — présenter l'accompagnement sur 8 à 10 semaines : le stress d'abord, des substituts bien dosés, le sucre sans régime ni interdit, un suivi au cabinet ou en ligne. Donner le tarif, puis laisser le silence.

---

## 6. Points de vigilance

- **Données de santé (RGPD).** Les réponses sur le tabac, le sommeil ou la santé sont des données de santé : la case de consentement explicite est indispensable, ainsi qu'une politique de confidentialité qui précise qui les lit, combien de temps elles sont gardées (ex. 3 ans sans contact) et comment demander leur suppression. Ne demandez que ce qui sert vraiment l'accompagnement.
- **Pas de promesse médicale.** Le résultat parle de « profil », jamais de « diagnostic d'addiction » ; il ne promet pas d'arrêt garanti.
- **Orientation.** Pour une grossesse, un problème cardiaque ou un trouble du comportement alimentaire, l'accompagnement se fait en lien avec le médecin traitant.
- **Tester le tunnel** avec une adresse e-mail personnelle avant de le publier : vérifier que chaque champ s'enregistre bien dans la fiche contact et que les tags s'ajoutent.
