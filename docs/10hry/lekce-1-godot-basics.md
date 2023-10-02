---
id: hry-godot-basic
title: Programování
sidebar_label: "Godot: Seznámení s uzly (základní ovládání, zkratky)"
sidebar_position: 3
description: Instalace a optimální nastavení programu Godot pro programování her
keywords: [godot, gaming, tutorial, export, vizualizace, 3D, blender, blender3d, instalace, nastavení, digitální modelování]
---

# Godot: Seznámení s uzly (základní ovládání, zkratky)

![image](./images/godot-nodes-ilu.jpg)

Scéna se skládá z uzlů různých typů. Každou aplikaci je možné vidět jako hierarchii vzájemně propojených uzlů, ke kterým jsou přiřazené skripty v jazyce GDSCRIPT. Uzly ve scéně si můžeme představit jako vnořené adresáře. Jednotlivé větve (Tree) spouští hlavní scéna, kterou je nutné označit v **Projekt ‣ Nastavení projektu ‣ Application ‣ Run ‣ Main Scene**.




:::info Odkaz na uzel ve scéně

Na uzly lze odkazovat jejich pozicí v hierarchii scény (cesta je relativní ke skriptu), zjednodušeně jejich názvem (pomocí **$NázevUzlu**, znak "$" automaticky doplní cestu), nebo funkcí get_node.

![image](./images/godot-modulate.jpg)

Dvě možnosti se stejnou funkcí:
```gdscript title="GDSCRIPT"
get_node("ColorRect").modulate = Color.BLUE_VIOLET
	$ColorRect2.modulate = Color.YELLOW_GREEN
```

Tento skript odkazuje na uzly ve scéně, která je jednoduchá. Doporučuje se odkazovat směrem Parent-Child (**get_node("ParentName/ChildName")**), opačným směrem ale lze použít **get_parent** nebo adresářové cesty (".." pro relativní cestu vzhůru do adresáře). 
:::

## Programování se scénami a uzly
Scény se snaž organizovat tak, aby šly spouštět a testovat samostatně.
### Parent/Child a inheritance 

### Signály
Signály propojují uzly a určují jejich funkci.


:::info Odkaz na root větev
Tento butón ukončuje program (hlavní větev get_tree). 
:::

# Objekty ve scéně Godot editoru

:::info KONCEPT EDITORU
Ovládání editoru je velice podobné editorům Unity a Unreal.
:::

Anchor, pivot

## Zdroje


## Ovládání a spouštění scén
Scény a jejich komponenty je možné kombinovat.

## 2D, 3D a kontrolní uzly
Jazykovou verzi programu změníš v menu:

## Kamera a efekty prostředí

Efekty kamery umožňují postprodukční efekty.

## GDScript

GDScript je integrovaný skriptovací programovací jazyk, vhodný pro vytváření prototypů (Godot umožňuje programovat i v jiných jazycích). Tyto lekce budou v příkladech používat GDScript.

### Proměnné
### Funkce

## Nejpoužívanější zkratky

- Přidat uzel <kbd>Ctrl</kbd>+<kbd>A</kbd>, přidá uzel jako *Child* vybraného uzlu ve scéně
- Duplikovat <kbd>Ctrl</kbd>+<kbd>D</kbd>
- Skript editor: Označit vybrané jako komentář <kbd>Ctrl</kbd>+<kbd>K</kbd>
- Skript editor: Najít/Nahradit <kbd>Ctrl</kbd>+<kbd>F</kbd> , <kbd>Ctrl</kbd>+<kbd>R</kbd>
- Undo/Redo <kbd>Ctrl</kbd>+<kbd>Z</kbd> , <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd>
- Spustit program/projekt <kbd>F5</kbd>, Spustit aktuální vybranou scénu <kbd>F6</kbd>, Vyber a spusť scénu <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F5</kbd>

- Focus <kbd>F</kbd> na vybraný objekt ve scéně
- <kbd>Ctrl</kbd>+<kbd>G</kbd> Group, vytvoří skupinu

## Příklad: Menu a butóny, práce s tématy


