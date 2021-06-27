---
id: pokyny
title: Pokyny pro instalaci
sidebar_position: 13
---
Software v kurzech je **open source a volně dostupný** software (FOSS). Instalace aktuální verze je popsána vždy v úvodní lekci daného kurzu.  

## Manuální instalace
Najdi aktuální stabilní verzi programu, stáhni instalační soubor a spuštěním program nainstaluj. Pokud používáš např. operační systém **Ubuntu Studio**, programy jsou už předinstalované v systému. V jiných distribucích *Linuxu* programy nainstaluješ pomocí manažeru balíčků. Tuto možnost máš nyní i ve *Windows*.

## Instalace pomocí Package Manageru pro Windows

:::tip Pro pokročilé uživatele

Tento návod nyní vyžaduje doinstalaci funkce **Instalační program aplikací** do systému Windows 10. Budoucí verze systému budou funkci obsahovat.

:::

Výhodou tohoto systému je snadná a bezpečná instalace a upgrade softwaru. Nejprve nainstaluj rozšíření do Windows.

Zkopíruj tuto adresu do prohlížeče a následuj pokyny pro instalaci (samozřejmě nutné funkční připojení k internetu).

```
ms-appinstaller:?source=https://aka.ms/getwinget
```

### Spuštění manažeru

Potřebuješ spustit **Powershell** jako správce, abys nemusel manuáně potvrzovat dialogy pro každý program. Stiskni <kbd>Windows</kbd> + <kbd>X</kbd>, vyber **Windows Powershell (správce)** a potvrď.

Pokud nyní napíšeš příkaz **winget**, program ti ukáže seznam příkazů.


### Upgrade programů a ostatní funkce

Manažer se používá následovně (například pro program **Blender**):

Pro vyhledání programu v repozitáři napiš do příkazového řádku a stiskni <kbd>Enter</kbd>)

```
winget show blender
```
Pro instalaci aktuální verze programu v repozitáři

```
winget install blender
```

Pro upgrade na aktuální verzi programu v repozitáři

```
winget upgrade blender
```

Tento příkaz ti ukáže seznam **nainstalovaných** programů, u kterých existuje aktuálnější verze.

```
winget upgrade
```

Tento příkaz **upgraduje všechny programy v seznamu** na aktuálnější verze.

```
winget upgrade --all
```

### Omezení

Manažer balíčků neobsahuje zatím všechny programy (repozitář se buduje). Výhodou bude rychlá instalace a upgrade programů, manažer instaluje nejaktuálnější stabilní verze programů.

:::tip

V tuto chvíli můžeš takto nainstalovat **všechny** nejaktuálnější verze softwaru pro kurzy &mdash; kromě programu Natron.

:::

## Instalace a upgrade více programů najednou

Potřebuješ spustit **Powershell** jako správce, abys nemusel manuáně potvrzovat dialogy pro každý program. Stiskni <kbd>Windows</kbd> + <kbd>X</kbd>, vyber **Windows Powershell (správce)** a potvrď.

Skript pro instalaci programů Krita, Blender a Inkscape. Zkopíruj, vlož do Powershellu (nutná instalace rozšíření **winget**, viz výše) a stiskni <kbd>Enter</kbd>
```
winget install krita
winget install blender
winget install inkscape
```
Skript pro **upgrade** programů Krita, Blender a Inkscape. Zkopíruj, vlož a spusť v Powershellu

```
winget upgrade krita
winget upgrade blender
winget upgrade inkscape
```

:::warning Pozor

Tímto způsobem instaluj pouze programy, které znáš a víš, že jsou ze spolehlivého zdroje!

:::