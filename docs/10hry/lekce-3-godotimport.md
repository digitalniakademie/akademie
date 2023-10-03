---
id: hry-godot-import
title: Programování
sidebar_label: "Godot: Import 3D modelu"
sidebar_position: 5
description: Import 3D modelu a textur, optimální nastavení programu Godot pro programování her
keywords: [godot, gaming, tutorial, import, export, vizualizace, 3D, blender, blender3d, instalace, nastavení, digitální modelování]
---

# Godot: Import 3D modelu

## Formáty

:::info

Godot umožňuje pracovat s Blender **.blend** soubory. 
Godot importuje **gLTF**. FBX formát vyžaduje použití konvertoru https://github.com/godotengine/FBX2glTF.

:::

## Modely pro prototyping

Pro prototyp můžeš importovat vlastní model do uzlu **CSGMesh3D**. Model musí být uzavřený a mít korektní geometrii (zkontroluj pomocí addonu **3D-Print Toolbox** v Blenderu, m.j. funkce Cleanup/Make Manifold).

## Textury 

## Import animací

## Nastavení pro Blender

Nastav cestu k aktuálnímu adresáři, kde je blender.exe. To umožní importovat soubory typu **.blend.**


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







