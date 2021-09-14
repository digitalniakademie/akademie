---
id: lekce-3-inkscape
title: Grafika
sidebar_position: 5
---

# Fonty a tvorba písma
Font je definovaná kolekce písem a znaků (glyfů), které sdílejí společný vizuální styl. Kvalitní font má propracovaný kerning, který určuje proporce toho, jak se následná písmena napojují za sebe.

Klasické knižní fonty mají zpravidla verzi kurzívy neboli italiky (*Italic*) a verze s nižší a vyšší váhou (*weight*), většinou označené jako Tučné (*Bold*) nebo Tenké (*Thin*). Některé sady obsahují mnoho takových variant — označovaných jako **řezy** — určených k tomu, aby se různé typy stejného písma daly spolu harmonicky použít.

Tvorbou fontů se kromě samostatných designerů zabývají takzvané písmolijny (*Foundry*), které vydávají licencovaná písma a řezy.

V kurzech budeme používat písma s **Open Fonts** licencí, které jsou volně dostupné pro jakékoliv použití v designu a typografii.

:::note Pravidla pro použití písem

- Základním pravidlem pro použití písem je být ve výběru fontů co nejůspornější!
- Každý řez se počítá jako další typ písma a typů písma v jednom dokumentu by mělo být co nejméně — **dva** nebo tři většinou stačí
- Udržuj různé velikosti i stejného písma pod kontrolou v duchu předcházejícího pravidla
- Existují výjimky, například v oblasti novin a časopisů, ale i v tomto případě jsou často typografie stránek logicky a systematicky propracované a rozdělené do segmentů
- minimální doporučená velikost písma je 5 bodů, ale nepoužívej menší písmo než **7-8 bodů**!

:::  


## Skupiny fontů
Základní skupiny fontů jsou klasické, moderní. kombinované, historizující a dekorativní.

### Anatomie písma
Jednotlivé části písmene (glyfu) nemají sjednocenou terminologii. Přesto je rozlišení jednotlivých elementů důležité pro pochopení funkčnosti písmene v rámci celého fontu.

- části a příklady
- Pozitivní a negativní prostor


### Patkové (Serifové) fonty
### Bezpatkové (Bezserifové) fonty
### Další rozdělení



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
Náčrt fontové sady.
klávesách <kbd>Num +</kbd> a <kbd>Num -</kbd>. Pokud jsou na tvém tabletu programovací tlačítka nebo touch ring, doporučuji si nastavit tyto shortcuty (viz obrázek). Příklad nastavení u tabletu Wacom:

![image](../img/wacom.jpg)

### Vektorizace

Převedení fontu na formát a nastavení ligatur, znaků a kerningu

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



:::warning Poznámka

Lokalizované fonty. Mezinárodní kódování znaků.

:::


### Instalace

Fonty se instalují v systému z menu. V Linuxu stačí fonty zkopírovat do adresáře ~.fonts.
