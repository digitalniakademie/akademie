---
id: 3D-blender-questions-answers
title: 3D Modelování
sidebar_position: 12.9
---

# Blender: Otázky a odpovědi

### Modelování

#### Jak nastavím renderování scény v pracovním okně pouze u výřezu kamery? Celá scéna se v Cycles renderuje v náhledu zbytečně dlouho.

Aktivuj add-on Amaranth Toolset. V kontextovém menu přibude tato možnost: Camera as Render Border.

#### Jak nastavím přesné rozměry objektu?
V postranním panelu (N-panel) v sekci Item/Dimensions.

#### Chci nastavit přesné rozměry modelu a měnit velikost proporcionálně, ale nejde uzamknout osa jako při škálování (Scale).

V sekci Item/Dimension změníš délku v jedné ose (např. X) na požadovaný rozměr. Vypočítané škálování osy X v sekci Scale kopíruj do ostatních os v sekci Scale. Tak proporcionálně změníš Dimension na přesně danou velikost (když např. znáš pouze požadovanou délku jedné strany modelu). Předchozí transformace musí být předtím aplikované (Aplikovat transformace a modifikátory <kbd>Ctrl</kbd>+<kbd>A</kbd>), tj. základní Scale 1,1,1.   

#### Jak přesunout objekt na kurzor?

Vyber objekt, a z menu <kbd>Shift</kbd>+<kbd>S</kbd> volbu Selection to Cursor. Funkce se řídí polohou základního bodu (*Origin*), který lze u objektu měnit z kontextového menu (volba Set Origin).

#### Jak rozdělit Array na jednotlivé objekty?

Sestavu po aplikaci modifikátoru Array rozdělíš v Edit módu, vyber celou geometrii <kbd>P</kbd>, <kbd>P</kbd>, volba By Loose Parts.




### Textury
### Render
