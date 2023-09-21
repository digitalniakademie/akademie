---
id: hry-godot-gdscript
title: Programování
sidebar_label: "Godot: GDScript"
sidebar_position: 4
description: Instalace a optimální nastavení programu Godot pro programování her
keywords: [godot, gdscript, tutorial, export, vizualizace, 3D, blender, blender3d, instalace, nastavení, digitální modelování]
---

# Godot: GDSCript

## Konstanty  a proměnné

Typy proměnných jsou definované způsobem zapsání (1 je integer, 1.0 float). To je třeba zohlednit v matematických operacích: 3/2=2 (operace integer), 3/2.0=1.5.

```jsx {0} title="GDSCRIPT" showLineNumbers
const NUMBER = 5
var number = 3
```

## Rezervovaná slova

- konstanty, proměnné, funkce

## Funkce

:::info KONCEPT EDITORU
Ovládání editoru je velice podobné editorům Unity a Unreal.
:::

Stáhni a rozbal instalační soubor pro tvojí verzi systému.
Program se neinstaluje a lze ho rovnou spustit z adresáře.

## Proměnné ve scéně: Lokální proměnné a export proměnných

Anchor

## Anotace
Anotace je druh tokenů, začínajících znakem @. Příklad exportu proměnných do editoru:

```jsx {0} title="GDSCRIPT" showLineNumbers
@export_group("My Properties")
@export var number = 3
```

![image](./images/gdscript-anotations-exports.jpg)


## Data Container

## Zdroje (Resources)

## GDScript reference

- [GDScript základy v češtině](https://docs.godotengine.org/cs/stable/tutorials/scripting/gdscript/gdscript_basics.html)
- [GDScript základy v angličtině](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html)
- [gdscript.com](https://gdscript.com/tutorials/)
- [GDScript Guide](https://gamedevacademy.org/complete-gdscript-godot-tutorial/)





