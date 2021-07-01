---
id: lekce-0-krita
title: Kresba a malba
sidebar_position: 2
---

# Štětce, palety a další nástroje
V této lekci si ukážeme nejpoužívanější nástroje z doku Panel nástrojů (*Toolbox Docker*). Doky (*Dockers*) jsou funkční okna, která můžeš přesouvat po pracovní ploše. Panel nástrojů prakticky nebudeš používat příliš často, protože nejčastější nástroje budeš přepínat zkratkami (naštěstí je jich celkem málo). Každý nástroj má možnosti nastavení (*Tool Options*). V základním nastavení je najdeš vpravo nahoře mezi doky.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="jazykova-verze"
  defaultValue="czv"
  values={[
    {label: 'CZ verze', value: 'czv'},
    {label: 'EN verze', value: 'env'},
  ]
}>
<TabItem value="czv">Program máš v české verzi</TabItem>
<TabItem value="env">Program máš v anglické verzi</TabItem>
</Tabs>

Výběr techniky.
## Algoritmické štětce
Skutečný štětec je jako razítko, které se pohybuje po médiu a přenáší na něj barvu. Tvar, materiál a rychlost štětce určuje deformace během tahu a charakter stopy. V softwaru se tento efekt simuluje přenášením modifikací tvaru profilu štětce (většinou textura s průhledností) a dynamikou a rychlostí tahů pera grafického tabletu. Program Krita nabízí řadu funkčních algoritmů štětců (*Brush Engines*), které jsou vhodné pro vytváření řady nástrojů. Každý kreslící nástroj (i tužka nebo pero) je z pohledu programu štětec (*Brush*).

![image](../img/aka-moc.svg)

### Předvolby štětců
Okno štětců otevřeš klávesou <kbd>F5</kbd>. Algoritmy použité pro chování nástrojů si prohlédni v seznamu Nástroj (*Engines*). Je to například *Pixel Engine, Bristle, Spray, Sketch* atd. Předvolby můžeš prohledávat také v doku *Brush Presets* a vyskakovací kruhové paletě (*Pop-up Palette*).
### Skupiny štětců
Štětce jsou rozdělené do určených skupin podle štítků (tagů). Základní skupiny si můžeš prohlédnout i ve vyskakovací kruhové paletě (*Pop-up Palette*), kterou zobrazíš pravým tlačítkem, pokud máš vybraný nějaký kreslící nástroj. Vlastní skupiny lze vytvářet. Štětce můžeš upravovat a importovat i exportovat jako sety. Více o vytváření vlastních štětců  a balíčcích zdrojů (*Resource Bundles*) v lekci Vlastní štětce a zdroje.

Vyzkoušej si úpravu štětce. Vyber štětec X a v předvolbě štětců nastav texturu vzoru. Potom nastav texturu povrchu. Vyzkoušej štětec. Základní nastavení vrátíš ,,,

:::note úkol

Vyzkoušej si různé skupiny štětců. Zapni a vypni texturu u štětce.

:::

![image](../img/aka-moc.svg)

### Vyhlazování tahů
Vyber nástroj Štětec <kbd>B</kbd>. V doku *Tool Options* uvidíš typy vyhlazování tahu. Tato nastavení ti umožní zlepšit plynulost kreslení na grafickém tabletu a také různé efekty.
## Výběr
Funkce výběru ti dovoluje malovat pouze do označené části, po inverzi výběru pouze mimo ni. V panelu nástrojů jsou různé tvary výběru určené pro rychlé maskování. Tento nástroj funguje podobně jako v ostatních bitmapových programech. Jenom tady ho budeš používat častěji.
## Barevný selektor
Pipeta. <keyb>P</keyb> Umožnuje najenom nabírat barvu z plátna, ale i interpolovat barvy. Vyzkoušej si to.

![image](../img/aka-moc.svg)


## Přesuny a transformace

<kbd>T</kbd> Posun aktivní vrstvy, <kbd>Ctrl</kbd>+<kbd>T</kbd> Transformace.


# Základní techniky digitální malby
simulace, přiznana dig. m. a komb t
Tyto postupy jsou zajímavé buď organizací, nebo technikou malby.
### Alla prima
*Alla prima* ("napoprvé") je technika, kdy pracuješ v jedné vrstvě. Barvy nanášíš přímo a glazury také. Tento způsob je vhodný pro studium tonality a barev. Je to oblíbený způsob, a koncept *Alla prima* se používá v i klasické malbě, kdy se maluje do ještě vlhkých barev, na jedno sezení. Výsledek je dynamický obraz se zvláštní energií.

### Malování ve vrstvách
Vrstva světla - Overlay
Vrstva stínu - Multiply
Pozadí středová hodnota

![image](../img/aka-moc.svg)


### Systém pěti vrstev
Vrstva světla - Overlay
Vrstva stínu - Multiply
Vrstva barvy - Color
Vrstva tonality - Values
Vrstva náčrtu - Background
![image](../img/aka-moc.svg)
### Maskování
Připomíná techniku maskování části plátna, která se používá například v airbrushi.

### Malování v blocích
Nanášení tvarů.

### Kombinované techniky

Štětec jako razítko. Typy vyhlazování. Dynamika tahů.
## Barevné modely
Barvy pro tisk a obrazovku. Gamut.
## Barva a palety

## Vnímání tvaru
Zrcadlení plochy <kbd>M</kbd> pro rychlou kontrolu.
## Plynulá kresba a malba
Otáčení plátna

## Stínování
Šrafury a dynamika, airbrush. Vyzkoušej si Barevné stínování <kbd>K</kbd>, <kbd>L</kbd>. Více v lekci Malujeme barvu.
## Vrstvy
Přesun mezi vrstvami, hide etc.
## Kresba
Základní technika. Import kresby ze skicáře.

:::note úkol

Vystínovat těleso tonální technikou.

:::
