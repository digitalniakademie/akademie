---
id: malba-blender-2D
title: Kresba a malba
sidebar_position: 16.1
---

# Příloha: Malování v Blenderu

Jak využít nástroje Blenderu 3D pro kreslení a malování. 
Blender má nástroje na skicování, je možné vytvářet 2D malby přímo v Blenderu. Umožňuje pracovat ve vrstvách.

## Grease Pencil
- režimy

```
winget install blenderfoundation.blender
```

:::note poznámka na začátek
Skicovací tužka Grease Pencil je 3D nástroj, užitečný pro 2D malbu a náčrty.
:::

![image](./images/mypaint-screen-1.png)

## Nastavení pro malbu a principy práce

- Štětce
- 3D scéna
- Program ukládá jako .png, .jpg a .ora (OpenRaster).

- PNG s transparencí lze vyexportovat pouze volbou typu souboru v rolovacím menu ukládacího formátu při ukládání (RGBA). Standardní export je v základním nastavení s pozadím textury plátna. Pozadí se dá změnit v menu **Vrstva ‣ Volič pozadí** (*Layer ‣ Background*)

- Plátno na malování je neomezené, dá se limitovat rámečkem **Soubor ‣ Povolit rámeček** (*File ‣ Allow Frame*) a nastavit ikonou rámu v horní liště. V programu MyPaint tedy není dané rozlišení, jak je obvyklé v jiných programech — obrázek je prostě tak velký, jak velké je pomalované plátno. Rozměry rámečku se ale dají určit ikonou rámu (a) v nastavení rámečku (b) zadáním rozměru v pixelech (c).

- Blender lze použít pro ala prima digitální techniky, nemá běžné nástroje výběru ani maskování. Síla programu je v rychlém skicování, využití 3D scény a unikátních štětcích.

![image](./images/mypaint-screen-2.png)

## Štětce
Zkratka <kbd>W</kbd> vybere nástroj štětec a vrstvu. Štětce je možné vybírat v sadách přes ikonu tří štětců v pravé horní liště. Sady a štětce se dají upravovat (kliknutím na ikonu nástroje štětce pravým tlačítkem), importovat a exportovat.

![image](./images/mypaint-brush.png)

Další štětce a nástroje je možné získat zde https://github.com/mypaint/mypaint/wiki/Brush-Packages. Balíky se instalují z menu **Štětec ‣ Zavést štětce** (*Brush ‣ Import Brushes*), kde vybereš stažený .zip archiv.

## Pipeta
Zkratka <kbd>R</kbd>. Kombinací se speciální klávesou lze vybrat JAS  <kbd>Alt</kbd>, ODSTÍN  <kbd>Ctrl</kbd> a SYTOST  <kbd>Shift</kbd>.

## Barvy, palety, barevné modely
Maskování gamutu je možné v barevném modelu. MyPaint nabízí řadu typů barevných kol vycházející z RGB. RYB a R-G B-Y aproximací, nastavitelné v **Úpravy ‣ Nastavení ‣ Barva** (*Edit ‣ Settings ‣ Colour*). Menu **Barva** (*Colour*) nabízí řadu variant zobrazení barevných modelů.  

![image](./images/mypaint-screen-3.png)

Do režimu celé obrazovky bez rušivých oken se dostaneš z menu pravého tlačítka nebo klávesou <kbd>F11</kbd> a dvojím stisknutím <kbd>Tab</kbd>.

## Vrstvy

Vrstvy umožňují standardní překrývací režimy (Překrytí, Znásobení, Měkké světlo atd.). Práce s vrstvami je obvyklá jako v jiných programech, postrádá však rychlé maskování vrstev a podobné pokročilé funkce. Vrstvy je ale možné maskovat ve skupinách pomocí režimů (*Mode*) vrstvy, např. **Cíl nahoře** (*Destination Atop*):

![image](./images/mypaint-layer-mask.png)



:::note Cvičení

Vytvoř sérii skic pomocí techniky vrstev v programu MyPaint.

:::
