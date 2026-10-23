# Plan de tests

Nom et prénom : Yaelle Pelerin
Date : 23/10/2026

## 1 Les neuf cas à tester

| ID       | Page            | Situation à vérifier                                 |
| -------- | --------------- | ---------------------------------------------------- |
| INS-01   | /register       | Inscription avec des données valides                 |
| INS-02   | /register       | Inscription avec un champ obligatoire vide           |
| INS-03   | /register       | Inscription avec deux mots de passe différents       |
| TACHE-01 | /task/new       | Ajout d’une tâche valide avec une catégorie          |
| TACHE-02 | /task/new       | Ajout avec un champ obligatoire vide                 |
| TACHE-03 | /task/new       | Accès à la page sans être connecté                   |
| LISTE-01 | /task/activeall | Les tâches actives du compte connecté sont affichées |
| LISTE-02 | /task/activeall | Ses tâches terminées ne sont pas affichées           |
| LISTE-03 | /task/activeall | Les tâches d’un autre compte ne sont pas affichées   |

## 2 Décrire chaque cas

### Données à préparer

- Compte A : u-a@example.com
- Compte B : u-b@example.com
- Mot de passe des comptes : testTodo!2026
- Deux catégories : Travail et Personnel
- Une tâche active du compte A : « Active A »
- Une tâche terminée du compte A : « Terminée A »
- Une tâche active du compte B : « Active B »

Vérifier que ces données existent avant les tests.
Chaque test prépare sa connexion et peut être lancé seul.

Pour rejouer les inscriptions et les créations de tâches,
utiliser une adresse email ou un titre unique à chaque passage.

### INS-01 — Inscription valide

- Objectif : vérifier qu’un utilisateur peut créer un compte.
- Préparation : être déconnecté et ouvrir /register.
- Données utilisées : email unique, mot de passe testTodo!2026, confirmation identique et autres champs obligatoires valides.
- Actions :
  1. Remplir le formulaire.
  2. Envoyer le formulaire.
  3. Se déconnecter si nécessaire, puis se connecter avec le compte créé.
- Résultat attendu : le compte est créé et permet de se connecter.
-  Résultat obtenu : le compte est créé avec un email unique.
- Statut : réussi.

### INS-02 — Inscription avec un champ obligatoire vide

- Objectif : vérifier qu’une inscription incomplète est refusée.
- Préparation : être déconnecté et ouvrir /register.
- Données utilisées : email vide, autres champs obligatoires valides. Vérifier avant le test que l’email est obligatoire.
- Actions :
  1. Remplir le formulaire sans renseigner l’email.
  2. Tenter d’envoyer le formulaire.
- Résultat attendu : le champ manquant est signalé, l’inscription est bloquée et aucun compte n’est créé.
- Résultat obtenu : [à compléter après le test.]
- Statut : non exécuté.

### INS-03 — Mots de passe différents

- Objectif : vérifier que les deux mots de passe doivent être identiques.
- Préparation : être déconnecté et ouvrir /register.
- Données utilisées : email unique, mot de passe testTodo!2026, confirmation AutreTodo!2026 et autres champs valides.
- Actions :
  1. Remplir le formulaire avec deux mots de passe différents.
  2. Envoyer le formulaire.
  3. Vérifier qu’une connexion avec ce compte est impossible.
- Résultat attendu : une erreur est affichée et aucun compte utilisable n’est créé.
- Résultat obtenu : [à compléter après le test.]
- Statut : non exécuté.

### TACHE-01 — Ajout d’une tâche valide

- Objectif : vérifier qu’une tâche est bien enregistrée avec sa catégorie.
- Préparation : être connecté au compte A, disposer de la catégorie Travail et ouvrir /task/new.
- Données utilisées : titre unique « Test tâche [identifiant unique] », catégorie Travail et autres champs obligatoires valides.
- Actions :
  1. Remplir le formulaire et sélectionner Travail.
  2. Envoyer le formulaire.
  3. Ouvrir /task/activeall.
  4. Recharger la page et rechercher la tâche.
  5. Vérifier la catégorie dans la page qui présente cette information.
- Résultat attendu : la tâche du compte A est présente après rechargement et possède la catégorie Travail.
- Résultat obtenu : [à compléter après le test.]
- Statut : non exécuté.

### TACHE-02 — Ajout avec un champ obligatoire vide

- Objectif : vérifier qu’une tâche incomplète est refusée.
- Préparation : être connecté au compte A et ouvrir /task/new.
- Données utilisées : un champ obligatoire vide, les autres champs valides. Champ choisi : [à préciser après vérification du formulaire].
- Actions :
  1. Remplir le formulaire en laissant le champ choisi vide.
  2. Tenter d’envoyer le formulaire.
  3. Vérifier qu’aucune tâche correspondant à cette tentative n’a été ajoutée dans la liste.
- Résultat attendu : le champ manquant est signalé, la création est bloquée et aucune tâche n’est enregistrée.
- Résultat obtenu : [à compléter après le test.]
- Statut : non exécuté.

### TACHE-03 — Accès sans connexion

- Objectif : vérifier que la création de tâches nécessite une connexion.
- Préparation : être déconnecté, sans session active.
- Données utilisées : aucune.
- Actions :
  1. Accéder directement à /task/new.
  2. Observer la page et l’URL.
- Résultat attendu : le formulaire est inaccessible. L’utilisateur est redirigé vers la connexion ou reçoit un refus d’accès.
- Résultat obtenu : [à compléter après le test.]
- Statut : réussi.

### LISTE-01 — Affichage des tâches actives

- Objectif : vérifier que l’utilisateur voit ses tâches actives.
- Préparation : être connecté au compte A. La tâche « Active A » existe et est active.
- Données utilisées : tâche « Active A » appartenant au compte A.
- Actions :
  1. Ouvrir /task/activeall.
  2. Vérifier la présence de « Active A ».
  3. Recharger la page et vérifier à nouveau.
- Résultat attendu : « Active A » est affichée avant et après rechargement.
- Résultat obtenu : [à compléter après le test.]
- Statut : non exécuté.

### LISTE-02 — Tâches terminées non affichées

- Objectif : vérifier que la liste active exclut les tâches terminées.
- Préparation : être connecté au compte A. Ses tâches « Active A » et « Terminée A » existent avec les bons états.
- Données utilisées : « Active A » et « Terminée A ».
- Actions :
  1. Ouvrir /task/activeall.
  2. Vérifier que « Active A » est présente.
  3. Vérifier que « Terminée A » est absente.
- Résultat attendu : la tâche active est affichée, mais pas la tâche terminée.
- Résultat obtenu : [à compléter après le test.]
- Statut : non exécuté.

### LISTE-03 — Tâches d’un autre compte non affichées

- Objectif : vérifier qu’un utilisateur ne voit pas les tâches d’un autre.
- Préparation : être connecté au compte A. « Active A » appartient à A et « Active B » appartient à B. Les deux tâches existent et sont actives.
- Données utilisées : comptes A et B, tâches « Active A » et « Active B ».
- Actions :
  1. Ouvrir /task/activeall avec le compte A.
  2. Vérifier que « Active A » est présente et « Active B » absente.
  3. Se déconnecter puis se connecter au compte B.
  4. Ouvrir /task/activeall.
  5. Vérifier que « Active B » est présente et « Active A » absente.
- Résultat attendu : chaque compte voit sa propre tâche, mais pas celle de l’autre.
- Résultat obtenu : [à compléter après le test.]
- Statut : non exécuté.

## 3 Expliquer vos priorités

Je vérifie d’abord TACHE-03 et LISTE-03, car ils concernent la protection des accès et des données des utilisateurs.

Ensuite, INS-01, TACHE-01 et LISTE-01 permettent de vérifier le parcours principal : créer un compte, ajouter une tâche et la retrouver.

Enfin, INS-02, INS-03, TACHE-02 et LISTE-02 vérifient le refus des saisies incorrectes et le bon filtrage des tâches.

Les neuf cas seront testés.

## 4 Noter les résultats de la relance

- Les résultats sont-ils identiques à ceux du premier passage ?
  À compléter après les deux passages.

- Si un résultat change, quel cas est concerné et pourquoi ?
  À compléter après la relance.

- Preuves des deux passages :
  À compléter avec les liens vers les fichiers conservés dans resultats/.

Après exécution, remplacer « non exécuté » par :

- réussi : résultat conforme ;
- échoué : résultat différent de celui attendu ;
- bloqué : vérification impossible à cause d’un problème.
