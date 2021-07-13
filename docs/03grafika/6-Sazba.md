---
id: lekce-x-inkscape
title: Grafika
sidebar_position: 8
---

# Sazba (Typesetting)
Sazba byl původně výraz pro sestavování litých písmen (liter) pro tisk. Digitální sazba se zabývá přípravou (lámáním) časopisů, knih a jiných tiskovin pro tisk.

DTP a vývoj digitální sazby.

## Formáty tiskovin
Standardní formáty. Skládání a lomy.
## Textové bloky
Pravidla pro českou sazbu.
## Typografická pravidla
## Grafický design tiskovin
### Pravidla v češtině


## Export pro tisk
Fonty vyhovují standardu.

## Práce se styly
### Nadpisy
Zpravidla obsažené v souboru. Definované vektorem nebo bitmapou.
### Odstavec (*Paragraph*)
Obsahují více řezů v jednom ttf souboru. Podpora Scribus, **Inkscape**. Pokud je aplikace podporuje, umožňují vytváření přechodových stylů řezů písem, které nejsou jako statické fonty dostupné.
SEZNAM
### Barvy
:::note Pozor CMYK

Vybráním variabilního fontu se objeví v nastavení Písmo <kbd>Shift</kbd>+<kbd>Ctrl</kbd>+<kbd>T</kbd> možnost** Weight** (váha písma). Nastavením hodnoty vytvoříš variantu písma, která se objeví v dolní části seznamu řezů pro tento font.

:::


## Kerning
Kerning a další v kapitole o sazbě.

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
<TabItem value="czv">Upravit ‣ Předvolby ‣ Rozhraní ‣ Překlad</TabItem>
<TabItem value="env">Edit ‣ Preferences ‣ Interface ‣ Translation</TabItem>
</Tabs>

## Tvorba vlastních fontů

:::note Poznámka

 Přestože je design vlastních fontů velice časově náročný. obzvlášť pokud tvoříš kompletní sadu, základní principy se ti v praxi hodí pro tvorbu speciálních řad. Také speciální značky ve vlastním fontu ti mohou ušetřit hodně práce.

:::

### Design

klávesách <kbd>Num +</kbd> a <kbd>Num -</kbd>. Pokud jsou na tvém tabletu programovací tlačítka nebo touch ring, doporučuji si nastavit tyto shortcuty (viz obrázek). Příklad nastavení u tabletu Wacom:

![image](../img/wacom.jpg)

### Vektorizace

Možnosti klávesnice nastavíš v Blenderu tady:
<Tabs
  groupId="jazykova-verze"
  defaultValue="czv"
  values={[
    {label: 'V české verzi', value: 'czv'},
    {label: 'V anglické verzi', value: 'env'},
  ]
}>
<TabItem value="czv">Upravit ‣ Předvolby ‣ Vstup</TabItem>
<TabItem value="env">Edit ‣ Preferences ‣ Input</TabItem>
</Tabs>


### Test

:::warning Poznámka

 Start>Nastavení>Čas a jazyk>Jazyk>Klávesnice>Klávesové zkratky pro jazyk zadávání>Otevře se okno Jazyky a služby pro zpracování textu, zvolte Změnit kombinaci kláves>>Oba sloupce nastavit na Nepřiřazeno. Použít.

 (Anglická verze Win10: Start>Settings>Time & Language>Language>Keyboard>Input Language Hotkeys, otevře se dialogové okno Text Services and Input Languages, v něm vyberte Change Key Sequence a nastavte všechny Key Sequence na Not Assigned.)
 Aplikujte.

 **Shorcut na přepínání klávesnic <kbd>Windows</kbd> + <kbd>SPACEBAR</kbd> bude dále funkční.**

:::

### Export

Jak vrátit pracovní plochu do původního nastavení: Nastavení plochy se ukládá do souboru. Ulož projekt. V dialogu  otevření souboru <kbd>Ctrl</kbd> + <kbd>O</kbd> otevřete Settings (ikona kolečka vpravo nahoře) a odškrtněte Načíst UI (*Load UI* v anglické verzi).

![image](../img/blender-plocha.jpg)

### Instalace


Můžeš začít.
