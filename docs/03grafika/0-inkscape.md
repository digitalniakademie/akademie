---
id: lekce-0-inkscape
title: Grafika
sidebar_position: 2
---

# Inkscape: Instalace, nastavení

## Stažení a instalace
Najdi aktuální verzi na https://www.inkscape.org/

:::note Vývojové verze
Alfa verze Blenderu https://builder.blender.org/download/daily/
Tyto verze jsou pro vyzkoušení novinek a stability, nejsou vhodné pro tvorbu kritických projektů!

:::

Stáhni a spusť instalační soubor.
Po instalaci spusť program Blender.

## Nastavení jazykové verze
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
<TabItem value="czv">Upravit ‣ Předvolby ‣ Rozhraní ‣ Překlad</TabItem>
<TabItem value="env">Edit ‣ Preferences ‣ Interface ‣ Translation</TabItem>
</Tabs>

## Nastavení grafického tabletu a klávesnice pro Blender
:::note Poznámka

 Pokud používáš dvoutlačítkovou myš se skrolovacím kolečkem a numerickou klávesnici, můžeš tuto sekci přeskočit.

:::

Zkontroluj funkčnost tabletu. Podle typu pera nastav tlačítka, Right Click, Middle Click. **Vypni Windows Ink.** Protože nemáš skrolovací tlačítko, funkčnost ovládáš na **numerických** klávesách <kbd>Num +</kbd> a <kbd>Num -</kbd>. Pokud jsou na tvém tabletu programovací tlačítka nebo touch ring, doporučuji si nastavit tyto shortcuty (viz obrázek). Příklad nastavení u tabletu Wacom:

![image](../img/wacom.jpg)

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


Tady také nastavíš emulaci numerické klávesnice a v polních podmínkách ovládání pomocí touchpadu.

:::warning Poznámka

 Doporučuji zrušit ALT+SHIFT a SHIFT+CTRL na přepínání klávesnic ve Windows.  Minitutorial jak na to:

 Start>Nastavení>Čas a jazyk>Jazyk>Klávesnice>Klávesové zkratky pro jazyk zadávání>Otevře se okno Jazyky a služby pro zpracování textu, zvolte Změnit kombinaci kláves>>Oba sloupce nastavit na Nepřiřazeno. Použít.

 (Anglická verze Win10: Start>Settings>Time & Language>Language>Keyboard>Input Language Hotkeys, otevře se dialogové okno Text Services and Input Languages, v něm vyberte Change Key Sequence a nastavte všechny Key Sequence na Not Assigned.)
 Aplikujte.

 **Shorcut na přepínání klávesnic <kbd>Windows</kbd> + <kbd>SPACEBAR</kbd> bude dále funkční.**

:::

## Blender pro úplné začátečníky
Po spuštění Blender otevře základní scénu v pracovní ploše Layout. Přesuň kurzor do pracovního okna a stiskni <kbd>N</kbd>. Vysune se postranní panel.

![image](../img/01blender-okno.svg)

### Pracovní plochy
Okna můžeš přesouvat a měnit jejich obsah a velikost podle potřeby.

Jak vrátit pracovní plochu do původního nastavení: Nastavení plochy se ukládá do souboru. Ulož projekt. V dialogu  otevření souboru <kbd>Ctrl</kbd> + <kbd>O</kbd> otevřete Settings (ikona kolečka vpravo nahoře) a odškrtněte Načíst UI (*Load UI* v anglické verzi).

![image](../img/blender-plocha.jpg)

Tvůj projekt se načte se základním nastavením plochy (UI).

### Přidání a mazání pracovních ploch v menu.

Ulož si pracovní plochu a vyzkoušej si přepínání pracovních ploch.

### Přehled funkcí Blenderu
Moduly. Layout a editační mód. Nastavení materiálů a uzlový mód v sekci shader.
Co jde v Blenderu dělat.


Můžeme začít.