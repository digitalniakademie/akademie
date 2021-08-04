---
id: lekce-0-krita
title: Kresba a malba
sidebar_position: 2
---

# Štětce, palety a další nástroje
Nejpoužívanější nástroje z doku Panel nástrojů (*Toolbox Docker*) jsou Štětec <kbd>B</kbd> , Pipeta <kbd>P</kbd> , nástroje výběru a transformace.

Doky (*Dockers*) jsou funkční okna, která můžeš přesouvat po pracovní ploše. Panel nástrojů prakticky nebudeš při malování používat příliš často, protože nejčastější nástroje budeš přepínat zkratkami (naštěstí je jich celkem málo). Každý nástroj má možnosti nastavení (*Tool Options*). V základním nastavení je najdeš vpravo nahoře mezi doky.

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


## Algoritmické štětce
Skutečný štětec je jako razítko, které se pohybuje po médiu a přenáší na něj barvu. Tvar, materiál a rychlost štětce určuje deformace během tahu a charakter stopy. V softwaru se tento efekt simuluje přenášením modifikací tvaru profilu štětce (většinou textura s průhledností) a dynamikou a rychlostí tahů pera grafického tabletu. Program Krita nabízí řadu funkčních algoritmů štětců (*Brush Engines*), které jsou vhodné pro vytváření různých kreslících nástrojů. Každý kreslící nástroj (i tužka nebo pero) je z pohledu programu štětec (*Brush*).

![image](./images/krita-stetce.png)

### Předvolby štětců
![image](./images/krita-predvolby-stetcu.png)

Okno štětců otevřeš klávesou <kbd>F5</kbd>. Algoritmy použité pro chování nástrojů si prohlédni v seznamu Nástroj (*Engines*). Je to například *Pixel Engine, Bristle, Spray, Sketch* atd. Předvolby můžeš prohledávat také v doku *Brush Presets* a vyskakovací kruhové paletě (*Pop-up Palette*).

![image](./images/krita-popup.png)
**Vyskakovaci paletu**(*Pop-up Palette*) otevřeš pravým tlačítkem myši, pokud máš vybraný kreslící nástroj. Počet zobrazených předvoleb štětců ze seznamu (s daným štítkem - *tagem*) jde změnit.
:::note tip
Nastavení počtu zobrazených předvoleb štětců na vyskakovací paletě najdeš v hlavním menu:

 <Tabs
  groupId="jazykova-verze"
  defaultValue="czv"
  values={[
    {label: 'CZ verze', value: 'czv'},
    {label: 'EN verze', value: 'env'},
  ]
}>
<TabItem value="czv">Nastavení ‣ Nastavit aplikaci Krita ‣ Obecné ‣ Různé</TabItem>
<TabItem value="env">Settings ‣ Configure Krita ‣ General ‣ Miscellaneous</TabItem>
</Tabs>
:::


### Skupiny štětců
Štětce jsou rozdělené do určených skupin podle štítků (tagů). Základní skupiny si můžeš prohlédnout i ve vyskakovací kruhové paletě (*Pop-up Palette*), kterou zobrazíš pravým tlačítkem, pokud máš vybraný nějaký kreslící nástroj. Vlastní skupiny lze vytvářet. Štětce můžeš upravovat a importovat i exportovat jako sety. Více o vytváření vlastních štětců  a balíčcích zdrojů (*Resource Bundles*) v lekci Vlastní štětce a zdroje.



:::note úkol

Vyzkoušej si různé skupiny štětců.

:::

### Jak nastavit strukturu plátna?

Globální texturu povrchu pro nástroj najdeš v nastavení štětců <kbd>F5</kbd>, v okně Obecné ‣ Textura ‣ Vzorek ‣‣ Textura (*General ‣ Texture ‣ Pattern ‣‣ Texture*).

:::note úkol
![image](./images/krita-struktura.png)

Vyzkoušej si úpravu štětce. Vyber štětec **b)_Basic-5_Size_Opacity** (najdeš ho ve štítku Paint, nebo ve vyhledávacím okně doku Předvolby štětců) a v předvolbě štětců nastav texturu vzoru. Potom nastav texturu povrchu. Vyzkoušej štětec. Upravený štětec můžeš uložit tlačítke Save New Brush Preset. Základní nastavení vrátíš tlačítkem **Reload Brush Presets** (ikona recyklace).

:::



### Vyhlazování tahů
Vyber nástroj Štětec <kbd>B</kbd>. V doku *Tool Options* uvidíš typy vyhlazování tahu. Tato nastavení ti umožní zlepšit plynulost kreslení na grafickém tabletu a také různé efekty.

![image](./images/krita-tooloptions.png)
Na obrázku jsou možnosti nástrojů pro štětec a kapátko/pipetu (česká a anglická verze).

## Pipeta na výběr barvy
Zkratka <kbd>P</kbd> . Umožnuje najenom nabírat barvu z plátna, ale i interpolovat barvy. Funkci aktivuješ nastavením procent Míšení (*Blend*) v doku Možnosti nástrojů (viz obrázek). Jedním kliknutím pak nabereš barvu, druhým kliknutím nabereš druhou. Pipeta pak vytvoří interpolaci barev. Vyzkoušej si to. Nastavením míšení zpět na 100% tuto funkci zase vypneš.
## Výběr
Funkce výběru ti dovoluje malovat pouze do označené části, po inverzi výběru pouze mimo ni. V panelu nástrojů jsou různé tvary výběru určené pro rychlé maskování. Tento nástroj funguje podobně jako v ostatních bitmapových programech. Jenom tady ho budeš používat častěji.
## Barevný selektor
Pipeta. <keyb>P</keyb> Umožnuje nejenom nabírat barvu z plátna, ale i interpolovat barvy. Vyzkoušej si to.

![image](../img/aka-moc.svg)


## Režimy prolnutí u štětců a nástrojů
Režimy prolnutí (Blending Modes) fungují stejně jako u vrstev, pouze vytvářejí efekt přímo během malby v aktivní vrstvě.

Příklady Overlay, Multiply, Color atd.


:::note úkol

Vystínovat těleso pomocí režimů prolnutí v jedné vrstvě.

:::
