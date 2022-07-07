---
id: lekce-3-blender
title: 3D Modelování
sidebar_position: 5
---

# Lekce 03: Efektivní osvětlení, kamera a render
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
## Workbench (Režim zobrazení Solid)
Viewport Workbench je určený pro modelování a přehledné zobrazení geometrie. Nastavení možností je v liště vpravo nahoře.
- nastavení stínu a kavity zlepšuje přehlednost
- zaškrtnutí Depth of Field zobrazuje hloubku ostrosti aktivní kamery (v kamerovém náhledu), je to rychlejší způsob nastavení DoF pro jednotlivou scénu a animace

![image](./images/blender-solid-viewport.png)

Render náhledu je v menu v pracovním 3D okně ‣ View ‣ Viewport Render Image.

## Kamera
- kamerová sestava (*Camera Rig*) umožňuje snadnější ovládání kamery ve scéně
- zamčení pohledu kamery na objekt pomocí Object Constraint Properties (*Track to*)
- hloubka ostrosti a parametry kamery
- camera tracking data
## Světelné zdroje
Osvětlení scény je kombinací různých světelných zdrojů i odrazů či vyzařování objektů ve scéně.
- typy světel, nastavení pro různé render enginy
- tracking a rigging světel
### Světelné objekty
Objekty mohou osvětlovat scénu materiálem přiřazeným celému povrchu nebo skupině ploch.

### Environmentální osvětlení
Realistické osvětlení pomocí materiálu scény, zpravidla fotografickou HDRi texturou.
- nejrychlejší nastavení v tabu World, v položce color (žlutá tečka) vybrat Environmental texture

## Instalace Studio Lights, Matcaps a HDRi
HDRi lze používat v materiálovém náhledu i bez nastavení uzlů.
#### HDR
#### Sky Texture
Textura generovaná parametricky v Blenderu.
## Render

### Evee
Tento engine má skvělou rychlost a vytváří vynikající stylizované rendery. Nedokáže ale dobře realistická skla a optické efekty. Občas také vznikají obrazové artefakty.

:::note Prosvítání objektem

Chyby stínování v Evee se dají odstranit v sekci Render Properties ‣ Shadows (Zvýšit Cube Size na 2048 a zaškrtnout High Bit Depth).

Nedoléhající stíny se dají opravit v nastavení **světla** v Object Data Properties ‣ Shadow ‣ zaškrtnout Contact Shadows

:::

### Cycles
Realističtější a podstatně pomalejší engine. Některé efekty fungují pouze s Cycles.

### Zrychlení renderování pro Cycles

Optimalizace. Správné nastavení pro Path Tracing.

:::note úkol

Vyzkoušejte tvorbu objektů a transformace.

:::
