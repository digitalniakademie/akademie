---
id: lekce-0-blender-preferences
title: 3D Modelování
sidebar_label: "Doporučená nastavení"
sidebar_position: 2.2
description: Vytvoření optimálního spouštěcího souboru a předvoleb Blenderu pro profesionální práci
keywords: [default, default file, preferences, blender, blender3d, instalace, nastavení, digitální modelování]
---

# Blender: Doporučené nastavení předvoleb a spouštěcího souboru

## Předvolby a spouštěcí soubor
Nastavení předvoleb ti ušetří spoustu času. Toto je doporučené nastavení pro začátečníky a mírně pokročilé. Do souborů se ukládá nastavení preferencí programu, nastavení základního souboru a nastavení nastavení addonů.

Aktuální doporučené nastavení na videu.


### Nastavení pro Evee, Workbench a Cycles

![image](./images/blender-nastaveni-cz-en.png)

:::note Poznámka

 Pro výsledný render lze nastavení změnit. Jednotlivá nastavení uložíš v minimenu. Změněná nastavení renderu se ukládají do .blend souborů.

 ![image](./images/blender-renderset.png)

:::

### Zobrazení v pracovním okně

- nastavení (*Face Orientation*) umožňuje snadno vidět převrácené normály

![image](./images/face-orientation.png)

- nastavení stínování dutin (*Cavity*) vylepšuje vidění tvaru objektu při modelování v režimu zobrazení **Plný** (*Solid*)

![image](./images/cavity-dutiny.png)



### Nastavení Outlineru

- Jak zamknout objekt pro výběr? Nastavíš zobrazení ikony Zakázat Výběr (ikona zámku vybrání objektu v Outlineru)

![image](./images/outliner.png)

:::info Uložení změn
Nastavení uložíš pro základní soubor tady:
<Tabs
  groupId="jazykova-verze"
  defaultValue="czv"
  values={[
    {label: 'V české verzi', value: 'czv'},
    {label: 'V anglické verzi', value: 'env'},
  ]
}>
<TabItem value="czv">Soubor ‣ Výchozí ‣ Uložit Spouštěcí Soubor</TabItem>
<TabItem value="env">File ‣ Defaults ‣ Save Startup File</TabItem>
</Tabs>

:::

## Nastavení předvoleb (Preferences)
Předvolby změníš v menu:

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
<TabItem value="czv">Upravit ‣ Předvolby</TabItem>
<TabItem value="env">Edit ‣ Preferences</TabItem>
</Tabs>

### Interface
- Display
- Editors/Status Bar
### Themes
- 3D Viewport, nastavení overlay alpha pro flipped normals
- větší velikost vertexů
### Navigation
- Orbit Around Selection
- Perspective, Depth
- Zoom to Mouse Position
### Keymap
- Spacebar Action na Tools
- Alt Click Tool, Alt Tool, Select All
- Pie Menu on Drag, Extra Shading Pie Menu
### System
- nastavení grafické karty (důležité pro využití akcelerace GPU)
- Undo steps 64+

**Uložíme nastavení** v hamburger menu vlevo dole (Save Preferences). Nastavení základních rozšíření (addonů) si ukážeme v další lekci.

## Nastavení a zálohování spouštěcího souboru (Windows)
:::info Uložení a zálohování nastavení pro pokročilé
Uživatelská nastavení a spouštěcí soubor (nastavení pracovních ploch a parametrů renderování) se ukládají do souborů  v konfiguračním adresáři

```
 C:\Users\YourUserName\AppData\Roaming\Blender Foundation\Blender\YourBlenderVersion\config
 ```
  Pokud adresář **AppData\Roaming** nevidíš, zapni zobrazování systémových souborů. Další instalace stejné verze (i portable) nahrává nastavení z této lokace, pokud manuálně nevytvoříš adresář *config* v lokálním umístění Blenderu:

  ```
   X:YourPath\YourBlenderFolder\YourBlenderVersion\config
   ```
:::
