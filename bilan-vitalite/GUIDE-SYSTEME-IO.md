# Bilan Vitalité — guide de construction sur systeme.io

Auto-évaluation en 20 questions à un clic, puis prénom et email (environ 3 minutes sur mobile).
Elle oriente chaque répondant vers **1 résultat sur 5** et, quand une perfusion peut se discuter,
vers **1 programme conseillé sur 5**. Tout repose sur des **tags**, sans calcul de points.

Ce guide contient tout ce qu'il faut copier dans systeme.io, dans l'ordre de montage :

1. [Vue d'ensemble](#1-vue-densemble)
2. [Les tags à créer](#2-les-tags-à-créer)
3. [Les pages du tunnel](#3-les-pages-du-tunnel)
4. [Le sondage : les 20 questions](#4-le-sondage--les-20-questions)
5. [Workflow 1 : le résultat](#5-workflow-1--le-résultat)
6. [Workflow 2 : la fiche programme du lendemain et le nettoyage](#6-workflow-2--la-fiche-programme-du-lendemain-et-le-nettoyage)
7. [Les 5 emails de résultat](#7-les-5-emails-de-résultat)
8. [Les 5 fiches programme (emails du lendemain)](#8-les-5-fiches-programme-emails-du-lendemain)
9. [Fiche praticien (usage interne)](#9-fiche-praticien-usage-interne)
10. [Recette : 14 profils de test](#10-recette--14-profils-de-test)
11. [Points d'attention avant la mise en ligne](#11-points-dattention-avant-la-mise-en-ligne)

> **Vocabulaire public.** On parle de « bilan » ou d'« auto-évaluation », jamais de « diagnostic » ;
> de « programme conseillé », jamais de « protocole ». Le formulaire oriente, la consultation décide.
> Les textes publics sont au vouvoiement ; passe-les au tutoiement si c'est le ton de ton compte.

---

## 1. Vue d'ensemble

```
Page « Bilan » (titre + sondage 20 questions + prénom/email)
        │  chaque réponse pose au plus 1 tag
        ▼
Page « Votre bilan est en route »
        │
        ▼
WORKFLOW 1 — attente 2 min, puis lecture des tags dans un ordre fixe
   1. ALERTE ?       oui → R1  (médecin d'abord)          → nettoyage
   2. PRECAUTION ?   oui → R2  (avis médical avant tout)  → nettoyage
   3. FORT ?         oui → R5  ┐
      CARENCE ?      oui → R5  │
      MOYEN ?        non → R3  │ + tag FICHE-J1
      FACTEUR ?      oui → R5  │
                     non → R4  ┘
        ▼
WORKFLOW 2 (déclenché par FICHE-J1) — attente 1 jour
   OBJ-… → fiche du programme correspondant → nettoyage
```

**Pourquoi ça marche sans score.** Peu importe combien de fois un tag est posé : systeme.io
ne le pose qu'une fois, et le workflow ne regarde que sa **présence**. MOYEN posé par trois
questions ou par une seule, c'est la même chose : « au moins un symptôme fréquent ».

**Pourquoi l'ordre des questions ne change pas le résultat.** Le sondage commence par
l'objectif et les symptômes (engagement) et finit par la santé (juste avant l'email). Mais
le workflow, lui, lit toujours ALERTE en premier, puis PRECAUTION, puis le niveau de besoin.
Les filtres de sécurité restent donc prioritaires.

---

## 2. Les tags à créer

À créer dans **Contacts → Tags** *avant* de monter le sondage (il faut pouvoir les choisir réponse par réponse).

| Tag | Posé par | Rôle |
|---|---|---|
| `OBJ-ENERGIE` | Q1 | Programme Énergie & vitalité |
| `OBJ-IMMUNITE` | Q1 | Programme Immunité |
| `OBJ-SOMMEIL` | Q1 | Programme Stress & sommeil |
| `OBJ-PEAU` | Q1 | Programme Peau, cheveux & ongles |
| `OBJ-RECUP` | Q1 | Programme Récupération |
| `MOYEN` | Q3 à Q11 | Au moins un symptôme fréquent |
| `FORT` | Q3 à Q11, Q16 | Au moins un symptôme presque quotidien (ou stress « à bout ») |
| `FACTEUR` | Q2, Q12 à Q16 | Au moins un facteur de mode de vie qui augmente les besoins |
| `CARENCE` | Q17 | Carence connue à la dernière prise de sang |
| `PRECAUTION` | Q2, Q18 | Situation médicale à évaluer avant toute perfusion |
| `ALERTE` | Q19 | Signe qui doit d'abord être vu par un médecin |
| `CONSENTEMENT` | Q20 | Consentement au traitement des réponses |
| `FICHE-J1` | Workflow 1 | Déclenche la fiche programme du lendemain |
| `BILAN-R1` … `BILAN-R5` | Workflow 1 | **Tags permanents** : résultat obtenu (statistiques, relances) |

Soit 21 tags. Seuls les `BILAN-R…` restent sur le contact après le nettoyage (voir § 6).

---

## 3. Les pages du tunnel

Tunnel à 2 étapes. Le sondage est un élément de la page 1 ; la page 2 est l'étape suivante.

### Page 1 — Bilan (tient en un écran au-dessus du sondage)

- **Titre :** Votre Bilan Vitalité en 3 minutes
- **Sous-titre :** Fatigue qui dure, défenses en baisse, sommeil léger, peau terne ? Découvrez si une consultation en vitaminothérapie est utile pour vous, et quel programme pourrait vous correspondre.
- **Réassurance :** 20 questions · résultat personnalisé par email · gratuit et sans engagement
- *(sondage)*
- **Mention, en petits caractères sous le sondage :** Ce bilan est une auto-évaluation : il ne pose pas de diagnostic et ne remplace pas un avis médical. Toute perfusion est précédée d'une consultation et réalisée sur prescription, par un professionnel de santé.

### Page 2 — Remerciement

- **Titre :** Votre bilan est en route
- **Texte :** Votre résultat personnalisé arrive dans votre boîte mail d'ici quelques minutes. Vérifiez l'onglet Promotions ou vos spams, et ajoutez notre adresse à vos contacts pour recevoir la suite.
- **Bas de page :** Une question en attendant ? Écrivez-nous sur Instagram : @[ton compte].

---

## 4. Le sondage : les 20 questions

Toutes les questions sont **obligatoires** et **à choix unique**, dans cet ordre.
Chaque réponse pose **au plus un tag** ; « — » = aucun tag.

### Bloc 1 — Objectif et profil

**Q1. Quel est votre objectif principal ?**
*Sous-titre : choisissez celui qui compte le plus aujourd'hui.*

| Réponse | Tag |
|---|---|
| Retrouver de l'énergie | `OBJ-ENERGIE` |
| Renforcer mes défenses | `OBJ-IMMUNITE` |
| Mieux gérer stress et sommeil | `OBJ-SOMMEIL` |
| Améliorer peau, cheveux et ongles | `OBJ-PEAU` |
| Mieux récupérer après le sport | `OBJ-RECUP` |

**Q2. Quel âge avez-vous ?**

| Réponse | Tag |
|---|---|
| Moins de 18 ans | `PRECAUTION` |
| 18 à 39 ans | — |
| 40 à 59 ans | — |
| 60 ans et plus | `FACTEUR` |

### Bloc 2 — Ce que vous ressentez

**Q3 à Q9 : même échelle de réponses pour les 7 questions.**

| Réponse | Tag |
|---|---|
| Jamais ou rarement | — |
| Parfois | — |
| Souvent | `MOYEN` |
| Presque tous les jours | `FORT` |

| # | Question | Axe (lecture en consultation, pas de calcul) |
|---|---|---|
| Q3 | Vous sentez-vous fatigué(e) au réveil, même après une nuit complète ? | Énergie |
| Q4 | Avez-vous des coups de fatigue ou du mal à vous concentrer dans la journée ? | Énergie |
| Q5 | Vous sentez-vous nerveux(se), irritable ou anxieux(se) ? | Stress & sommeil |
| Q6 | Avez-vous du mal à vous endormir, ou vous réveillez-vous la nuit ? | Stress & sommeil |
| Q7 | Vos cheveux tombent-ils plus que d'habitude, ou vos ongles cassent-ils facilement ? | Peau & cheveux |
| Q8 | Votre peau est-elle terne, sèche ou plus réactive qu'avant ? | Peau & cheveux |
| Q9 | Avez-vous des crampes, des courbatures qui durent ou des tensions musculaires ? | Récupération |

**Q10. Combien de rhumes, angines ou autres infections avez-vous eus ces 12 derniers mois ?** *(axe Immunité)*

| Réponse | Tag |
|---|---|
| 0 à 1 | — |
| 2 à 3 | — |
| 4 à 5 | `MOYEN` |
| 6 ou plus | `FORT` |

**Q11. Après une infection, combien de temps mettez-vous à retrouver la forme ?** *(axe Immunité)*

| Réponse | Tag |
|---|---|
| Quelques jours | — |
| Environ une semaine | — |
| Deux semaines | `MOYEN` |
| Plus de deux semaines | `FORT` |

### Bloc 3 — Votre mode de vie

**Q12. Comment décririez-vous votre alimentation ?**

| Réponse | Tag |
|---|---|
| Variée, avec fruits et légumes chaque jour | — |
| Correcte mais irrégulière | — |
| Souvent rapide ou industrielle | `FACTEUR` |
| Végétarienne ou végétalienne | `FACTEUR` |

**Q13. Combien de verres d'alcool buvez-vous par semaine ?**

| Réponse | Tag |
|---|---|
| Aucun ou presque | — |
| 1 à 10 | — |
| Plus de 10 | `FACTEUR` |

**Q14. Fumez-vous ?**

| Réponse | Tag |
|---|---|
| Non | — |
| Oui | `FACTEUR` |

**Q15. Pratiquez-vous une activité physique intense ?**

| Réponse | Tag |
|---|---|
| Rarement ou jamais | — |
| 1 à 2 fois par semaine | — |
| 3 fois ou plus par semaine | `FACTEUR` |
| Compétition ou préparation d'une épreuve | `FACTEUR` |

**Q16. Comment évaluez-vous votre niveau de stress ces 3 derniers mois ?**

| Réponse | Tag |
|---|---|
| Faible | — |
| Modéré | — |
| Élevé | `FACTEUR` |
| Très élevé, je me sens à bout | `FORT` |

**Q17. Avez-vous fait une prise de sang ces 12 derniers mois ?**

| Réponse | Tag |
|---|---|
| Oui, résultats normaux | — |
| Oui, avec une carence (fer, vitamine D, B12…) | `CARENCE` |
| Non, ou je ne sais plus | — |

### Bloc 4 — Votre santé

**Q18. Êtes-vous concerné(e) par l'une de ces situations ?**
*Sous-titre : grossesse, allaitement ou projet de grossesse · maladie des reins ou calculs rénaux · maladie cardiaque ou hypertension non équilibrée · diabète · déficit en G6PD (favisme) · hémochromatose ou surcharge en fer · traitement anticoagulant · cancer en cours de traitement · maladie digestive chronique ou chirurgie de l'obésité · allergie connue à une vitamine ou à un complément · autre maladie chronique ou traitement quotidien*

| Réponse | Tag |
|---|---|
| Oui, au moins une | `PRECAUTION` |
| Je ne sais pas | `PRECAUTION` |
| Non, aucune | — |

**Q19. En ce moment, avez-vous l'un de ces signes ?**
*Sous-titre : perte de poids importante sans raison · fièvre ou sueurs nocturnes qui durent · essoufflement ou douleur dans la poitrine · malaises ou évanouissements · sang dans les selles ou les urines · tristesse ou perte d'envie qui dure, idées noires*

| Réponse | Tag |
|---|---|
| Oui, au moins un | `ALERTE` |
| Non, aucun | — |

**Q20. Acceptez-vous que vos réponses, y compris vos informations de santé, servent à établir et à vous envoyer votre bilan par email, avec quelques conseils liés à votre objectif ?**
*Sous-titre : désinscription en un clic ; suppression de vos données sur simple demande à [ton email] ; détails dans [lien politique de confidentialité].*

| Réponse | Tag |
|---|---|
| Oui, j'accepte | `CONSENTEMENT` *(seule réponse)* |

### Étape finale du sondage

- Prénom (obligatoire)
- Email (imposé par systeme.io)
- Téléphone (facultatif)
- **Bouton :** Recevoir mon bilan

> Q18 et Q19 regroupent les situations en sous-titre avec une réponse Oui/Non : plus rapide,
> compatible avec le choix unique, et tu ne stockes pas le détail des pathologies. Il se recueille en consultation.

---

## 5. Workflow 1 : le résultat

**Automatisations → Workflows → Créer.** Nom : `Bilan Vitalité — Résultat`.

**Déclencheur :** l'inscription via le sondage de l'étape « Bilan » du tunnel.
Si ton interface ne propose pas ce déclencheur pour le sondage, utilise « Tag ajouté : `CONSENTEMENT` »
(Q20 n'a qu'une réponse, donc tout répondant le reçoit).

### Étapes, dans cet ordre exact

Chaque condition ne teste **qu'un seul tag** (branche OUI / branche NON). C'est volontaire :
ça marche même si l'éditeur de conditions ne gère pas le « ET », et chaque branche est facile à vérifier.

```
1. Attendre 2 minutes                      ← laisse le temps à tous les tags d'être posés

2. Condition : a le tag ALERTE ?
   ├─ OUI → Envoyer email R1 → Ajouter tag BILAN-R1 → NETTOYAGE
   └─ NON ↓

3. Condition : a le tag PRECAUTION ?
   ├─ OUI → Envoyer email R2 → Ajouter tag BILAN-R2 → NETTOYAGE
   └─ NON ↓

4. Condition : a le tag FORT ?
   ├─ OUI → Envoyer email R5 → Ajouter tags BILAN-R5 + FICHE-J1
   └─ NON ↓

5. Condition : a le tag CARENCE ?
   ├─ OUI → Envoyer email R5 → Ajouter tags BILAN-R5 + FICHE-J1
   └─ NON ↓

6. Condition : a le tag MOYEN ?
   ├─ NON → Envoyer email R3 → Ajouter tags BILAN-R3 + FICHE-J1
   └─ OUI ↓

7. Condition : a le tag FACTEUR ?
   ├─ OUI → Envoyer email R5 → Ajouter tags BILAN-R5 + FICHE-J1
   └─ NON → Envoyer email R4 → Ajouter tags BILAN-R4 + FICHE-J1
```

**NETTOYAGE** (branches R1 et R2) = retirer les tags `OBJ-ENERGIE`, `OBJ-IMMUNITE`, `OBJ-SOMMEIL`,
`OBJ-PEAU`, `OBJ-RECUP`, `MOYEN`, `FORT`, `FACTEUR`, `CARENCE`, `PRECAUTION`, `ALERTE`, `CONSENTEMENT`.

### Règles traduites en clair

| Ordre | Si le contact a… | Résultat |
|---|---|---|
| 1 | `ALERTE` | **R1** — Votre médecin d'abord (aucune perfusion proposée) |
| 2 | `PRECAUTION` | **R2** — Consultation avec évaluation médicale approfondie avant toute perfusion |
| 3 | `FORT` **ou** `CARENCE` **ou** (`MOYEN` **et** `FACTEUR`) | **R5** — Consultation et programme recommandés |
| 4 | `MOYEN` seul | **R4** — Consultation conseillée |
| 5 | rien de tout ça | **R3** — Pas de perfusion nécessaire pour l'instant |

Le premier cas vrai l'emporte. Exemples : fatiguée tous les jours (`FORT`) mais enceinte
(`PRECAUTION`) → **R2**, jamais R5. « Souvent » + fumeur (`MOYEN` + `FACTEUR`) → **R5**.
L'objectif (`OBJ-…`) ne change jamais le résultat : il ne sert qu'à l'email du lendemain.

---

## 6. Workflow 2 : la fiche programme du lendemain et le nettoyage

Nom : `Bilan Vitalité — Fiche J+1`. **Déclencheur :** « Tag ajouté : `FICHE-J1` ».

Le séparer du workflow 1 évite de recopier 5 fois les mêmes branches (une par résultat R3/R4/R5).

```
1. Attendre 1 jour

2. Condition : a le tag OBJ-ENERGIE ?   OUI → Envoyer fiche Énergie   → NETTOYAGE J+1
3. Condition : a le tag OBJ-IMMUNITE ?  OUI → Envoyer fiche Immunité  → NETTOYAGE J+1
4. Condition : a le tag OBJ-SOMMEIL ?   OUI → Envoyer fiche Stress & sommeil → NETTOYAGE J+1
5. Condition : a le tag OBJ-PEAU ?      OUI → Envoyer fiche Peau      → NETTOYAGE J+1
6. Condition : a le tag OBJ-RECUP ?     OUI → Envoyer fiche Récupération → NETTOYAGE J+1
                                        NON → NETTOYAGE J+1 (aucune fiche)
```

**NETTOYAGE J+1** = la liste du nettoyage ci-dessus **+ `FICHE-J1`**.

### Pourquoi nettoyer ?

- **Pour qu'on puisse refaire le bilan.** Les tags restent sur un contact. Sans nettoyage,
  quelqu'un qui refait le bilan dans 3 mois garderait l'ancien `FORT` ou l'ancien `ALERTE` et
  recevrait un résultat faux — et deux `OBJ-…` différents.
- **Pour limiter les données de santé** stockées dans ton CRM : il ne reste que `BILAN-R1` à `R5`.
  Le détail des réponses reste consultable dans les résultats du sondage pour préparer la consultation.

> Limite connue : si quelqu'un refait le bilan **dans les 24 h**, le nettoyage du premier
> passage efface les tags du second avant sa fiche J+1. Cas rare ; le résultat du jour J reste juste.

---

## 7. Les 5 emails de résultat

Envoyés 2 minutes après le bilan (workflow 1). Remplace `[Prénom]` par la variable prénom de
l'éditeur d'email systeme.io, et `[Signature]`, `[lien de réservation]` par tes informations.

**Pied de page commun à tous les emails (R1 à R5 et fiches) :**
> Ce bilan est une auto-évaluation basée sur vos réponses. Il ne pose pas de diagnostic et ne remplace pas l'avis de votre médecin.

### R1 — Votre médecin d'abord

**Objet :** Votre Bilan Vitalité : un point important avant tout

Bonjour [Prénom],

Merci d'avoir pris le temps de remplir votre Bilan Vitalité. Vous avez signalé au moins un signe qui doit être examiné par un médecin avant toute démarche de vitaminothérapie. Ces signes ont de nombreuses causes, souvent bénignes, mais seul un examen médical permet de les identifier.

Notre conseil : prenez rendez-vous avec votre médecin traitant dans les prochains jours. En cas de douleur dans la poitrine, d'essoufflement important ou de malaise, appelez le 15 ou le 112. Si vous traversez une période de grande tristesse ou avez des idées noires, le 3114 vous répond gratuitement, 24 h/24.

Une fois ce point fait, nous serons heureux de vous accompagner si votre médecin le juge utile.

Prenez soin de vous,
[Signature]

### R2 — Un avis médical avant toute perfusion

**Objet :** Votre Bilan Vitalité : une consultation, avec quelques précautions

Bonjour [Prénom],

Votre situation (âge, grossesse, maladie ou traitement en cours) demande une évaluation médicale avant toute perfusion. Certaines vitamines et certains minéraux, à forte dose et par voie veineuse, ne conviennent pas à tout le monde, notamment en cas de maladie des reins ou du cœur.

Une perfusion n'est pas forcément exclue. Elle se décide après un échange approfondi et, si besoin, avec l'accord de votre médecin traitant. Si vous avez moins de 18 ans, nos perfusions ne vous sont pas proposées.

Prochaine étape : réservez une consultation sans perfusion ici : [lien de réservation]. Apportez vos ordonnances en cours et votre dernière prise de sang.

À bientôt,
[Signature]

### R3 — Pas de perfusion nécessaire pour l'instant

**Objet :** Votre Bilan Vitalité : une bonne nouvelle

Bonjour [Prénom],

Vos réponses ne montrent pas de signe marqué de déséquilibre : une perfusion ne nous paraît pas nécessaire aujourd'hui. Une alimentation variée, un sommeil régulier et une activité physique adaptée restent vos meilleurs alliés.

Demain, vous recevrez quelques conseils ciblés sur l'objectif que vous avez choisi. Et si votre énergie, votre sommeil ou vos défenses changent dans les prochaines semaines, refaites le bilan : il prend 3 minutes.

Belle journée,
[Signature]

### R4 — Une consultation est conseillée

**Objet :** Votre Bilan Vitalité : une consultation peut vous aider

Bonjour [Prénom],

Plusieurs de vos réponses montrent des signes qui reviennent souvent. Ils peuvent traduire un besoin accru en certains nutriments, mais aussi d'autres causes : une consultation permet de faire la part des choses.

Pendant ce rendez-vous, nous faisons le point sur vos symptômes, votre alimentation et vos analyses. Nous décidons ensemble si une perfusion, des compléments par voie orale ou de simples ajustements suffisent.

Réserver ma consultation : [lien de réservation]. Apportez votre dernière prise de sang si vous en avez une ; sinon, nous vous dirons quels dosages demander.

Demain, vous recevrez la fiche du programme lié à votre objectif.

À bientôt,
[Signature]

### R5 — Consultation et programme recommandés

**Objet :** Votre Bilan Vitalité : une consultation est recommandée

Bonjour [Prénom],

Vos réponses montrent des signes présents presque tous les jours, une carence déjà connue, ou des symptômes fréquents associés à des facteurs qui augmentent vos besoins (alimentation, tabac, sport intense, stress). Dans votre cas, une consultation est recommandée.

Elle permettra de vérifier vos analyses, d'écarter d'autres causes et, si c'est indiqué, de vous proposer un programme de perfusions adapté, complété par des conseils au quotidien.

Réserver ma consultation : [lien de réservation]. Apportez votre dernière prise de sang si vous en avez une.

Demain, vous recevrez la fiche de votre programme, pour savoir à quoi vous attendre.

À très vite,
[Signature]

---

## 8. Les 5 fiches programme (emails du lendemain)

Envoyées à J+1 aux résultats R3, R4 et R5 (workflow 2). Elles restent **générales** : pas de dose,
pas de nombre de séances, pas de promesse de résultat. Les rôles des nutriments cités reprennent
les **allégations de santé autorisées** par l'Union européenne (formulation « contribue à… ») :
ne les renforce pas (« booste », « guérit », « élimine la fatigue »…).

La dernière phrase est neutre pour convenir aux trois résultats : en R3, elle n'incite pas à réserver ;
en R4/R5, elle rappelle le lien.

### Fiche Énergie & vitalité

**Objet :** Votre programme conseillé : Énergie & vitalité

Bonjour [Prénom],

Comme promis, voici la fiche du programme lié à votre objectif : retrouver de l'énergie.

**Ce que l'on regarde d'abord.** Une fatigue qui dure a souvent plusieurs causes : sommeil, rythme de vie, mais aussi un manque de fer, un trouble de la thyroïde ou une baisse de vitamine D. C'est pourquoi la consultation commence par vos analyses (numération, ferritine, B12, folates, TSH, vitamine D).

**Les nutriments souvent discutés.** Les vitamines du groupe B et la vitamine C contribuent à un métabolisme énergétique normal ; le magnésium et la vitamine B12 contribuent à réduire la fatigue.

**Au quotidien, dès maintenant :** des horaires de coucher réguliers, une source de protéines à chaque repas, des légumineuses et des légumes verts pour le fer et les folates, et 20 minutes de lumière du jour le matin.

Envie d'en parler ? Répondez simplement à cet email, ou réservez une consultation : [lien de réservation].

À bientôt,
[Signature]

### Fiche Immunité

**Objet :** Votre programme conseillé : Immunité

Bonjour [Prénom],

Voici la fiche du programme lié à votre objectif : renforcer vos défenses.

**Ce que l'on regarde d'abord.** Des infections à répétition méritent un point sur votre vitamine D, votre numération sanguine et, si besoin, votre zinc. La consultation vérifie aussi qu'il n'y a pas de contre-indication avant toute perfusion de vitamine C, notamment au niveau des reins.

**Les nutriments souvent discutés.** La vitamine C, le zinc et la vitamine D contribuent au fonctionnement normal du système immunitaire. La vitamine D se complète en général par voie orale.

**Au quotidien, dès maintenant :** des fruits et légumes colorés chaque jour (agrumes, kiwis, poivrons), un sommeil suffisant, une activité physique régulière et le lavage des mains en période d'épidémie.

Envie d'en parler ? Répondez simplement à cet email, ou réservez une consultation : [lien de réservation].

À bientôt,
[Signature]

### Fiche Stress & sommeil

**Objet :** Votre programme conseillé : Stress & sommeil

Bonjour [Prénom],

Voici la fiche du programme lié à votre objectif : mieux gérer stress et sommeil.

**Ce que l'on regarde d'abord.** Nervosité et sommeil léger peuvent être liés à un manque de fer, à la thyroïde ou à une période chargée. La consultation fait le point (ferritine, TSH, magnésium). Si l'anxiété ou l'insomnie sont installées depuis longtemps, un accompagnement par votre médecin ou un psychologue est un vrai soutien, en complément.

**Les nutriments souvent discutés.** Le magnésium et la vitamine B6 contribuent à des fonctions psychologiques normales et au fonctionnement normal du système nerveux.

**Au quotidien, dès maintenant :** pas d'écran dans l'heure qui précède le coucher, la caféine avant 14 h, quelques minutes de respiration lente le soir, et des horaires réguliers, même le week-end.

Envie d'en parler ? Répondez simplement à cet email, ou réservez une consultation : [lien de réservation].

À bientôt,
[Signature]

### Fiche Peau, cheveux & ongles

**Objet :** Votre programme conseillé : Peau, cheveux & ongles

Bonjour [Prénom],

Voici la fiche du programme lié à votre objectif : prendre soin de votre peau, de vos cheveux et de vos ongles.

**Ce que l'on regarde d'abord.** Une chute de cheveux fait toujours vérifier le fer (ferritine) et la thyroïde, avant tout le reste. Le zinc et la vitamine D complètent le bilan.

**Les nutriments souvent discutés.** La biotine contribue au maintien de cheveux et d'une peau normaux ; le zinc, au maintien de cheveux, d'ongles et d'une peau normaux ; la vitamine C contribue à la formation normale de collagène pour assurer la fonction normale de la peau.

**Bon à savoir :** la biotine peut fausser certains dosages sanguins (thyroïde notamment). Si vous en prenez en complément, signalez-le avant votre prochaine prise de sang.

**Au quotidien, dès maintenant :** une protection solaire, des oléagineux et des petits poissons gras pour les bons acides gras, et une hydratation régulière.

Envie d'en parler ? Répondez simplement à cet email, ou réservez une consultation : [lien de réservation].

À bientôt,
[Signature]

### Fiche Récupération

**Objet :** Votre programme conseillé : Récupération

Bonjour [Prénom],

Voici la fiche du programme lié à votre objectif : mieux récupérer après le sport.

**Ce que l'on regarde d'abord.** Des crampes ou des courbatures qui durent font vérifier la ferritine et le magnésium, et parfois les enzymes musculaires si les douleurs sont fortes.

**Les nutriments souvent discutés.** Le magnésium contribue à une fonction musculaire normale ; la vitamine C et les vitamines du groupe B, à réduire la fatigue. L'hydratation compte autant que les nutriments.

**Sportif en compétition ?** Signalez-le dès la prise de rendez-vous : le code mondial antidopage encadre strictement les perfusions, et nous en tenons compte.

**Au quotidien, dès maintenant :** buvez avant d'avoir soif, prévoyez une collation avec protéines et glucides dans l'heure qui suit l'effort, et au moins un jour de repos par semaine.

Envie d'en parler ? Répondez simplement à cet email, ou réservez une consultation : [lien de réservation].

À bientôt,
[Signature]

---

## 9. Fiche praticien (usage interne)

Le questionnaire désigne un programme ; la consultation fixe le reste. Doses, nombre de séances et
espacement sont décidés par le prescripteur selon ta pratique, jamais par le formulaire.

| Programme | Nutriments souvent utilisés en perfusion | Analyses utiles | Point de vigilance |
|---|---|---|---|
| **Énergie & vitalité** | Complexe B (B1, B2, B3, B5, B6), B12, vitamine C, magnésium | NFS, ferritine, B12, folates, TSH, vitamine D | Une fatigue qui dure fait d'abord écarter anémie, trouble thyroïdien, apnée du sommeil. Le fer injectable relève d'une prescription et d'un cadre spécifiques. |
| **Immunité** | Vitamine C, zinc, complexe B | Vitamine D, NFS, zinc si besoin | Vitamine C à forte dose : vérifier G6PD et fonction rénale ; elle fausse certains lecteurs de glycémie. La vitamine D se complète par voie orale. |
| **Stress & sommeil** | Magnésium, B6 et complexe B | Ferritine, TSH, magnésium | Anxiété ou insomnie installées : orienter aussi vers le médecin traitant ou un psychologue. |
| **Peau, cheveux & ongles** | Biotine (B8), complexe B, vitamine C, zinc | Ferritine, TSH, zinc, vitamine D | Chute de cheveux : ferritine et thyroïde d'abord. La biotine fausse certains dosages hormonaux : la suspendre quelques jours avant une prise de sang. Le glutathion, souvent demandé, a peu de preuves. |
| **Récupération** | Magnésium, vitamine C, complexe B, acides aminés, hydratation | Ferritine, magnésium, CPK si douleurs | Douleurs musculaires intenses, faiblesse ou urines foncées après l'effort : écarter une rhabdomyolyse (CPK) avant tout. **Sportif soumis aux contrôles** (réponse « Compétition » à Q15) : le code mondial antidopage (méthode interdite M2.2) interdit les perfusions de plus de 100 mL par période de 12 h, sauf hospitalisation, chirurgie ou examen clinique — vérifier la liste en vigueur de l'année et, si besoin, une AUT. Magnésium IV : prudence en cas d'insuffisance rénale. |

---

## 10. Recette : 14 profils de test

Avant la mise en ligne, remplis le bilan avec des adresses de test (ex. `tonadresse+r1@gmail.com`,
`+r2`, …) et vérifie l'email reçu à 2 minutes, la fiche à J+1 et les tags restants.
Pour gagner du temps, passe provisoirement l'attente du workflow 2 à 5 minutes pendant la recette.

| # | Réponses clés (le reste au plus calme) | Tags attendus | Email J0 | Fiche J+1 |
|---|---|---|---|---|
| 1 | Q19 Oui + Q3 « presque tous les jours » + Q18 Oui | ALERTE, FORT, PRECAUTION | **R1** | aucune |
| 2 | Q18 Oui (grossesse) + Q3 « presque tous les jours » | PRECAUTION, FORT | **R2** | aucune |
| 3 | Q2 Moins de 18 ans, aucun symptôme | PRECAUTION | **R2** | aucune |
| 4 | Q18 « Je ne sais pas » | PRECAUTION | **R2** | aucune |
| 5 | Q1 Énergie + Q3 « presque tous les jours » | FORT | **R5** | Énergie |
| 6 | Q1 Peau + Q7 « souvent » + Q14 fumeur | MOYEN, FACTEUR | **R5** | Peau |
| 7 | Q1 Sommeil + Q6 « souvent », mode de vie sain | MOYEN | **R4** | Stress & sommeil |
| 8 | Q1 Immunité + Q10 « 4 à 5 » + Q2 60 ans et plus | MOYEN, FACTEUR | **R5** | Immunité |
| 9 | Q17 carence, aucun symptôme | CARENCE | **R5** | selon Q1 |
| 10 | Q16 « Très élevé, à bout », rien d'autre | FORT | **R5** | selon Q1 |
| 11 | Tout « parfois », Q12 végétarienne | FACTEUR | **R3** | selon Q1 |
| 12 | Q1 Récupération, tout « jamais », Q15 compétition | FACTEUR | **R3** | Récupération |
| 13 | Tout au plus calme | CONSENTEMENT seul | **R3** | selon Q1 |
| 14 | Refaire le profil 7 après la fiche J+1 avec Q19 Oui | ALERTE (ancien MOYEN effacé) | **R1** | aucune |

**Après chaque test, sur la fiche contact :** il ne doit rester que `BILAN-R…` (et `FICHE-J1`
tant que la fiche J+1 n'est pas partie). Le profil 14 vérifie que le nettoyage permet de refaire le bilan.

---

## 11. Points d'attention avant la mise en ligne

1. **Vérifie dans ton interface systeme.io** que le sondage permet bien un tag par réponse et
   que le workflow propose : un déclencheur sur l'inscription au sondage (ou « tag ajouté »),
   une attente, une condition « a le tag », l'ajout et le retrait de tag. Le montage n'utilise
   que ces briques, avec une condition à un seul tag à la fois, pour rester compatible.
2. **Données de santé (RGPD, article 9).** Q20 recueille le consentement explicite exigé pour ces
   données. Complète ta politique de confidentialité : finalité (établir et envoyer le bilan,
   conseils liés à l'objectif), durée de conservation, droit de suppression, hébergeur.
   Pour envoyer ensuite d'autres emails (newsletter, offres), prévois un consentement séparé.
   Fais valider par un juriste la question de l'**hébergement de données de santé (HDS)** :
   le choix de ne stocker que des Oui/Non et de nettoyer les tags va dans le bon sens, mais
   les réponses restent enregistrées dans les résultats du sondage.
3. **Délivrabilité.** Authentifie ton domaine d'envoi dans systeme.io (SPF, DKIM, DMARC) :
   sans ça, le résultat risque de finir en spam, alors que c'est tout l'intérêt du tunnel.
4. **Deux choix de règles à confirmer** (ils sont dans ta spécification, je les ai gardés) :
   - « 60 ans et plus » = `FACTEUR` : une personne de 60 ans qui coche un seul « souvent » reçoit R5.
   - « Très élevé, je me sens à bout » = `FORT` → R5. Si tu préfères qu'un épuisement déclaré passe
     d'abord par le médecin, mets cette réponse sur `PRECAUTION` (→ R2).
5. **Remplacer partout :** `[ton compte]`, `[ton email]`, `[lien politique de confidentialité]`,
   `[lien de réservation]`, `[Signature]`, et la variable `[Prénom]`.
