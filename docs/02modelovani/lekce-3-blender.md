---
id: lekce-3-blender
title: 3D Modelování
sidebar_position: 5
---

# Lekce 03: Efektivní osvětlení a render
## Render Engines
Render Engine je software, který umožňuje algoritmický výpočet scény do digitálního obrazu nebo animace, také se často stará o zobrazení v reálném čase.
Blender v základní instalaci umožňuje přepínat mezi:
- Workbench
- Evee
- Cycles

Další je možné doinstalovat, například:

*Volně dostupné:*
- Cycles-X
https://builder.blender.org/download/experimental/
- LuxCoreRender
https://luxcorerender.org/download/
- Appleseed
https://appleseedhq.net/download.html


*Komerční projekty:*
- Vray
- Renderman
- Corona
- OTOY Octane Render (Trial)
https://home.otoy.com/render/octane-render/demo/
- Radeon Pro Render (Zdarma)
 https://www.amd.com/en/technologies/radeon-prorender-downloads
- NVIDIA Omniverse (ve vývoji)

V kurzech budeme používat Workbench (pro konstrukci a modelování), Evee a Cycles/Cycles-X (pro render).

:::note Poznámka

Nastavení materiálů a světel je většinou specifické pro renderovací modul (*Render Engine*). Některé moduly mají vlastní materiálové uzly a nastavení.
Některé efekty materiálů, světel a stínování jsou správně zobrazitelné pouze v daném modulu.

:::

## Světelné zdroje
### Světelné objekty
![image](../img/blender01-edit.svg)

### Environmentální osvětlení
#### HDR
#### Sky Texture

## Render

### Evee
Tento engine má skvělou rychlost a vytváří vynikající stylizované rendery. Nedokáže ale dobře realistická skla a optické efekty. Občas také vznikají obrazové artefakty.

:::note Prosvítání objektem

Chyby stínování v Evee se dají odstranit v sekci Render Properties ‣ Shadows (Zvýšit Cube Size na 2048 a zaškrtnout High Bit Depth).

Nedoléhající stíny se dají opravit v nastavení **světla** v Object Data Properties ‣ Shadow ‣ zaškrtnout Contact Shadows

:::

### Cycles
Realističtější a podstatně pomalejší engine. Některé efekty fungují pouze s Cycles.

:::note úkol

Vyzkoušejte tvorbu objektů a transformace.

:::
