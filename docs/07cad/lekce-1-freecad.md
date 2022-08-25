---
id: lekce-1-freecad
sidebar_position: 2
---

# Instalace a nastavení programu FreeCAD

<!-- Options, autoload workbench. Part designer -->
Najdi aktuální verzi na https://https://www.freecadweb.org/. Stáhni a spusť soubor.  Po instalaci spusť program FreeCAD. Pokud používáš Package Manager pro Windows, nejnovější stabilní verzi nainstaluješ příkazem

```
winget install freecad
```

## Základní nastavení modulů FreeCAD

1. Nastav pracovní plochu (Workbench) **Part Designer**.
2. Přejdi do menu **Upravit ‣ Předvolby** (*Edit ‣ Preferences*).

- V sekci Obecné (General) nastav Startup na Part Design (který budeš používat nejčastěji). Potom můžeš nastavit ikony (Size of toolbar icons) na *Large* nebo *Extra large*. Ze začátku se ti bude hodit, když dobře uvidíš, co je na ikonách – FreeCAD je založený na ikonových menu.

- V sekci Display nastav antialiasing (4× nebo 8×). Pick Radius zvyš na 1Opx a Marker Size na 13px – bude se ti hodit při vybírání objektů a vrcholů (na dotykových zařízeních použij vyšší hodnotu). V tabu Navigation můžeš nastavit místo volby CAD volbu Blender (pokud jsi zvyklý na ovládání Blenderu).

:::note Blender navigace

  Posun plochy <kbd>Shift</kbd>+<kbd>prostřední tlačítko</kbd>. Zoom <kbd>Ctrl</kbd>+<kbd>prostřední tlačítko</kbd>

:::

  Jestli máš dotekové zařízení, můžeš nastavit volbu Gesture. Ovládání ale se dá snadno přepínat během práce v hlavním okně vpravo dole.

- V sekci Part Design, tab General můžeš zaškrtnout všechny tři automatické kontroly (Začínající na Automatically...). V tabu Shape Appearance můžeš zvýšit Vertex size a Line width, pro přehlednost geometrie a snažší výběr objektů.

- V sekci Sketcher zaškrtni Show Grid, a můžeš zaškrtnout Grid snap. Obě volby lze měnit při používání nástrojů, ale přednastavení ti usnadní kreslení.

Klikni Aplikovat, pak OK a restartuj FreeCAD.

## FreeCAD Addons Repository - Render
Modul Render je ve vývoji a nedoporučuji ho používat.
<!--
Aby bylo možné renderovat z programu FreeCAD, je nutné nainstalovat modul FreeCAD Render Workbench (https://github.com/FreeCAD/FreeCAD-render).

Nainstaluje se z menu **Nástroje > Addon Manager** (*Tools > Addon Manager*).

Ze seznamu pracovních prostředí vyber Render (vpravo se objeví náhled FreeCAD Render Workbench). Vyber Install/update selected. Zavři okno a restartuj FreeCAD.

V seznamu pracovních prostředí je na posledním místě Render.

### LuxCoreRender ve FreeCADu
Stáhni opensource LuxCoreRender (https://luxcorerender.org/download/). Vyber **Standalone release** pro tvůj systém! Stažený .zip rozbal.

Po instalaci je nutné nastavit cestu k LuxCoreRender engine v menu **Upravit ‣ Předvolby ‣ Render** (*Edit ‣ Preferences ‣ Render*).

### Free CAD-rays a FreeCAD
Další možné řešení je program CAD-rays (
https://www.opencascade.com/products/cad-rays/). Je dostupný zdarma, ale vyžaduje vytvoření účtu a není open-source.

### Cycles a FreeCAD
Export objektu a nastavení scény v Blenderu v lekci Design a CAD/CAM.
-->
:::note doporučení
Vzhledem k možnostem je nejlepší open source volba k vytváření finálních prezentačních renderů pro FreeCAD program Blender, jako externí program.
:::
## Nastavení jednotek pro export FreeCAD > Blender

### .dae
Formát souboru pro export: **Collada .dae**

1. Pro skutečnou velikost nastav v Blenderu v nastavení scény systém jednotek Metrické, Délka: **Milimetry**.
Ve FreeCADu  v menu **Upravit ‣ Nastavení ‣ Import-Export** (*Edit ‣ Preferences ‣ Import-Export* v tabu DAE nastav **Měřítko** (*Scaling factor*) 1.

2. Pro pohodlnější prezentační velikost malých součástek  nastav Ve FreeCADu  v menu **Upravit ‣ Nastavení ‣ Import-Export** (*Edit ‣ Preferences ‣ Import-Export* v tabu DAE **Měřítko** (*Scaling factor*) 10 nebo 100.

Další možnost je vytvoření speciálního templatu (.blend) ve správném měřítku pro malé objekty (součástky), nebo manuální zvětšení/zmenšení:

### .stl
Soubory .stl se do Blenderu importují bez ohledu na jednotky scény (v případě milimetrů budou 1000× větší).

Správnou velikost nastavíš manuálně:
- označíš objekt ve scéně
- otevřeš postranní panel <kbd>N</kbd>, a změníš Rozměry

- nebo označíš objekt a stiskneš <kbd>S</kbd> jako Scale
- napíšeš **-1000** a potvrdíš <kbd>Enter</kbd>

:::note TRIS TO QUADS

Formáty .dae a .stl tvoří geometrii z trojůhelníků. Pro úpravy v Blenderu se ti mohou hodit spíše plochy z čtyřúhelníků (*Quads*). Vyber objekt v Blenderu a v editačním módu <kbd>Tab</kbd> označ všechny plochy. V menu **režimu** vyber **Plocha ‣ Trojůhelníky na čtyřúhelníky** (*Face ‣ Tris to Quads*), <kbd>Ctrl</kbd>+<kbd>J</kbd>. Pokud geometrie obsahuje jednoduché plochy, tak je převod bezchybný.

:::

## Systém práce v programu FreeCAD

FreeCAD je **modulární** software na principu pracovních prostředí (*Workbench*). Filozofie práce v programu je odlišná od kreativních modelovacích programů, je založená na parametrických definicích a příliš nepřeje experimentům.

FreeCAD je vynikající pro exaktní modelování součástek a designových forem nebo architektonických konstrukcí.

FreeCAD vyžaduje přesný postup a není vhodný ani určený pro volné modelování.

V kurzu se budeme hlavně věnovat propojení modulů Part Design a Sketcher.

Cílem kurzu je co nejjednodušší workflow pro design, dokumentaci a 3D tisk. Spolupráce s programy Blender (renderování) a Inkscape (design a výkresy) rozšiřuje možnosti programu FreeCAD a vytváří zajímavou kombinaci pro 3D tvorbu a design.

## Moduly pro kurzy
Kreslení konstruktivní (matematicky definované pomocí limitů, (*Constraints*).

Geometrie konstruktivní. Definice objektů parametry a limity.

- Sketcher

set orientation, pak kreslit
Constraints

- Part Design
Tento modul je vhodný pro navrhování součástek.

Metodologie.
Feature editing methodology. nacrt.

- TechDraw

**ISO a ASME** kótování technických výkresů.


Export a import 2D, 3D formátů.

Další funkce a moduly jako například analýza nebudeme v kurzu probírat. Jenom je stručně zmíníme.



## Nurbs
## Parametrické modelování
## Propojení s ostatními programy
Výhody a nevýhody.


:::note úkol

Vytvoř jednoduché rotační těleso.

:::
