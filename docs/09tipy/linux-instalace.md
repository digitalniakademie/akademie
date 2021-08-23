---
id: linux-install
title: Linux
sidebar_position: 3
---

# Instalace Linuxu

Instalace Linuxu vyžaduje základní počítačovou gramotnost a znalost ovládání systémového BIOSU. Doporučuji vyzkoušet distribuci nejprve v Live verzi, která se dá spustit bez instalace a bez dopadu na stávající systém.

## Vyzkoušení Linuxu
Na vyzkoušení vybrané distribuce budeš potřebovat volný USB Flash Disk (čím rychlejší tím lépe) a image soubor dané distribuce (většinou .iso soubor). Soubor stáhneš ze stránek projektu distribuce, musí být označený jako **Live verze** (většina instalací tento režim dnes podporuje). Seznam doporučených distribucí Linuxu je v článku [Linux a kreativní software](linux-distro).

:::warning důležité

Před jakoukoliv instalací systému a formátováním **ZÁLOHUJ** všechny svoje soubory! To se týká i aktivních interních disků nebo dalších zařízení (externí disky nebo USB flash disky které nepotřebuješ pro instalaci **ODPOJ**).

To je pro případ, že bys omylem vybral pro instalaci jinou jednotku nebo došlo k nějaké jiné chybě (většinou uživatele).

:::

### Ventoy

Ventoy je ideální pro vyzkoušení různých operačních systémů. Po naformátování programem Ventoy pak .iso soubor/y na USB flash disk jednoduše nakopíruješ.

https://www.ventoy.net/en/download.html

:::note UPOZORNĚNÍ
U některých systémů musíš nastavit v BIOSU Boot mode na Legacy a/nebo Secure Boot v UEFI módu na Disabled, aby se automaticky nespouštěl hlavní operační systém.

Ventoy USB naformátuje na **exFAT** formát, který na starých systémech (8+ let) nemusí jít nabootovat. V tom případě zvol možnost níže.

:::
### Rufus

Rufus je formátovací utilita pro Windows. V menu vyber svoje USB (všechny soubory na něm budou smazány!) a stažený .iso soubor se systémem. Jako souborový systém vyber **FAT32** (bude fungovat i na starších počítačích). Rufus vytvoří bootovací USB.

https://github.com/pbatard/rufus/releases

### Nastavení bootovací sekvence
Do nastavení BIOSU se dostaneš zpravidla stisknutím klávesy při restartu počítače, když se poprvé objeví logo výrobce (může to být <kbd>Esc</kbd>, <kbd>F9</kbd>, <kbd>F10</kbd>, nebo u laptopů <kbd>Fn</kbd>+<kbd>F2</kbd>, <kbd>Fn</kbd>+<kbd>F10</kbd> atp.). Zjisti zkratku na stránkách výrobce.

Nastav USB flash disk jako první v bootovacím seznamu.

### Omezení Live verzí
Live verze zpravidla nelze plně upgradovat, protože běží v paměti počítače a při restartu informace zmizí. Pro instalaci některých programů v Live verzích Linuxu stačí, když se odloguješ a naloguješ (uživatelské jméno a heslo Live verzí najdeš na internetu).

Live verze také nevyužívají plně hardware počítače, především grafickou kartu. Na vyzkoušení systému ale obvykle stačí.

## Instalace Linuxu na disk


:::warning důležité

Před instalací systému **ZÁLOHUJ** svoje soubory ze VŠECH interních disků! Externí disky nebo USB flash disky které nepotřebuješ pro instalaci **ODPOJ**).

:::

Při instalaci na prázdný disk, nebo pokud chceš Linux jako výhradní systém, stačí obvykle nabootovat z USB flash disku s instalační verzí distribuce (viz výše) a spustit instalaci. Specifický návod k instalaci — pokud je nutný — je obvykle na stránkách dané distribuce Linuxu.

Pro duální systém (většinou s Windows) musíš nejprve vytvořit diskový oddíl (Partition), na který budeš Linux instalovat.

### Vytvoření diskového oddílu

- <kbd>Win</kbd>+<kbd>X</kbd>, Správa disků
- Vybrat cílový disk, Zmenšit svazek. Vytvoří se nepřiřazený oddíl (Partition) dané velikosti.
- Zkontrolovat a nabootovat Linux z USB

### Systémové soubory blokují zmenšení partition

Některé systémové soubory mohou blokovat změnu partition (**unmovable files**). Jsou to soubory hibernace, stránkovací soubory, chybné soubory, soubory po defragmentaci apod. Jestli velikost uvolněného místa pro instalaci nového systému nestačí, vypni tyto funkce, restartuj a zkus svazek zmenšit znovu.

Pokud jsou stále potíže, nejjednodušší řešení je přeinstalovat Windows.

### Kontrola

- V programech jako je GParted můžeš zkontrolovat, jestli je partition pro Linux volná. Pokud není zobrazená samostatně, tak ji odstraň (Delete partition).

- UEFI systém instaluj z UEFI módu

### Spuštění instalace

Uvedené pokyny jsou obecný postup, samotnou instalaci řídí instalační program daného systému. Další pokročilá nastavení (například uživatelské diskové oddíly apod.) nejsou námětem tohoto článku.

- nabootuj Linux z instalačního USB flash disku
- Vyber disk a partition (některé instalátory volnou partition detekují automaticky). Pokud se správná partition nezobrazuje, vrať se do Live systému a spusť např. GParted (viz výše).
- Pokračuj podle pokynů v instalátoru.

### Duální boot
Po úspěšné instalaci se nový systém nabootuje výběrem z GRUB menu, nebo ho nabootuješ výběrem z bootovacího menu (např. <kbd>F9</kbd>, podle typu počítače).
