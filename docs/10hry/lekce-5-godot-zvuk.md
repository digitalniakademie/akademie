---
id: hry-godot-zvuk
title: Programování
sidebar_label: "Godot: Zvuk"
sidebar_position: 6.5
description: Animace 2D a 3D objektu a textur, Godot pro programování her a aplikací
keywords: [godot, gaming, tutorial, import, export, vizualizace, 3D, blender, blender3d, instalace, nastavení, digitální modelování]
---

# Godot: Zvuk

## Formáty

:::info

Godot importuje **.wav** (vhodné pro efekty),  **mp3** a **.ogg** (pro hudbu).

:::

## Zvukový systém 

- AudioStreamPlayer

![image](./images/godot3.png)

### Audio mixér (Bus) 

- přidej v Audio tabu

## Zvukové uzly 

- 2D a 3D prostor

## Skriptování zvuku pro zvukové efekty (SFX)

- AudioServer
- FADE IN/OUT pomocí tweens

## Sound Design 

### Syntéza zvuku 

[Sfxr (stáhnout zde)](https://github.com/tomeyro/godot-sfxr) je plugin, který rozšiřuje možnosti AudioStreamPlayer uzlu a vytváří syntetické zvuky. Instalace je stejná jako u všech pluginů/addonů (instalace z *Godot Asset Library* nebo stažení a rozbalení do adresáře **addons** v projektu a aktivace pluginu v **Project ‣ Project Settings ‣ Plugins**). 

### Efekty 


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
<TabItem value="czv">Editor ‣ Nastavení editoru ‣ FileSystem ‣ Import ‣ Blender ‣ Blender Path</TabItem>
<TabItem value="env">Editor ‣ Editor Settings ‣ FileSystem ‣ Import ‣ Blender ‣ Blender Path</TabItem>
</Tabs>







