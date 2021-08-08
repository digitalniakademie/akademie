---
id: lekce-2-freecad
title: CAD
sidebar_position: 3
---

# Parametrické a přímé modelování

Co je **parametrické modelování** (*Parametric Modeling*)? Je to modelování pomocí definice vzájemných vazeb mezi objekty. Může to být vzájemná vzdálenost, tečnost, rovnoběžnost nebo třeba úhel. Výhodou je přesnost a snadné vytváření variant objektů, pokud jsou vazby (*Constraints*) správně nadefinovány. Další výhodou je možnost využití externích dat (například ve formě .csv databázové tabulky) pro tvorbu objektů.

Co je **přímé modelování** (*Direct Modeling*)? Je to 3D kreslení a modelování, kde jsou vazby mezi komponenty volné. Rozměry jsou definované jednotlivě. Přímé modelování je vhodné pro vytváření skic a konceptů.

Programy často kombinují oba přístupy.

## Koncepty
### Manifold Geometry

## První projekt

Užitečná zkratka pro celkový pohled: View Full <kbd>V</kbd> <kbd>F</kbd>. Zkratka pro bohled na vybrané: View Selected <kbd>V</kbd> <kbd>S</kbd>.

Hierarchie (Combo View).
- Nový dokument
- Part
- Body (Aktivní Tělo je zvýrazněné **tučně**)
- Sketch
Trim. Pak vybrat a smazat.
- Extrude

- Vazby (Constraints)

Vazby je možné definovat mezi vrcholy a hranami objektů i mezi osami.

**Vertikální vazba** <kbd>Shift</kbd>+<kbd>V</kbd>
**Horizontální vazba** <kbd>Shift</kbd>+<kbd>H</kbd>
Korpus, součástka, sklenice

**Symetrická vazba** (*Symmetric Constraint*) je vhodná pro parametrické modelování součástek. Vyber osu a body na skice a nastav symetrickou vazbu.

Výsledný objekt (v modulu Part Design i Sketcher) musí být spojitý! **Tělo** (Body) je tady vždy spojité těleso. Pro další části je nutné vytvořit další tělesa v hierarchii. Skica musí být uzavřená křivka.

Přestože lze součásti (hrany, plochy) volně vybírat, měnit lze pouze součásti aktivního Těla (Body), vybraného v seznamu Kombinované zobrazení (Combo View).

## Technický výkres

## 3D tisk



:::note úkol

Vymodelovat plně definovaný objekt a exportovat pro Blender.

:::
