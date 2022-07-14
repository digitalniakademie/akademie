---
id: lekce-8-blender
title: 3D Modelování
sidebar_position: 10
---

# Pro pokročilé: Architektura a design, CAD postupy v Blenderu


## Design

### CAD postupy v Blenderu

Některé CAD funkce obsahuje už základní instalace Blenderu. Možnosti se dají rozšířit pomocí Add-ons.

Nutné funkce a řešení:
- práce v měřítku
- možnost překreslování
- parametričnost
- blokování, linkování a zástupné Objekty
- export a import

### Měření

Nástroj měřidla je dostupný v objektovém menu v panelu nástrojů (viz obrázek). Doporučuji zapnout funkci Snap. Kliknutím na střed měřící linky lze měřit i úhly.

![image](./images/blender-measure.png)

Další možností je Add-on Measureit. Je součástí instalace a je nutné ho aktivovat. Má také zajímavé funkce pro zobrazení koordinátů vertexů u vybraného komponentu (Mesh Debug), nebo výpočet plochy. Výsledné anotace lze vyrenderovat jako obrázek do souboru nebo zkompletovat s běžným renderem v kompozitoru.

![image](./images/blender-measureit.png)

### CAD Sketcher
- add-on ve vývoji
- vytváření modelů pro 3D tisk a obrábění


## Architektura

- vizualizace
- knihovny materiálů a objektů
- parametrické zadávání

Nejdůležitější věcí pro realistickou architektonickou 3D vizualizaci  (Archviz) je používat správné měřítko jednotlivých komponentů, a to i dekorací. Realistické povrchy a osvětlení zvyšují fotorealistický efekt, ale správné měřítko je zásadní. V následující tabulce je několik základních rozměrů pro interiéry a exteriéry.

|                          | výška  (cm) | šířka (cm) | hloubka (cm) |
|--------------------------|-------------|------------|--------------|
| Dveře                    | 210         | 90         |              |
| Okno (80-100 od podlahy) | 65-90       | 50         |              |
| Schod                    | 18-24       |            |              |
| Zábradlí                 | 85-95       |            |              |
| Strop                    | 275         |            |              |
| Stůl pracovní (malý)     | 75          | 120        | 60           |
| Stůl konferenční         | 40-50       | 80-110     | 60-80        |
| Postel                   | 65          | 90         | 200          |
| Židle (podsedák)         | 100 (45)    |            |              |
| Křeslo (podsedák)        | 80 (35-45)  |            |              |
| Barová židle (podsedák)  | 70-75       | 35         | 35           |
| Kuchyňská linka (deska)  | 210 (85)    | 180        | 50           |
| Chodník                  |             | 120-150    |              |

#### Ergonomie a normativní standardy

Při modelování nezapomeň na ergonomické zásady a rozměry pro pohyb lidí, jak u prostředí tak u objektů.

:::info Profesionální vizualizace a knihovny objektů

V praxi se pro efektivní práci používají knihovny hotových dekorací, materiálů, textur, HDRi fotografií atp.

:::


### BIM (Building Information Modeling)

Blender podporuje BIM (Building Information Modeling) pro konstrukční dokumentace přes volně dostupný BlenderBIM Add-on (dříve IFC Exporter).

Stáhni aktuální verzi na https://blenderbim.org/download.html.

Nainstaluj plugin (stažený soubor **.zip**) do Blenderu.

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
<TabItem value="czv">Upravit ‣ Předvolby ‣ Rozšíření ‣ Nainstalovat</TabItem>
<TabItem value="env">Edit ‣ Preferences ‣ Add-ons ‣ Install</TabItem>
</Tabs>

Addon je ve vývoji.

### IES světelné zdroje
- fotometrické profily IES (Illuminating Engineering Society) jsou průmyslový standard popisující intenzitu a distribuci světla z konkrétního světelného zdroje s definovaným formátem (.ies, .ldt)
- přiřazují se k bodovému světlu
- simulace osvětlení pro vizualizaci mohou nahradit komplexní modely lamp

:::note Poznámka

Architektura a design mají podobné požadavky na vizualizaci, liší se v měřítku a konceptu scény.

:::

## Realistický a stylizovaný render
Pro prezentaci konceptu je vhodnější stylizované ztvárnění.
Realistický styl je pro finální verze projektu.

## Prototypy a CAD/CAM
Podporované formáty pro 3D tisk.

:::info Ukázka CAD modelování v Blenderu

Překresli součástku podle měřítka. Vymodeluj a exportuj objekt (pro tisk a pro použití v realtime enginu).

:::

## Archviz cvičení

### Interiéry
- obývací pokoj, kuchyně, ložnice, lobby, divadlo nebo opera, jídelna

### Exteriéry
- vila, obytné budovy, průmyslové budovy, kulturní zařízení
- atmosféra a osvětlení
- krajina

### Design a dekorace
- sklo a svítidla
- nábytek a bytové doplňky
- tkaniny, koberce, povlečení, závěsy
- pokojové rostliny, stromy a vegetace
