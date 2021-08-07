---
id: lekce-7-blender
title: 3D Modelování
sidebar_position: 10
---

# Pro pokročilé: Architektura a design


## Design
Nutné funkce a řešení:
- práce v měřítku
- možnost překreslování
- parametričnost
- blokování, linkování a zástupné Objekty
- export a import

## Architektura
- vizualizace
- knihovny materiálů a objektů
- parametrické zadávání

Blender podporuje BIM (Building Information Modeling) pro konstrukční dokumentace přes volně dostupný BlenderBIM Add-on (dříve IFC Exporter).

Stáhni aktuální verzi na https://blenderbim.org/download.html.

Nainstaluj plugin (stažený soubor **.zip**) do Blenderu.

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
<TabItem value="czv">Upravit ‣ Předvolby ‣ Rozšíření ‣ Nainstalovat</TabItem>
<TabItem value="env">Edit ‣ Preferences ‣ Add-ons ‣ Install</TabItem>
</Tabs>

Addon je ve vývoji.

:::note Poznámka

Architektura a design mají podobné požadavky na vizualizaci, liší se v měřítku a konceptu scény.

:::

## Realistický a stylizovaný render
Pro prezentaci konceptu je vhodnější stylizované ztvárnění.
Realistický styl je pro finální verze projektu.

## Prototypy a CAD/CAM
Podporované formáty pro 3D tisk.
