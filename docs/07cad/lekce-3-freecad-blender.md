---
id: lekce-3-freecad
title: CAD
sidebar_position: 4
---

# Modelování ve FreeCADu a render v Blenderu

- workflow a typy souborů, odstraňování chyb

- workflow pro velké množství variant.

- automatický import do Blenderu

- úprava pro 3D tisk v Blenderu, .stl


Options, autoload workbench. Part designer

## Export:
- Vyber tělesa v seznamu Kombinované zobrazení (Combo View). Pro výběr více těles použij <kbd>Ctrl</kbd> nebo <kbd>Shift</kbd>.
- Použij <kbd>Ctrl</kbd>+<kbd>E</kbd> nebo menu Soubor ‣ Export.
- Použij formát Collada .dae, nebo .stl.

Barva tělesa přiřazená přes Kombinované zobrazení (Combo View) nebo přes <kbd>Ctrl</kbd>+<kbd>D</kbd> se vyexportuje do .dae.

## Workflow a práce v modulech FreeCAD

FreeCAD je **modulární** software na principu pracovních prostředí (*Workbench*). Filozofie práce v programu je odlišná od jiných modelovacích programů.

Cílem kurzu je co nejjednodušší workflow pro design. Spolupráce s programy Blender a Inkscape.

Dokumentace a 3D tisk.

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

ISO a ASME kótování technických výkresů.


Export a import 2D, 3D formátů.

Další funkce a moduly jako například analýza nebudeme v kurzu probírat. Jenom je stručně zmíníme.



## Nurbs
## Parametrické modelování
## Propojení s ostatními programy
Výhody a nevýhody.

Nejpoužívanější nástroje z doku Panel nástrojů (*Toolbox Docker*) jsou Štětec <kbd>B</kbd> , Pipeta <kbd>P</kbd> , nástroje výběru a transformace.

Doky (*Dockers*) jsou funkční okna, která můžeš přesouvat po pracovní ploše. Panel nástrojů prakticky nebudeš při malování používat příliš často, protože nejčastější nástroje budeš přepínat zkratkami (naštěstí je jich celkem málo). Každý nástroj má možnosti nastavení (*Tool Options*). V základním nastavení je najdeš vpravo nahoře mezi doky.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="jazykova-verze"
  defaultValue="czv"
  values={[
    {label: 'CZ verze', value: 'czv'},
    {label: 'EN verze', value: 'env'},
  ]
}>
<TabItem value="czv">Program máš v české verzi</TabItem>
<TabItem value="env">Program máš v anglické verzi</TabItem>
</Tabs>


## Part Designer
Popis použití.

### Koncept

:::note tip
Test:

 <Tabs
  groupId="jazykova-verze"
  defaultValue="czv"
  values={[
    {label: 'CZ verze', value: 'czv'},
    {label: 'EN verze', value: 'env'},
  ]
}>
<TabItem value="czv">Nastavení ‣ Nastavit aplikaci Krita ‣ Obecné ‣ Různé</TabItem>
<TabItem value="env">Settings ‣ Configure Krita ‣ General ‣ Miscellaneous</TabItem>
</Tabs>
:::


### Kreslení

:::note úkol

Parametrický model, plně definovaný.

:::
