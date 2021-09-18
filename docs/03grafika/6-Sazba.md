---
id: lekce-x-inkscape
title: Grafika
sidebar_position: 9
---

# Sazba (Typesetting)
Sazba byl původně výraz pro sestavování litých písmen (liter) pro tisk. Digitální sazba se zabývá přípravou (lámáním) časopisů, knih a jiných tiskovin pro tisk.

Už od počátku knihtisku se tisky doplňovaly i ilustracemi. Původní tisk z dřevěných štočků nahradily tisky z kamenných desek (litografie), kovových plechů a jiných materiálů.

S příchodem počítačů, které byly dostatečně výkonné a vešly se na stůl, nastala éra digitální sazby (*Desktop publishing*, zkráceně DTP) a vývoj digitální přípravy tiskovin pokračuje dodnes.

## Formáty tiskovin
Standardní formáty. Skládání a lomy.
## Textové bloky
Pravidla pro českou sazbu.
## Typografická pravidla
- sirotek, řeka apod.
## Grafický design tiskovin
- spadávky a přetisky

## Export pro tisk
Formáty.

## Práce se styly
Inkscape a jednoduchá sazba
### Nadpisy
Titulkz a velikosti.
### Odstavec (*Paragraph*)
Práce s odstavci. Podpora Scribus, **Inkscape**.
### Barvy
:::note Pozor, zlý CMYK

Vybráním variabilního fontu se objeví v nastavení Písmo <kbd>Shift</kbd>+<kbd>Ctrl</kbd>+<kbd>T</kbd> možnost** Weight** (váha písma). Nastavením hodnoty vytvoříš variantu písma, která se objeví v dolní části seznamu řezů pro tento font.

:::


## Kerning v Inkscapu
Nastavení - Kerning - u hotových písem.

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

## Práce s fonty

:::note Poznámka

 Pravidla pro práci s fonty, opakování.
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


### Potíže se sazbou

:::warning Poznámka

 Start>Nastavení>Čas a jazyk>Jazyk>Klávesnice>Klávesové zkratky pro jazyk zadávání>Otevře se okno Jazyky a služby pro zpracování textu, zvolte Změnit kombinaci kláves>>Oba sloupce nastavit na Nepřiřazeno. Použít.

 (Anglická verze Win10: Start>Settings>Time & Language>Language>Keyboard>Input Language Hotkeys, otevře se dialogové okno Text Services and Input Languages, v něm vyberte Change Key Sequence a nastavte všechny Key Sequence na Not Assigned.)
 Aplikujte.

 **Shorcut na přepínání klávesnic <kbd>Windows</kbd> + <kbd>SPACEBAR</kbd> bude dále funkční.**

:::

### Export
Inkscape budeme používat spíše pro grafický design, úkoly sazby složitějších textů necháme na Scribus.

:::note Cvičení

 Vytvoř jednoduchou tiskovinu a vyexportuj pro Scribus jako křivky.
:::
