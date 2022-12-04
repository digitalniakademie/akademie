---
id: 3D-blender-questions-answers
sidebar_position: 12.9
description: Jak vybrat kolekci v Blenderu? Jak renderovat jenom viditelné objekty? Tipy pro Blender
keywords: [questions, answers, otázky, odpovědi, tipy, default, add-on, addon, default file, preferences, blender, blender3d, instalace, nastavení, digitální modelování]
---

# Blender: Otázky a odpovědi

### Navigace

#### Jak vyberu všechny objekty v kolekci?
V Outlineru klikni pravým tlačítkem na název kolekce, vyber Select Objects. Ve 3D pohledu pomocí zkratky  Vybrat Seskupené (Select Grouped) <kbd>Shift</kbd>+<kbd>G</kbd>, volba Kolekce. Na to můžeš nastavit zkratku, např. <kbd>Ctrl</kbd>+<kbd>LMB</kbd>.

#### Jak renderovat pouze viditené objekty? Skryté objekty se snadno zapomenou ve scéně a zkazí render.
Zkratka <kbd>H</kbd> skryje objekty jenom ve scéně. Se žádným vybraným objektem pomocí <kbd>Alt</kbd>+<kbd>H</kbd> zobraz všechny skryté objekty. V Outlineru klikni s klávesou <kbd>Alt</kbd> na ikonu zobrazení v renderu. Ještě lepší řešení je přesunout všechny objekty, které nechceš renderovat pomocí <kbd>M</kbd> do nové kolekce a tu schovat v Outlineru. Do ní pak přímo přesouvej objekty, které chceš schovat.

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

#### Oprava převrácených normál: Jak zobrazit orientaci ploch a jejich normály?

V **Edit módu** nastav Overlay v menu vpravo nahoře, volba Face Orientation. Normály převrátíš v menu <kbd>Alt</kbd>+<kbd>N</kbd> volbou Flip u vybraného segmentu (volby Recalculate Outside/Inside umožňují snadnou opravu modelů, kde by se muselo manuálně vybírat mnoho ploch).

#### Převrácené normály nejdou opravit pomocí Recalculate Outside/Inside.

To zpravidla znamená, že je chybná geometrie objektu, duplicitní vertexy, plochy nebo hrany atp.
Na opravu použij nástroje Merge by Distance, nástroje z menu Síť/Vyčistit a nástroj Make Manifold z addonu 3D-Print Toolbox. Potom zkus Recalculate Outside znovu.


### Textury
### Render
