# TP 4 — Introduction à JavaScript

> **Master SDIA**
>  
###Massane Fatima-Zahra
---

## Structure des fichiers

```
TP4/
├── ex1.html   → Exercice 1  : Conversion de températures
├── ex2.html   → Exercice 2  : Conversion de durées (basique)
├── ex3.html   → Exercice 3  : Conversion de durées (améliorée)
├── ex4.html   → Exercice 4  : Classer 3 nombres
├── ex5.html   → Exercice 5  : Affichage de motifs - escaliers
├── ex6.html   → Exercice 6  : Affichage de motifs - pyramide
├── ex7.html   → Exercice 7  : Tester si un nombre est premier
├── ex8.html   → Exercice 8  : Suite de Fibonacci
└── ex9.html   → Exercice 9  : Valeur approchée de la racine carrée
```

---

##  Détail des exercices

### Exercice 1 — Conversion de températures (`ex1.html`)

Fonction `ma()` qui convertit une température de **Fahrenheit en Celsius** à l'aide de la formule :

```
tempC = (5/9) × (tempF − 32)
```

**Exemple :**
```
Entrée  : 60
Sortie  : 15.555...°C
```

---

### Exercice 2 — Conversion de durées (`ex2.html`)

Fonction `date()` qui convertit un nombre de **secondes** en son équivalent en **jours, heures, minutes et secondes**.

**Exemple :**
```
Entrée  : 235789
Sortie  : 2 jours 17 heures 29 minutes 49 secondes
```

---

### Exercice 3 — Conversion de durées améliorée (`ex3.html`)

Version améliorée de l'exercice 2 avec la fonction `Amlioerer()` :

- Les unités **nulles** n'apparaissent pas dans l'affichage
- Les unités au **singulier** (valeur = 1) s'affichent sans `s`

**Exemple :**
```
Entrée  : 3621
Sortie  : 1 heure 21 secondes
```

---

### Exercice 4 — Classer 3 nombres (`ex4.html`)

Fonction `orderNumbers()` qui saisit 3 nombres et les affiche dans l'**ordre croissant**.

**Exemple :**
```
Entrées : 14, 10, 17
Sortie  : 10, 14, 17
```

---

### Exercice 5 — Motifs en escalier (`ex5.html`)

Deux fonctions pour afficher un **triangle d'étoiles** de taille `n` :

| Fonction     | Boucle utilisée |
|--------------|-----------------|
| `triangle1`  | `while`         |
| `triangle2`  | `for`           |

**Exemple pour taille = 4 :**
```
*
**
***
****
```

---

### Exercice 6 — Motif pyramide (`ex6.html`)

Fonction `pyramide(taille)` qui affiche une **pyramide centrée** d'étoiles.

**Exemple pour taille = 4 :**
```
   *
  ***
 *****
*******
```

---

### Exercice 7 — Nombre premier (`ex7.html`)

Fonction `estPremier()` qui teste si un entier positif est un **nombre premier**.

- Utilise la borne `√n` pour optimiser la recherche
- Affiche le premier diviseur trouvé si le nombre ne l'est pas

**Exemples :**
```
Entrée : 7   → "7 est un nombre premier"
Entrée : 25  → "25 n'est pas un nombre premier, il est divisible par 5"
```

---

### Exercice 8 — Suite de Fibonacci (`ex8.html`)

Deux fonctions autour de la suite de Fibonacci définie par :  
`u₀ = 0, u₁ = 1, u_{n+1} = u_n + u_{n-1}`

| Fonction | Description |
|----------|-------------|
| `Fibo1()` | Calcule le **nᵉ terme** de la suite |
| `Fibo2()` | Trouve le **premier terme supérieur** à une valeur donnée |

**Exemple Fibo2 :**
```
Entrée : 100
Sortie : Le premier terme supérieur à 100 est 144 au rang 12
```

---

### Exercice 9 — Racine carrée approchée (`ex9.html`)

Fonction `Raca1()` qui calcule la **racine carrée approchée** d'un réel `A ∈ [1, 100]` par la méthode de récurrence :

```
u₀ = A/2
u_{n+1} = (1/2) × (uₙ + A/uₙ)
```

L'algorithme s'arrête quand `|uₙ² − A| < 10⁻⁶`.

**Exemple :**
```
Entrée : 19.23
Sortie : Valeur approchée de la racine carrée = 4.385202389856321
```

---

##  Technologies utilisées

- **HTML5**
- **JavaScript **

---


