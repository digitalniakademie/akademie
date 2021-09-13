---
id: lekce-2-inkscape
title: Grafika
sidebar_position: 4
---

# Barvy a palety




## Teorie barev a grafický design
- kontrast a rozpoznatelnost barev v designu
- WCAG a postupy pro tvorbu palet

### Barevné modely a barevné prostory

![image](./images/color-wheel.svg)

- nejčastější modely pro design a tisk
- RGBA a CMYK
- vzorníky
### Vzorníky a palety
- praktické funkční vzorníky
- vytváření palet pro design
### Color Management a profily
- monitory a kalibrace
- nastavení
### Harmonie
- tvorba rychlých harmonických sestav
### Kontrast a čitelnost
- akcenty a komplementarita
## Tvorba palet
Inkscape a barevné modely.

:::info Krita a vzorníky palet

Základní aktivní paleta je zobrazená ve spodní části hlavního okna. Paletu změníš ikonou šipky **(B)** a výběrem palety ze seznamu).

![image](./images/inkscape-palety.jpg)

Pohodlné zobrazení palet je dostupné v dialogovém okně přes menu **Zobrazit ‣ Vzorníky** (*View ‣ Swatches*) <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>W</kbd>. Pro základní paletu vyber z abecedního seznamu pod ikonou šipky **(A)** paletu **Inkscape default**.

Způsob zobrazení palet nastavíš volbami na začátku seznamu — **Seznam** (*List*) a **Mřížka** (*Grid*), s volbami mřížky.
:::

Barevná paleta (*Swatch*) se dá importovat jako **.gpl** (*GIMP palette*). Soubor se umístí do ~\AppData\Roaming\inkscape\palletes (Windows) nebo  ~/.config/inkscape/palettes (Linux).

Rozšíření pro vytvoření palet z vybraných barev přímo v dokumentu Inkscapu najdeš tady https://github.com/olibia/inkscape-generate-palette/releases.

Barevné modely a barevné kolo jsou přístupné přes funkci **Výplň a tah** (*Fill and Stroke*) <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd>.

## RGBA a export CMYK
Přestože Inkscape obsahuje barevný model CMYK, vzhledem k omezení .svg a exportu nedokáže CMYK tiskové barvy exportovat s danými hodnotami palety (i do .pdf se exportují pouze interpretace CMYK barev).

Pro tisk separací CMYK a **přímých barev** je tedy nutné barvy objektů převést v programu Scribus. Tato technika se používá především v přípravě pro sítotisk (*screen printing*) a pro speciální polygrafické práce, například při designu obalů.

:::note Export CMYKu a přímých barev

Princip exportu do programu Scribus:

- vektorovou grafiku uložíš jako .svg nebo .pdf, lze i zkopírovat vybrané objekty přes schránku
- v programu Scribus vytvoříš barevnou paletu použitých barev, nebo použiješ definované CMYK barvy ve stylech
- označené objekty přebarvíš přidělením stylů
- z programu Scribus vyexportuješ .pdf

Více o programu Scribus v lekci **Scribus a předtisková příprava**.

:::

:::info Další zdroje

Více si o teorii barev a aplikaci ve výtvarné tvorbě a designu můžeš přečíst v lekci Malujeme barvu (kurz Digitální kresba a malba) a v knize Světlo a barva.

:::
