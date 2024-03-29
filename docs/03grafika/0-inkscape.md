---
id: lekce-0-inkscape
title: Grafika
sidebar_label: "Inkscape: Instalace, nastavení"
sidebar_position: 2
---

# Inkscape: Instalace, nastavení

## Stažení a instalace
Najdi aktuální verzi na https://www.inkscape.org/. Stáhni a spusť instalační soubor.

:::note Package Manager Windows 10, 11
Pokud používáš Package Manager pro Windows, použij příkaz

```
winget install inkscape
```

:::

Po instalaci spusť program Inkscape.

## První spuštění Inkscape
Po prvním spuštění Inkscape nabídne základní volby dokumentu, barevných motivů programu a ikon.

![image](./images/inkscape-in.jpg)

- Nastavení v kurzu jsou jednoduché symbolické ikony (Classic Symbolic) a tmavé téma programu

### Základní layout programu Inkscape
Inkscape má podobné rozložení nástrojů jako jiné grafické vektorové programy. Layout panelů lze měnit z menu Zobrazit (Výchozí, Vlastní, Široký).

![image](./images/inkscape-start.jpg)

- Vlevo je lišta nástrojů (1). Spodní část horní lišty **panelu příkazů** (2) je **panel ovládání nástrojů** a mění obsah podle vybraných nástrojů. Menu dialogových oken (3) otevře okna, která mohou být ukotvená nebo plovoucí (viz níže). V základním nastavení se ti dialogová okna budou otvírat vpravo, jako ukotvená okna (*Tabs*). Nastavení různých typů přichytávání je v ikonovém menu panelu přichytávání vpravo (4).

:::note Úkol

Vyber nástroj Text z lišty nástrojů (1). Na horní liště (2) nastav typ písma ze seznamu. Klikni do dokumentu a napiš text. Otevři dialogové okno textu přes menu **Text ‣ Text a písmo** (*Text ‣ Text and fonts*) nebo zkratkou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd>. Vyber část textu, vyber ze seznamu jiný font a potvrď volbou Použít vpravo dole.

Otevři další dialogové okno přes menu **Objekt ‣ Výplň a tah** (*Object ‣ Fill and Stroke*) nebo zkratkou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd>. Nastav barvu výplně, tahu, a styl tahu v tabech v tomto dialogovém okně.

![image](./images/inkscape-fill.jpg)

Klikni na nástroj výběru objektu (ikona šipky). Kliknutím mimo objekt zrušíš výběr. Vyber objekt znovu a tažením ho přesuň na jiné místo dokumentu.

Barvu objektu změníš také kliknutím na paletu s barvou v dolní liště, s označeným objektem (barvu **obrysu** změníš, když při kliknutí podržíš <kbd>Shift</kbd>). Vyzkoušej si tvorbu, obarvení a přesuny dalších textových objektů.

:::

### Nastavení jazykové verze Inkscape
Jazykovou verzi programu změníš v menu:

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
<TabItem value="czv">Upravit ‣ Předvolby ‣ Rozhraní ‣ Jazyk</TabItem>
<TabItem value="env">Edit ‣ Preferences ‣ Interface ‣ Language</TabItem>
</Tabs>

### Pohyb v dokumentu a nastavení rotace


- Posun v dokumentu (*Pan*) se stisknutým prostředním tlačítkem myší (nebo odpovídajícím tlačítkem na tabletovém peru). Pro posun lze použít také stisknutý <kbd>Space</kbd>, nebo <kbd>Alt</kbd>+ Pravé tlačítko myši
- Zvětšení a zmenšení pohledu (*Zoom*) klávesy <kbd>+</kbd> , <kbd>-</kbd>
- Nastavení pohledu na celý dokument <kbd>5</kbd>
- Nastavení pohledu na vybraný objekt <kbd>3</kbd>

- Rotace dokumentu s klávesou <kbd>Ctrl</kbd> + Střední tlačítko myši. Natočení plátna zrušíš v menu **Zobrazit ‣ Orientace ‣ Obnovit rotaci**(*View ‣ Orientation ‣ Reset rotation*)

:::caution Poznámka

To je téma, na které narazíš velice rychle, a proto to zmiňuji hned v úvodu. Pokud jsi zvyklý na práci v jiných grafických programech, doporučuji **zamknout rotaci** plochy v menu **Zobrazit ‣ Orientace ‣ Uzamknout rotaci**

:::

### Nastavení pro počítač v režimu tablet ve vertikální orientaci

Pokud používáš počítač s dotykovým diplejem ve vertikální orientaci, je vhodnější použít režim s **plovoucími dialogovými okny**.

Nastavení najdeš v menu Upravit ‣ Předvolby ‣ Rozhraní ‣ Okna (*Edit ‣ Options ‣ Interface ‣ Windows*)

![image](./images/ink-okna2.png)

:::note Poznámka

 Vyber si co ti více vyhovuje při konkrétním nastavení monitoru. Šířka dialogových oken jde měnit podle obsahu jenom do určité míry.

:::

## Inkscape pro úplné začátečníky


Inkscape se otevře v základním nastavení dokumentu se zavřenými dialogovými okny (okna textu, výplně a tahu, nastavení atd.). Přesná podoba programu se bude lišit podle nastavení rozhraní a témat.

### Otevření dokumentu ze šablony

Dokument z nastavené šablony (Template) otevřeš z menu Soubor ‣ Nový ze šablony... (*File ‣ New from Template...*). Nejčastěji používané šablony asi budou "Prázdná stránka" s nastavením standardních velikostí pro tisk v mm A4, A5 atp., a "Plocha" pro práci v pixelech.

### Nastavení vlastností dokumentu

Možnosti dokumentu nastavíš zkratkou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd> nebo tady:
<Tabs
  groupId="jazykova-verze"
  defaultValue="czv"
  values={[
    {label: 'V české verzi', value: 'czv'},
    {label: 'V anglické verzi', value: 'env'},
  ]
}>
<TabItem value="czv">Soubor ‣ Vlastnosti dokumentu</TabItem>
<TabItem value="env">File ‣ Document properties</TabItem>
</Tabs>

Nastavení dokumentu se ukládá do souboru.

### Přehled nástrojů
![image](./images/inkscape-tools.jpg)

Vyzkoušej si nástroje z panelu nástrojů vlevo. Najdeš tam vektorové a efektové nástroje, a nástroje na úpravu křivek. Ikony jsou názorné.

Nejčastěji používané nástroje:

- Výběr <kbd>F1</kbd>
- Úprava objektu nebo křivky (cesty) <kbd>F2</kbd>
- Volné křivky <kbd>F6</kbd> a Beziérovy křivky/rovné křivky <kbd>Shift</kbd>+<kbd>F6</kbd>
- Nástroje geometrických tvarů
- Text
- Lupa <kbd>F3</kbd>, zmenšení s klávesou <kbd>Shift2</kbd>

### Objekty a cesty
Aby bylo možné editovat jednotlivé body a křivky objektů, je nutné převést objekt na cesty v menu **Cesta ‣ Objekt na cestu**(*Path ‣ Object to Path*) nebo zkratkou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>.

![image](./images/inkscape-vectors.jpg)

U objektů je možné měnit některé charakteristiky, dokud nejsou převedeny na cestu. U obdélníků je to zaoblení hran, ovládané nástrojem editace cesty <kbd>F2</kbd>:

![image](./images/inkscape-vectors2.jpg)

Křivky — cesty — se formují pomocí kontrolních bodů a tečen, které definují průběh křivky.

![image](./images/inkscape-paths.jpg)

Na cesty je možné aplikovat parametrické efekty, jak si ukážeme v příští lekci.

### Text a fonty

Inkscape podporuje variabilní fonty (Variable Fonts). Variabilní fonty umožňují parametricky měnit váhu písma ("tloušťku", weight).

Seznam vybraných fontů s volnou licencí a českými znaky najdeš v příloze kurzu.

### Ukládání a export do .pdf a .png
Základním formátem je .svg, ale program podporuje export do mnoha formátů včetně .pdf (**Soubor ‣ Uložit jako**, *File ‣ Save as*), do .png lze exportovat dialogovým oknem **Soubor ‣ Exportovat obrázek PNG** (*File ‣ Export Image as PNG*).

Můžeme začít.
