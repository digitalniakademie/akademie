---
id: lekce-1-inkscape
sidebar_position: 3
---

# Inkscape: Vektorové objekty

![image](./images/header-vectors.svg)

Inkscape nabízí řadu zajímavých nástrojů na vytváření a úpravu vektorových objektů. V programu lze také aplikovat bitmapové efekty a filtry.

## Rozdíl mezi bitmapovou a vektorovou grafikou

![image](./images/vec.png)

**Vektorová grafika**  (A) je definovaná parametry křivek. V grafických programech jsou reprezentovány **uzlovými body křivek** (*Node*) a jejich vodítky (*Handle*). Vektorová grafika je užitečná v případech, kdy se dá očekávat použití grafiky v různých velikostech a je důležitá bezztrátovost takových změn. Vektorové formáty se také používají v technických aplikacích pro CAD, CAM a CNC (.dxf, .stp).

Vektorová grafika je zpravidla úspornější co do velikosti souboru, záleží na složitosti křivek.

- Příklady vektorových formátů: .svg, .ai, .cdr

**Bitmapová grafika** (B) definuje mřížkou bodů, pixelů. Celkové rozlišení je pak konečná suma těchto bodů. FullHD rozlišení je 1920 krát 1080 pixelů (to je zhruba 2.1 miliónu pixelů, proto se někdy používá termín dvoumegapixel, 2MP). Rozlišení bitmapové grafiky se dá zvyšovat pomocí interpolace tak, že se chybějící body doplní algoritmicky (například pomocí umělé inteligence). Snížení rozlišení je ztrátové - zmenšený obrázek má celkově méně pixelů, méně informací.

- Příklady bitmapových formátů: .png, .jpg, .tiff

Některé bitmapové formáty mohou obsahovat vektorové objekty (.psd), a vektorové formáty pro polygrafii mohou většinou obsahovat bitmapové objekty.

:::note Formáty v Inkscapu

Hlavní formát ukládání je vektorový formát .svg. Hlavní formáty exportu jsou .png a .pdf.

:::

## Vektorové objekty, křivky a cesty

![image](./images/vectorcurve.png)

Hlavní zaměření programu Inkscape je tvorba a editace vektorových objektů. Aplikace bitmapových efektů a filtrů je užitečná pro ilustrace a doplňující grafické prvky.
### Geometrické tvary
Geometrické tvary, jako kruh, obdélník apod. mají další měnitelné parametry (například zaoblení rohů u obdélníků), které se ovládají pomocí tvořítka (Node Tool) <kbd>N</kbd>.

![image](./images/ink-nodes.svg)

Vyber objekt a tvořítko. Uzlové body označené čtverečkem mění rozměry objektu, kolečko mění speciální parametry. Elipsu lze změnit na kružnici kliknutím na čtvereček s klávesou <kbd>Ctrl</kbd>.

Pro aplikování vektorových efektů a editaci jednotlivých bodů se musí geometrické tvary převést na křivky neboli **cesty** (*Paths*), v menu Cesta ‣ Převést na cestu (Path ‣ Object to Path) nebo zkratkou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>.

### Efekty cesty
Parametrický efekt na vybranou cestu použiješ volbou z menu **Cesta ‣ Efekty cesty...**(*Path ‣ Path Effects*), v panelu použiješ ikonu :heavy_plus_sign: k přidání efektu:

![image](./images/ink-path-offset.jpg)

Efekty lze aplikovat na otevřené i uzavřené cesty — aktivní možnosti jsou vždy zvýrazněné. Efekt lze upravovat znovuvybráním objektu a tvořítka.

![image](./images/ink-path-fx.jpg)

![image](./images/ink-cestyefekty.svg)

:::note Úkol

 Vyzkoušej si efekty na otevřených a uzavřených cestách.

:::

### Transformace a logické operace

Vzájemné transformace objektů (*Boolean*) umožňují křivky (cesty) mezi sebou kombinovat, podobně jako matematické a logické množiny.

Tyto operace najdeš v menu **Cesta** (*Path*).

![image](./images/ink-boolean.svg)

Jsou to Sjednocení (Union), Rozdíl (Difference), Průnik (Intersection), Vyloučení (Exclusion), Dělení (Division).

### Úpravy křivek

![image](./images/ink-pathfunc.svg)

Křivky se upravují uzlovými kontrolními body, které je možné přidávat i mazat z kontextového menu nástroje uzlů (*Node Tool*), "tvořítka". Přidávat je lze i dvojklikem na volné místo křivky a vybraný uzel se maže klávesou <kbd>Delete</kbd>. Průběh křivky se upravuje vodítky uzlových bodů (na horním obrázku).

![image](./images/inkscape-nodetool.png)

Vybrané uzlové body lze seřazovat funkcí **Zarovnat a rozmístit** (*Align a Distribute*) <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>. Funkce operací mezi více křivkami najdeš v menu **Cesta** (*Path*).

:::note Úkol

 Vyzkoušej si úpravy uzlových bodů na vektorových objektech.

:::
