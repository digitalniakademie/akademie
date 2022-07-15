---
id: lekce-7-blender
title: 3D Modelování
sidebar_position: 9
---

# Sculpting
Sochařství 1-3 lekce. Úvod. Postupy. Základy.

## Digitální sochařství
Pracovní plocha a nástroje.

### Koncept práce
- blokování a remeshing
- struktura
- topologie
- podobnost s klasickou technikou

:::tip Rychlost v pracovní ploše Sculpting

 Při modelování vypni modifikátory ovlivňující geometrii modelu, především Subdivision.

:::

## Pracovní plocha pro sculpting

- statistika složitosti modelu Edit ‣ Preferences ‣ Interface   ‣ Editors ‣ Status Bar
- Viewport Statistics zapneš v liště Overlays ‣ Statistics

- Edit ‣ Preferences ‣ Navigation ‣ Orbit & Pan ‣ Orbit Around Selection

:::note Poznámka

 Pracovní plochu pro vertikálni práci na konvertibilních zařízeních nebo vertikálních monitorech si ulož jako profil plochy.

:::

Zkontroluj funkčnost tabletu. Podle typu pera, nastav tlačítka, right click, middle button. Vypni Windows link. Protože nemáš skrolovací tlačítko, funkčnost ovládáš na klávesnici. Příklad nastavení u tabletu Wacom.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="jazykova-verze"
  defaultValue="czv"
  values={[
    {label: 'V české verzi', value: 'czv'},
    {label: 'V anglické verzi', value: 'env'},
  ]
}>
<TabItem value="czv">Upravit ‣ Předvolby ‣ Rozhraní ‣ Vstup</TabItem>
<TabItem value="env">Edit ‣ Preferences ‣ Interface ‣ Input</TabItem>
</Tabs>
Tady také nastavíš emulaci numerické klávesnice a v polních podmínkách ovládání pomocí touchpadu.

## Nástroje
- nejčasteji používané nástroje
- uživatelské štětce
- výběr metody tahu (*Stroke Method*) <kbd>E</kbd>

## Symetrie

- možnosti v šipce za ikonou symetrie v horní liště a v postranním panelu Tool
- Tiling

## Dyntopo a Remeshing

- kontola počtu polygonů
- Fix Poles pro pravidelnější rozložení polygonů (*topology flow*)

## Maskování
Maskování v režimu Layout a Sculpting.

Jak vrátit pracovní plochu do původního nastavení: Nastavení plochy se ukládá do souboru. V dialogu  otevření souboru otevřete Settings (ikona kolečka) a odškrtněte Načíst UI (Load UI v anglické verzi).

- Auto-Masking v Options

## Hard Surface postupy

- tutorial
- retopologie (Retopo)
- subdivize a styly modelování
- modifikátory Decimate, Weld
- Tris to Quads, Limited Dissolve, Merge by Distance

## Organické modelování

- skicování
- UV mapping a export
- úrovně detailů a omezení počtu polygonů

## Sochařství pro film a interaktivní zábavu

- konceptuální sochařství
- modelování pro animace, kostry a pomocné struktury
- tvorba loutek
