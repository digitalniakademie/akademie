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

### IES světla pro Cycles

![Blender světla IES](./images/blender-ies.png 'Blender IES Standard')

Přiřazením IES profilu vytvoříme realistická světla podle specifikací výrobce lampy. IES profily získáš na stránkách výrobce, nebo z online databází.
- IES profil přiřadíme k bodovému zdroji (aktivuj **Use Nodes** v Object Data Properties světla a vyber soubor z disku volbou Strength/IES Texture, Source : External)
- aby nastavení Blender světla nekolidovalo s IES profilem, nastavíme **intenzitu (Power) na 0,1-0,5W a rádius světla na 0**.
- online databáze simulovaných světel např. https://ieslibrary.com/en/home
- teplotu světla nastavíš podle dokumentace ke svítidlu, v kolonce Color nastav Blackbody (výběr kliknutím na žlutý puntík), a správnou teplotu v Kelvinech (najdeš v databázi nebo v katalogu, zpravidla v rozmezí kolem 1500-5500K)

![Blender teplota světla IES](./images/blender-ies-kelvin.png 'Blender IES Standard Kelvin Temperature from 1500K to 5500K')

### Environmentální osvětlení
Realistické osvětlení pomocí materiálu scény, zpravidla fotografickou HDRi texturou.
- nejrychlejší nastavení v tabu World, v položce color (žlutá tečka) vybrat Environmental texture

## Instalace Studio Lights, Matcaps a HDRi

#### HDR
HDRi lze používat v materiálovém náhledu i bez nastavení uzlů.
#### Matcaps
Materiál Matcap pro náhledy a modelování můžeš vytvořit v Blenderu nebo importovat.

![MatCaps a Blender Viewport](./images/blender-matcaps.png 'Blender 3D MatCaps')

Jedná se o osvětlenou sféru s materiálem (v grafickém formátu .exr nebo .png). Zobrazuje se ve stínování náhledu *Solid*.

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

- pro náhledy v pracovním okně stačí nastavit Max Samples 16
- pro finální render záleží na typu scény a použití Denoiseru, často stačí maximálně 32-256 samplů. Pro scény s velkým šumem je třeba experimentovat
- v Advanced a Light Paths experimentuj s nastavením

:::note úkol

Vyzkoušejte tvorbu objektů a transformace.

:::
