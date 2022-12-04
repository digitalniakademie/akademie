---
id: lekce-0-blender
title: 3D Modelování
sidebar_label: "Blender: Instalace"
sidebar_position: 2
description: Instalace a optimální nastavení Blenderu pro profesionální práci
keywords: [blender, blender3d, instalace, nastavení, digitální modelování]
---

# Blender: Instalace

## Stažení a instalace
Najdi aktuální verzi na https://www.blender.org/

:::note Vývojové verze
Alfa verze Blenderu https://builder.blender.org/download/daily/. Nové funkce najdeš v testovacích verzích https://builder.blender.org/download/experimental/ .
Tyto verze jsou pro vyzkoušení novinek a stability, nejsou vhodné pro tvorbu kritických projektů!

:::

Stáhni a spusť instalační soubor.
Po instalaci spusť program Blender.

Aktuální stabilní verzi můžeš nainstalovat také [pomocí terminálu](/docs/pokyny). Spusť **cmd** v adresáři nebo pomocí funkce Spustit ve Windows <kbd>Win</kbd>+<kbd>R</kbd>. Do okna shellu cmd.exe napiš

```
winget install blender
```

Upgrade provedeš pomocí

```
winget upgrade blender
```

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

:::info F1—F12 a Fn klávesy
Na některých klávesnicích je nutné funkční klávesy F1—F12 přepínat pomcí klávesy Fn. Tuto funkci lze většinou vypnout, například pomocí Fn+Esc. U některých laptopů je nutné funkci nastavit nebo vypnout v BIOSu.
:::

## Nastavení grafické karty

:::info Grafická karta a Cycles

Pro použití akceleračních schopností grafické karty nastav pro renderovací engine Cycles zvolenou kartu a procesor v **Upravit ‣ Předvolby ‣ Systém** (*Edit ‣ Preferences ‣ System*).

:::

## Praktická nastavení pro modelování

1. Nastavení renderu: Pro cycles nastavit Max Samples (Viewport) na 16 (pro render 32+)
2. Nastavení Viewportu - Cavity, Depth of Field
3. Nastavení veilikosti vertexů a rotace kolem vybraného objektu (Orbit Around Selection)
4. Nastavení grafické karty a kroků zpět
5. Aktivace základních addonů
6. Vytvoření a uložení základního nastavení.

Video: Nastavení pro pokročilé a využití komerčních addonů
