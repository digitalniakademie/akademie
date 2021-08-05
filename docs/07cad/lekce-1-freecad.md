---
id: lekce-1-freecad
title: CAD
sidebar_position: 2
---

# Instalace a nastavení programu FreeCAD

<!-- Options, autoload workbench. Part designer -->
Najdi aktuální verzi na https://https://www.freecadweb.org/. Stáhni a spusť soubor.  Po instalaci spusť program FreeCAD. Pokud používáš Package Manager pro Windows, nejnovější stabilní verzi nainstaluješ příkazem

```
winget install freecad
```

## Základní nastavení modulů
Start Workbench. Export.

## Systém práce v programu FreeCAD

FreeCAD je **modulární** software na principu pracovních prostředí (*Workbench*). Filozofie práce v programu je odlišná od jiných modelovacích programů.

Princip propojení modulů. (Part Design, Sketcher)

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
Skutečný štětec je jako razítko, které se pohybuje po médiu a přenáší na něj barvu. Tvar, materiál a rychlost štětce určuje deformace během tahu a charakter stopy. V softwaru se tento efekt simuluje přenášením modifikací tvaru profilu štětce (většinou textura s průhledností) a dynamikou a rychlostí tahů pera grafického tabletu. Program Krita nabízí řadu funkčních algoritmů štětců (*Brush Engines*), které jsou vhodné pro vytváření různých kreslících nástrojů. Každý kreslící nástroj (i tužka nebo pero) je z pohledu programu štětec (*Brush*).

![image](./images/krita-stetce.png)

### Předvolby štětců
:::note tip
Nastavení počtu zobrazených předvoleb štětců na vyskakovací paletě najdeš v hlavním menu:

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


### Skupiny štětců
Štětce jsou rozdělené do určených skupin podle štítků (tagů). Základní skupiny si můžeš prohlédnout i ve vyskakovací kruhové paletě (*Pop-up Palette*), kterou zobrazíš pravým tlačítkem, pokud máš vybraný nějaký kreslící nástroj. Vlastní skupiny lze vytvářet. Štětce můžeš upravovat a importovat i exportovat jako sety. Více o vytváření vlastních štětců  a balíčcích zdrojů (*Resource Bundles*) v lekci Vlastní štětce a zdroje.

Vyzkoušej si úpravu štětce. Vyber štětec X a v předvolbě štětců nastav texturu vzoru. Potom nastav texturu povrchu. Vyzkoušej štětec. Základní nastavení vrátíš ,,,

:::note úkol

Vyzkoušej si různé skupiny štětců. Zapni a vypni texturu u štětce.

:::

![image](../img/aka-moc.svg)

:::note úkol

Vystínovat těleso tonální technikou.

:::
