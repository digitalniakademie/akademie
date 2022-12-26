---
id: lekce-0-blender-basicaddons
title: 3D Modelování
sidebar_label: "Doporučená rozšíření"
sidebar_position: 2.3
description: Vytvoření optimálních předvoleb addonů Blenderu pro profesionální práci
keywords: [default, add-on, addon, default file, preferences, blender, blender3d, instalace, nastavení, digitální modelování]
---

# Blender: Doporučená rozšíření - Add-ons
Addony (*Add-ons*) jsou aplikace — pluginy — rozšiřující možnosti Blenderu. Jedná se o python scripty, distribuované jako .zip nebo .py soubory.

## Addony předinstalované v Blenderu

:::note Add-ons
Addony aktivuješ v menu Nastavení (Preferences) zaškrtnutím checkboxu u jejich názvu. Seznam rozšíření je doporučené základní nastavení, které ti usnadní modelování. V následujících lekcích si ukážeme další užitečné addony, které lze volně doinstalovat. Existuje i mnoho komerčních addonů, zvyšujících produktivitu nebo nabízejících unikátní funkce, nedostupné v základní instalaci Blenderu.

:::

Aktuální doporučené nastavení na videu.

Otevři sekci Rozšíření (Add-ons). Seznam addonů, které aktivuješ je podle pořadí v tématických podmenu:

![image](./images/blender-addons-menu.png)

<details>
  <summary>Seznam doporučených addonů</summary>
  <div>
    <div>3DView/Stored Views</div>
    <div>Add Curve/Curve Tools</div>
    <div>Add Curve/Extra Object</div>
    <div>Add Curve/Simplify Curves</div>
    <div>Add Mesh/Extra Objects</div>
    <div>Import-Export/Import Images as Planes</div>
    <div>Interface/3D Viewport Pie Menus</div>
    <div>Interface/Copy Attributes Menu</div>
    <div>Interface/Modifiers Tool</div>
    <div>Mesh/3D-Print Toolbox</div>
    <div>Mesh/Automirror</div>
    <div>Mesh/F2</div>
    <div>Mesh/Loop Tools</div>
    <div>Node/Node Wrangler</div>
    <div>Object/Align Tools</div>
    <div>Object/Bool Tool</div>
    <div>Object/Carver</div>
  </div>
</details>


### Stored Views
- podmenu 3D View

 ![image](./images/blender-storedviews.png)

- rychlé nastavení pohledů a kamer (video), rychlé přepínání pomocí ikon
- přesouvání mezi kamerami pomocí šipek (nastavení časové linky, funguje v náhledu kamery)
- nepřepíná vlastnosti kamer, musí se vybrat ve scéně nebo v Outlineru manuálné

### Curve Tools
- podmenu Add Curve
- přidání dalších funkcí úpravy křivek (např. zaoblení rohů)
### Add Curve: Extra Objects

- přidává křivkové základní objekty

 ![image](./images/blender-extracurveobjects.png)

### Simplify Curves+

- změna rozlišení a tvaru křivky

### Add Mesh: Extra Objects
- podmenu Add Mesh

![image](./images/blender-extraobjects.png)

### Add Mesh: Import Images as Planes
- podmenu Import-Export
- importování obrázků jako objektů do scény

### 3D Viewport Pie Menus
- podmenu Interface

:::tip Tip pro nastavení 3D Vievport Pie Menus

 ![image](./images/blender-3d-viewport-pie-cz-en.png)

:::

### Copy Attributes Menu
- kopírování atributů objektů pomocí <kbd>Ctrl</kbd>+<kbd>C</kbd> (kopíruje z aktivního objektu na vybraný)
- umožňuje kopírovat pouze vybrané modifikátory, narozdíl od příkazu <kbd>Ctrl</kbd>+<kbd>L</kbd>

### Modifiers Tool
- zjednodušení práce s modfikátory

![image](./images/blender-add-modifier.png)

### 3D-Print Toolbox
- podmenu Mesh, najdeš v N-panelu
- kontrola a oprava objektů, v Edit módu vybere problematické části
- funkce *Make Manifold* se pokusí opravit chyby ("vodotěsnost")

![image](./images/blender-3D-PrintToolbox.png)


### Automirror
- automatické nastavení modifikátoru *Mirror*
### F2
- vylepšení vyplňování ploch

### Loop Tools
- užitečné nástroje pro úpravu polygonů, najdeš v kontextovém menu v editačním módu

![image](./images/blender-looptools.png)

### Node Wrangler
- podmenu Node
- **důležitý** nástroj pro práci s uzly

### Align Tools
- podmenu Object
- zarovnání objektů

 ![image](./images/blender-aligntools.png)

### Bool Tool
- zjednodušení práce s boolean operacemi
- Odečíst <kbd>Ctrl</kbd>+<kbd>-</kbd>, Přičíst <kbd>Ctrl</kbd>+<kbd>+</kbd>, Slice <kbd>Ctrl</kbd>+<kbd>/</kbd>, Rozdíl <kbd>Ctrl</kbd>+<kbd>*</kbd>
### Carver
- nástroj pro ořezávíní objektů pomocí boolean operací
- aktivace <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>

:::tip Blender ID a Blender Sync

 V podmenu System najdeš add-on **Blender ID authentication**. Ve spojení s addonem **Blender Cloud**, který najdeš zde https://cloud.blender.org/services , umožňuje ukládání nastavení Blenderu podle verzí zdarma v cloudu (Blender Sync).

 ![image](./images/blender-cloud.png)

1. Aktivuj Blender ID addon a stáhni, nainstaluj a aktivuj Blender Cloud addon (nutný pro službu Blender Sync)
2. Zaregistruj Blender ID na  https://id.blender.org/register/
3. Naloguj se v Blender ID
4. Ulož Předvolby (*Save Preferences*)
5. V okně Předvolby/Rozšíření/System:Blender Cloud (*Preferences/Addons/System:Blender Cloud*) teď můžeš ukládat a nahrávat nastavení Blenderu
6. Služba Blender Sync je zdarma, placené jsou pouze další možnosti Blender Cloud
7. Synchronizace aktivuje i addony, ale pouze ty, které jsou součástí Blenderu! Uživatelské nebo komerční addony musíš instalovat manuálně.

:::

:::note Poznámka

 Více se dozvíš v kapitole o rozšířeních.

:::
