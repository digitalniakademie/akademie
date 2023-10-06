---
id: hry-godot-animace
title: Programování
sidebar_label: "Godot: Animace a křivky"
sidebar_position: 6
description: Animace 2D a 3D objektu a textur, Godot pro programování her a aplikací
keywords: [godot, gaming, tutorial, import, export, vizualizace, 3D, blender, blender3d, instalace, nastavení, digitální modelování]
---

# Godot: Animace a křívky


![image](./images/godot3.png)

## Animace objektů a vlastností

Jednoduchá animace pomocí skriptu.

```gdscript
var movement = Vector2(2, 0)

func _process(delta):
	$Test3.position += movement
```

### Pivot pro skriptové animace
- Nastavit střed otáčení v menu


## Animace 2D figury hráče

- pomocí spritů nebo komponentů (plošková animace) a skeletonu
- AnimatedSprite2D

### Automatické rozřezání nepravidelného spritesheetu

- přidej texturu do Sprite2D
- Sprite2D/Region - Enabled
- Edit Region, režim Automatický řez

![image](./images/sprite2D-autocut.jpg)


-  pomocí AnimatedSprite SpriteSheet funkcí

## Animace spritů 

## Animation player

## Animation tree 

- Blend position


## Formáty

:::info

Godot importuje **gLTF** a .blend. FBX formát vyžaduje použití konvertoru https://github.com/godotengine/FBX2glTF.

:::

## Textury 


## Godot a Blender: Import animací

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







