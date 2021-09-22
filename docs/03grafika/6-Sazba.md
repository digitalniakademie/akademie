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

- typické formy tiskovin - skládačky
- sudá a lichá

## Typografická pravidla pro textové bloky
:::note Pravidla pro českou sazbu.
Čeština a polština nedovoluje ukončování řádků jedno a dvoupísmennými slovy.
:::

Nežádoucí jevy v blocích textů (na které nezávisle určitě narazíš sám) jsou:

- **Vdovy** (Widows) jsou osamělé řádky přetékající na další blok textu nebo stranu
- **Sirotci** (Orphans) označují osamělé řádky začínající odstavec na konci sloupce nebo strany
- **Řeka** (River) je souvislá prázdná plocha nebo linka vznikající ve sloupcích a odstavcích mezerami mezi slovy (tento prostor pak upoutává pozornost především v justifikovaném textu)
- **Hadr** (Rag) je příliš nevyrovnaná délka následujících řádků ve sloupci nebo bloku textu
- nevhodná vzdálenost mezi řádky pro zvolený font
- špatně nebo nevhodně rozdělená slova (Runts)


K odstranění a zmírnění těchto jevů používáme **rozdělování slov** (*Hyphenation*) a úpravu parametrů textu (tracking) a odstavců, což si ukážeme v programu Scribus.

## Grafický design tiskovin
- jednoduché sazby v Inkscapu
- spadávky a přetisky

## Export pro tisk
- formáty souborů
- spadávky a přetisky


## Práce se styly
- Inkscape a jednoduchá sazba
### Nadpisy
Titulky a velikosti.
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





:::note Cvičení

 Vytvoř jednoduchou sazbu tiskoviny v Inkscapu a vyexportuj pro Scribus jako křivky.
:::
