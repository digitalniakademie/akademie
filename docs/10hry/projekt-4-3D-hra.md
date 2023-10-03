---
id: hry-godot-3Dgames
title: Programování
sidebar_label: "Projekt 4: 3D hra"
sidebar_position: 14
description: Tvorba 3D her v programu Godot, tutoriál s příklady
keywords: [godot, gaming, tutorial, import, export, vizualizace, 3D, blender, blender3d, instalace, nastavení, digitální modelování]
---

# Projekt 4: 3D hra

![image](./images/godot3.png)

## Jednoduchý 3D prototyp

### Jednoduchý 3D kontrolér hráče
Princip je obdobný jako u 2D verze.

1. Vytvoř 3D scénu
2. Vlož CharacterBody3D 
3. Vlož CollisionShape3D pod CharacterBody3D
4. Nastav CollisionShape3D (tvar Capsule)
5. Vlož 3D model hráče MeshInstance3D pod CharacterBody3D (tvar Capsule)
6. Připoj nový skript k CharacterBody3D a vyber základní template pro 3D kontrolér
7. Vytvoř scénu z 3D CSG uzlů (např. CSGBox3D), a **zapni u těchto objektů kolize** (CSDGShape3D : Use Collision). 
8. Přidej kameru a světla

Prohlédni si skript kontroléru a vyzkoušej scénu.

### 3D Prototyping

- CSGShape3D, snadná kolize


## Plánování a herní design
Tato fáze přípravy je také obdobná jako u 2D her. 

Příklady:

1. Design hry Labyrint

- Cíl: hráč dojde na konec labyrintu.

- Herní mechanika: hráč cestou sbírá objekty které mění fyziku labyrintu a vlastnosti herního avatara. 

:::info

Godot importuje 3D animace. Animace lze skriptovat nebo vytvářet přímo v programu Godot.

:::


## Vývoj 3D hry

### Assety a textury
### 3D kontrola hráče
### Programujeme protivníky
### Mapy
### Efekty
### Menu systém


## Nastavení pro Blender

Godot dobře spolupracuje s programem Blender, který budeme používat pro tvorbu assetů.

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







