---
id: lekce-3-inkscape
title: Grafika
sidebar_position: 5
---

# Fonty a tvorba písma
Font je definovaná kolekce písem a znaků (glyfů), které sdílejí společný vizuální styl. Kvalitní font má propracovaný kerning, který určuje proporce toho, jak se následná písmena napojují za sebe.

:::note Co je font?
**Rodina písma** (*Typeface*) se často zjednodušeně označuje jako font. Font je ale technicky a historicky kolekce znaků (glyfů), které mohou náležet i do jedné rodiny písem — také varianty **velikosti** nebo **řezu** se považují za samostatné fonty.

:::

Klasická knižní písma mají zpravidla verzi kurzívy neboli italiky (*Italic*) a verze s nižší a vyšší váhou (*weight*), většinou označené jako Tučné (*Bold*) nebo Tenké (*Thin*). Některé sady obsahují mnoho takových variant — označovaných jako **řezy** — určených k tomu, aby se různé typy stejného písma daly spolu harmonicky použít.

Tvorbou fontů se kromě samostatných designerů zabývají takzvané písmolijny (*Foundry*), které vydávají licencovaná písma a řezy.

V kurzech budeme používat písma s **Open Fonts** licencí, které jsou volně dostupné pro jakékoliv použití v designu a typografii.

:::note Pravidla pro použití písem

- Základním pravidlem pro použití písem je být ve výběru fontů co nejůspornější!
- Každý řez se počítá jako další typ písma a typů písma v jednom dokumentu by mělo být co nejméně — **dva** nebo tři většinou stačí
- Udržuj různé velikosti i stejného písma pod kontrolou v duchu předcházejícího pravidla
- Existují výjimky, například v oblasti novin a časopisů, ale i v tomto případě jsou často typografie stránek logicky a systematicky propracované a rozdělené do segmentů
- minimální doporučená velikost písma je 5 bodů, ale nepoužívej menší písmo než **7-8 bodů**!

:::  

## Anatomie písma
Jednotlivé části písmene (glyfu) nemají sjednocenou terminologii. Přesto je rozlišení jednotlivých elementů důležité pro pochopení funkčnosti písmene v rámci celého fontu.

![image](./images/fonts-glyph.svg)

1. serif
2. negativní prostor (counter)
3. apex
4. terminal

- **Pozitivní** prostor v designu a typografii je definovaný objekt a **negativní** prostor znamená prázdnou plochu ohraničenou objektem nebo prázdný prostor mezi jednotlivými elementy. Oba koncepty jsou  pro vyvážený design stejně důležité.

Pokud se rozhodneš navrhovat písmo klasického typu (latinky odvozené od Římanů), budeš potřebovat hlubší znalost konstrukce písma nž je předmětem tohoto kurzu a studium kaligrafie.

![image](./images/fonts-anatomy.svg)

1. ascent
2. median
3. účaří
4. descent
5. výška majuskule písma
6. výška minuskule písma (x-height)

## Skupiny fontů
Základní skupiny fontů rozdělené podle stylu designu jsou klasické, moderní, kombinované, ručně psané, historizující a dekorativní.



Glyfy vznikaly z psaného písma postupným zjednodušováním. Patky písem jsou odvozené od dynamiky ručně psaných písmen.

Kapitálky rozhodují o zařazení do skupiny patkových nebo bezpatkových písem.

### Patkové fonty

Patkové (Serifové) fonty, označované jako antikva, jsou nejběžnější typ tiskacího písma.

![image](./images/fonts-serif.svg)

Egyptienka (*Slab serif*) neboli lineární **antikva** je varianta písma se zjednodušenou geometrickou patkou:

![image](./images/fonts-slab.svg)

### Bezpatkové fonty

Bezpatkové (Bezserifové, *Sans Serif*) fonty, označované jako **grotesk**, se s spolu s patkovou antikvou často požívají pro sazbu delších textů a knih.

![image](./images/fonts-sansserif.svg)

V moderním grafickém designu se často používají kombinovaná písma, které mají prvky jak patkového, tak bezpatkového písma.

### Další rozdělení podle určení nebo designu
Speciální fonty mohou mít různé formy a jsou určené pro akcenty nebo zvláštní použití. Zpravidla nejsou vhodné pro bloky textu a odstavcový text.
- Display fonty jsou určené pro velké formáty a krátké texty a mají výrazný design
- Handwriting nebo Script je skupina fontů v podobě ručně psaných písem


## Typy formátů

Nejčastěji se budeš setkávat s formáty fontů TrueType **.ttf**, případně OpenType **.otf**.

- **Statické fonty** jsou pevně definované v souboru pomocí vektorů nebo bitmap.
- **Variabilní fonty** (*Variable Fonts*) umožňují vytváření přechodových stylů řezů písem, které nejsou jako statické fonty dostupné. Podporuje je  Scribus i **Inkscape**.

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

 Přestože je design vlastních fontů velice časově náročný. zejména pokud tvoříš kompletní sadu, základní principy se ti v praxi hodí pro tvorbu speciálních řad. Také speciální značky ve vlastním fontu ti mohou ušetřit hodně práce.

:::

### Design
Konstrukce fontu vychází z designových zásad, které jsou společné pro všechny glyfy. Základem návrhu je řešení elementu glyfu nebo sady glyfů, které vytvoří jádro písmové sady.

- Náčrt fontové sady.


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
