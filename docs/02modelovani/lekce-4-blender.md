---
id: lekce-4-blender
title: 3D Modelování
sidebar_position: 6
---

# Blender: Modifikátory pro parametrický styl modelování a modelování s uzly
Výhodou je nedestruktivní styl modelování. Modifikátory nemění základní geometrii objektu a dají se dále upravovat. Pořadí, jak jsou umístěny za sebou, ovlivňuje výsledek.

Modifikátory mění stávající geometrii. Dalším krokem je přímé modelování pomocí uzlů — pomocí editoru Geometric Nodes nebo add-onu jako je Sverchok.

## Seznam modifikátorů
Česká verze

![image](../img/blender-mod-cz.png)

Anglická verze

![image](../img/blender-mod-en.png)

## Otestuj nejčastěji používané modifikátory

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
<TabItem value="czv">
useBaseUrl('../img/blender-mod-cz.png')
</TabItem>
<TabItem value="env">Edit ‣ Preferences ‣ Interface ‣ Input</TabItem>
</Tabs>


:::tip

 Modifikátor **Subdivision** přímo zapneš pomocí <kbd>Ctrl</kbd>+<kbd>1...</kbd>. Příklad: Subdivision level 2 aktivuješ pomocí <kbd>Ctrl</kbd>+<kbd>2</kbd>. Úrovně tak můžeš rychle přepínat.

:::

- Subdivision
- Bevel
- Array
- Mirror


<Tabs
  groupId="jazykova-verze"
  defaultValue="czv"
  values={[
    {label: 'V české verzi', value: 'czv'},
    {label: 'V anglické verzi', value: 'env'},
  ]
}>
<TabItem value="czv">Upravit ‣ Předvolby ‣ Rozhraní ‣ Vstup</TabItem>
<TabItem value="env">Edit ‣ Preferences ‣ Interface ‣ Input</TabItem>
</Tabs>
Tady také nastavíš emulaci numerické klávesnice a v polních podmínkách ovládání pomocí touchpadu.

## Geometrické uzly: Geonodes
Práce s geometrickými uzly umožnujě vytvářet a podifikovat objekty. Využijeme add-on Node Wrangler, podobně jako u ostatních uzlových systému v Blenderu.

### Začínáme s geometrickými uzly
### Moduly
![image](../img/blender-mod-cz.png)

## Sverchok a geonodes
Sverchok je generativní uzlový systém, který nainstaluješ jako add-on ze staženého zip souboru.

### Sverchok instalace

https://github.com/nortikin/sverchok/

Nejnovější verzi stáhneš kliknutím na butón Code / Download ZIP. Soubor se bude jmenovat sverchok-master.zip. Naistaluješ v nastavení add-ons a aktivuješ Node: Sverchok. Systém bude nyní dostupný ve výběru editorů jako Sverchok Nodes.

### Sverchok základy
- generování geometrie
- parametrické kopírování

## Pracovní plocha
Okna můžeš přesouvat a měnit jejich obsah podle potřeby, což je výhodné pro programování pomocí uzlů.

Jak vrátit pracovní plochu do původního nastavení: Nastavení plochy se ukládá do souboru. V dialogu  otevření souboru otevřete Settings (ikona kolečka) a odškrtněte Načíst UI (Load UI v anglické verzi).


Ulož si pracovní plochu a vyzkoušej si přepínání pracovních ploch.

## Přehled funkcí Blenderu
Moduly. Layout a editační mód. Nastavení materiálů a uzlový mód v sekci shader.
Co jde v Blenderu dělat.

Můžeme začít.
