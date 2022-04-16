---
id: lekce-11-blender
title: 3D Modelování
sidebar_position: 12
---

# Add-ons: Pluginy rozšiřující funkce Blenderu

Plugin (Add-on) je program přidávající nebo rozšiřující funkci nástrojů v Blenderu. Komplexní pluginy (např. *Node Wrangler*) jsou pro pokročilé uživatele nezbytné.

## Instalace pluginů

Add-ony se instalují z okna preferencí (Edit ‣ Preferences ‣ Add-ons) . Stažený plugin je zpravidla .py soubor nebo soubory archívu .zip — soubor vybereš a zaškrtnutím políčka vlevo aktivuješ. Pokud se má plugin aktivovat i při dalším spuštění, ulož si nastavení (hamburger menu vlevo dole).

![image](./images/blender-addons.png)


## Základní pluginy, které jsou součástí Blenderu

Instalace Blenderu obsahuje mnoho pluginů, které jsou součástí instalace, ale nejsou aktivované. Je to proto, že nejsou nutné pro běh programu a uživatel si zapne ty funkce, které potřebuje.

### Node Wrangler
- základní pro práci s materiálovými uzly

### Node Arrange
- automaticky přehledně rozloží uzly na desce (po aktivaci ho nalezneš v postranním panelu v uzlových editorech)

### 3D Print Toolbox
- kontrola sítě a geometrie pro 3D tisk, hodí se i pro opravy sítí

### Modifier Tools
- zjednodušuje aplikaci modifikátorů na objekt
### Bool Tool
Práce s CSG, po aktivaci shortcuty s Ctrl
- modelování pomocí operací se zdrojovými objekty

### F2
- add-on pro editační mód, po vybrání okrajových hran nebo vrcholů a stisknutí <kbd>F</kbd> vytvoří překlenovací plochu

### 3D Navigation
- umožňuje přepínat pohledy z postranního panelu (po aktivaci se do oddílu View přidá 3D Navigation)

### Stored Views
- uložené pohledy na scénu a objekty, mimo systém kamer (najdeš v postranním panelu View jako Stored Views)
- lze snadno přepínat mezi uloženými kamerami a vytvářet z pohledů nové kamery

### Amaranth Toolset
- kolekce nástrojů produktivity, dokumentaci najdeš v odkazu v rozbalovací liště add-onu
- v kontextovém menu ve scéně (Righ Click) přibude možnost Camera as Render Border, které šetří zdroje v režimu Cycles
- zobrazuje wireframe u vybraného modelu, nastavení v N-panelu View (postranní panel)


## Pluginy, které jsou volně ke stažení

Kvalitní pluginy, které se vyplatí doinstalovat a jsou volně zdarma ke stažení. Některé jsou součástí instalace Blenderu (Tissue), ale je lepší stáhnout nejaktuálnější verzi.

### Tissue
- modelování pomocí aplikovaných sítí
- umožňuje vytvářet komplexní modely z komponentů

https://github.com/alessandro-zomparelli/tissue

### Modifier List Add-on
- zjednodušuje práci s modifikátory

https://github.com/Symstract/modifier_list

### Easy HDRI
- usnadňuje orientaci v knihovně HDRI a instalaci materiálů HDRI pozadí a osvětlení do scény

https://codeofart.gumroad.com/l/EasyHDRI

### fSpy

- plugin zjednodušuje synchronizaci kamery a pozadí pomocí nastavení tříbodové perspektivy
- vhodné pro rendery umístěné do reálných fotografií pro architektonickou vizualizaci

https://github.com/stuffmatic/fSpy-Blender

### UVPacker
- efektivní skládání UV do mapy textury

https://github.com/3d-io/uvpacker-blender-addon/releases

## Komerční pluginy

Pluginy které zjednodušují práci s nástroji nebo rozšiřují funkce Blenderu. Výběr v tomto oddílu je omezený na nejčastěji používané v profesionální práci.

:::info Poznámka
Komerční pluginy pro Blender najdeš většinou na stránkách online tržišť Blendermarket.com nebo Gumroad.com.
:::

### HardOps a Boxcutter
- utility pro hard surface modeling

### Fluent Power Trip a Materializer
- utility pro hard surface modeling a parametrické textury

### UVPackmaster
- utilita pro aplikaci a optimalizaci UV map

### Serpent
- práce s uzly modelování geometrie

### Chris Holt Plugins
- BY-GEN je skript pro generování objektů podle základní sítě

### Pluginy a materiály Nathana Ducka (Ducky3D)
- kvalitní parametrické materiály, kurzy a jiné utility

## Další zdroje
Zdroje pro HDRI, textury, materiály atd.

###  HDRI Haven / Polyhaven
Známé stránky nabízející HDRI osvětlení pro scény, textury a modely.

https://polyhaven.com/hdris

###  Poliigon
Knihovna profesionálních textur pro vizualizace (Andrew Price/Blender Guru).

https://www.poliigon.com/textures/free

###  AmbientCG
Kvalitní PBR materiály a textury s public domain licencí.

https://ambientcg.com/

###  CGBookcase
PBR textury volně ke stažení.

https://www.cgbookcase.com/textures

###  Další zdroje
Další, převážně placené profesionální knihovny jsou
https://www.textures.com, https://www.archinspirations.com
