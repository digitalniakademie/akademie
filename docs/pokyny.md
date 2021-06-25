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

Pomocí <kbd>Windows</kbd> + <kbd>R</kbd> otevři spouštěcí okno, a spusť cmd.exe (napiš **cmd** a stiskni <kbd>Enter</kbd>).

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


## Omezení

Manažer balíčků neobsahuje zatím všechny programy (repozitář se buduje). Výhodou bude rychlá instalace a upgrade programů, manažer instaluje nejaktuálnější stabilní verze programů.

:::tip

V tuto chvíli můžeš takto nainstalovat **všechny** nejaktuálnější verze softwaru pro kurzy &mdash; kromě programu Natron.

:::
