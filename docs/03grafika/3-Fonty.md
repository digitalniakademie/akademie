---
id: lekce-3-inkscape
title: Grafika
sidebar_position: 5
---

# Fonty a tvorba písma

## Skupiny fontů
Základní skupiny fontů jsou klasické, moderní. kombinované, historizující a dekorativní.

### Anatomie písma
Jednotlivé části písmene (glyfu) nemají sjednocenou terminologii. Přesto je rozlišení jednotlivých elementů důležité pro pochopení funkčnosti písmene v rámci celého fontu.

- části a příklady

### Patkové (Serifové) fonty
### Bezpatkové (Bezserifové) fonty
### Další rozdělení
## Pozitivní a negativní prostor
Fonty vyhovují standardu.
## Mezinárodní
Fonty vyhovují standardu.

## Typy formátů
### Statické fonty
Zpravidla obsažené v souboru. Definované vektorem nebo bitmapou.
### Variabilní fonty (*Variable Fonts*)
Obsahují více řezů v jednom ttf souboru. Podpora Scribus, **Inkscape**. Pokud je aplikace podporuje, umožňují vytváření přechodových stylů řezů písem, které nejsou jako statické fonty dostupné.
SEZNAM

:::note Úpravy variabilních fontů

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

 Přestože je design vlastních fontů velice časově náročný. obvzvlvlášť pokud tvoříš kompletní sadu, základní principy se ti v praxi hodí pro tvorbu speciálních řad. Také speciální značky ve vlastním fontu ti mohou ušetřit hodně práce.

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


### Open Fonts

:::warning Poznámka

Lokalizovan0 fonty.

:::


### Instalace

Fonty se instalují v systému z menu. V Linuxu stačí fonty zkopírovat do adresáře ~.fonts.
