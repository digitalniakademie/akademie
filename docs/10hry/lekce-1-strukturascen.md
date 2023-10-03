---
id: hry-godot-scenes
title: Programování
sidebar_label: "Godot: Struktura scén a sdílení dat mezi scénami"
sidebar_position: 3.5
description: Instalace a optimální nastavení programu Godot pro programování her
keywords: [godot, singleton, tutorial, export data, variables, instalace, nastavení, digitální modelování]
---

# Godot: Struktura scén a sdílení dat mezi scénami

V této lekci se seznámíme se způsoby sdílení dat mezi uzly a scénami. 

## Scény v projektu

Při změně scény nejsou lokální proměnné sdílené. Možné řešení je tzv. singleton, scéna s globálními skripty.

## Sdílení dat pomocí singletonu

Singleton je scéna, které se vyskytuje jako jediná instance. Používá se k uchovávání dat, které jsou dostupné globálně pro všechny scény. Spouští se v nastavení Autoload.


:::tip Sdílení dat mezi uzly ve stejné scéně (%)
Pokud uzel nastavíme v kontextovém menu uzlu jako **%Access as Unique Name** (to je NUTNÝ krok a bez tohoto nastavení uzlu kompilace nefunguje), je možné ho volat odkudkoliv ze scény bez ohledu na hierarchii uzlů:

```gdscript title="GDSCRIPT"
get_node("%ColorRect").modulate = Color.BLUE_VIOLET
	%ColorRect2.modulate = Color.YELLOW_GREEN
```

:::


## Programování se scénami a uzly
Scény se snaž organizovat tak, aby šly spouštět a testovat samostatně.
### Parent/Child a inheritance 

### Signály
Signály propojují uzly a určují jejich funkci.


:::info Odkaz na root větev

```gdscript
func _on_button_pressed():
	get_tree().quit()
```
Tento butón ukončuje program (hlavní větev get_tree). 
:::

# Objekty ve scéně Godot editoru

:::info KONCEPT EDITORU
Ovládání editoru je velice podobné editorům Unity a Unreal.
:::

Anchor, pivot

## Skupiny

Skupiny slouží k tagování uzlů a vytváření skupin, které je možné volat skriptem. Skupiny je možné vytvářet kódem nebo v UI.


```gdscript title="GDSCRIPT"
func DestroyGroup1():
	get_tree().call_group("Group1", "queue_free")
```


## Zdroje


## Ovládání a spouštění scén
Scény a jejich komponenty je možné kombinovat.

## Databáze

## Nejpoužívanější zkratky

- Přidat uzel <kbd>Ctrl</kbd>+<kbd>A</kbd>, přidá uzel jako *Child* vybraného uzlu ve scéně
- Duplikovat <kbd>Ctrl</kbd>+<kbd>D</kbd>
- Skript editor: Označit vybrané jako komentář <kbd>Ctrl</kbd>+<kbd>K</kbd>
- Skript editor: Najít/Nahradit <kbd>Ctrl</kbd>+<kbd>F</kbd> , <kbd>Ctrl</kbd>+<kbd>R</kbd>
- Undo/Redo <kbd>Ctrl</kbd>+<kbd>Z</kbd> , <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd>
- Spustit program/projekt <kbd>F5</kbd>, Spustit aktuální vybranou scénu <kbd>F6</kbd>, Vyber a spusť scénu <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F5</kbd>

- Focus <kbd>F</kbd> na vybraný objekt ve scéně
- <kbd>Ctrl</kbd>+<kbd>G</kbd> Group, vytvoří skupinu

## Příklad: Uložení proměnných hráče

