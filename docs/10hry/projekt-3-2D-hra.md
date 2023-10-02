---
id: hry-godot-2Dhra
title: Programování
sidebar_label: "Projekt 3: 2D hra"
sidebar_position: 12
description: Import 3D modelu a textur, optimální nastavení programu Godot pro programování her
keywords: [godot, gaming, tutorial, import, export, vizualizace, 3D, blender, blender3d, instalace, nastavení, digitální modelování]
---

# Projekt 3: 2D hra

![image](./images/godot3.png)

Vytvoření scén, herní mechaniky a volný pohyb pomocí kontroléru (myš, klávesnice).

## Jednoduchý 2D prototyp

### Jednoduchý 2D kontrolér hráče
Princip je obdobný jako u 2D verze.

1. Vytvoř 2D scénu
2. Vlož CharacterBody2D 
3. Vlož CollisionShape2D pod CharacterBody2D
4. Nastav CollisionShape2D (libovolný tvar, Circle nebo Capsule)
5. Vlož 2D sprite, který bude představovat hráče pod CharacterBody2D
6. Připoj nový skript k CharacterBody2D a vyber základní template pro 2D kontrolér
7. Vytvoř scénu/level ze Sprite2D objektů, s vnořenými uzly StaticBody2D a CollisionShape2D, a **nastav u těchto objektů kolizní tvary**. 
8. Přidej a nastav kameru a připoj jí k CharacterBody2D

Prohlédni si skript kontroléru a vyzkoušej scénu.

### TileMap: Tilesety a design levelů

- nastavení kolizí
- vytvoření dlaždic pro tileset

## Plánování a herní design

1. Staveniště 

- Cíl: opravit stavební jeřáb pomocí náhradních dílů
- Herní mechanika: Hráč sbírá díly rozmístěné v rozestavěné budově. Nepřátelé: Padající cihly, vrány, vzteklý hlídač, ufo.

:::info

Godot importuje 2D animace. 2D animace je možné vytvářed v programu Krita.

:::


## Vývoj

### Assety a textury
### 2D kontrola hráče
### Programujeme protivníky
### Mapy
### Efekty
### Menu systém



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







