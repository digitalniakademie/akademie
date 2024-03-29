---
id: lekce-4-blender
sidebar_position: 6
---

# Blender: Modifikátory pro parametrický styl modelování a modelování s uzly
Výhodou je nedestruktivní styl modelování. Modifikátory nemění základní geometrii objektu a dají se dále upravovat. Pořadí, jak jsou umístěny za sebou, ovlivňuje výsledek.

Modifikátory mění stávající geometrii objektu nebo ovlivňují jeho vlastnosti. Pomocí nejčastěji používaných modifikátorů. jako je *Solidify*, *Bevel*, *Subdivision*, *Multires*, *Array* nebo *Boolean* můžeme vytvořit objekty nedestruktivním způsobem. Protože řada modifikátorů za sebou může výrazně zpomalit program, je ale  výhodné používat kombinaci polygonového modelování a modifikátorů.

:::note práce s modifikátory

Modifikátory se aplikují v řadě za sebou (*Stack*), pořadí je důležité a lze jej měnit přesouváním modifikátoru myší. Transformace (Rotace, Velikost, Přesun) by se měly pro správnou funkci předtím aplikovat na objekt. Umístění těžiště objektu (*Origin*) je také důležité.

Jednotlivý modifikátor aplikuješ pomocí  <kbd>Ctrl</kbd>+<kbd>A</kbd> pokud je myš na tabu modifikátoru, nebo z menu <kbd>Ctrl</kbd>+<kbd>A</kbd> v okně, ve vysouvacím menu se šipkou u názvu modifikátoru — a další možnost je addon **Modifier Tools**.

:::

## Seznam modifikátorů
Česká verze

![image](../img/blender-mod-cz.png)

Anglická verze

![image](../img/blender-mod-en.png)

## Otestuj nejčastěji používané modifikátory


:::tip

 Modifikátor **Subdivision** přímo zapneš pomocí <kbd>Ctrl</kbd>+<kbd>1...</kbd>. Příklad: Subdivision level 2 aktivuješ pomocí <kbd>Ctrl</kbd>+<kbd>2</kbd>. Úrovně tak můžeš rychle přepínat. Modifikátor **Subdivision** není vhodné používat s funkcemi Boolean, protože výpočet výsledné sítě neúnosně zpomaluje program. 

:::

- Subdivision
- Bevel
- Array
- Mirror
- Solidify

:::tip

Modifikátory lze aplikovat na uložené množiny vrcholů (Vertex Groups) a je to velice efektivní způsob modelování.

:::

Modifikátory jsou rozdělené v oddílech na *Modify* (Modifikace), které upravují data objektů, např. normály nebo UV mapy, *Generate* které vytvářejí novou geometrii, *Deform* které geometrii deformují a *Physics*, které nastavují fyzikální vlastnosti.

## Geometrické uzly: Geonodes
Práce s geometrickými uzly umožnujě vytvářet a měnit objekty. Využijeme add-on Node Wrangler, podobně jako u ostatních uzlových systému v Blenderu.

### Začínáme s geometrickými uzly
### Moduly
![image](../img/blender-mod-cz.png)

## Sverchok a geonodes
Dalším krokem je přímé modelování pomocí uzlů — pomocí editoru Geometric Nodes nebo add-onu jako je Sverchok.
Sverchok je generativní uzlový systém, který nainstaluješ jako add-on ze staženého zip souboru.

### Sverchok instalace

https://github.com/nortikin/sverchok/

Nejnovější verzi stáhneš kliknutím na butón Code / Download ZIP. Soubor se bude jmenovat sverchok-master.zip. Naistaluješ v nastavení add-ons a aktivuješ Node: Sverchok. Systém bude nyní dostupný ve výběru editorů jako Sverchok Nodes.

### Sverchok základy
- generování geometrie
- parametrické kopírování

## CAD Sketcher
Nejpokročilejším opensource add-on projektem, který nabízí CAD funkce a parametrické modelování pro Blender, je CAD Sketcher. Tento add-on využívá geonodes a postupy, známé např. z programu FreeCAD.

- stažení zde https://github.com/hlorus/CAD-Sketcher/archive/refs/heads/main.zip
- další informace https://makertales.gumroad.com/l/CADsketcher
- vyžaduje doinstalaci Python modulu Solvespace https://pypi.org/project/py-slvs/ (lze instalovat z .whl souboru uvnitř okna add-onu, nebo volbou Install from PIP). **Nutno restartovat Blender**.
- doporučuji aktivovat také add-ony **Booltool** a **3D-Print Toolbox**, první pro vyváření "vodotěsných" objektů a druhý pro jejich kontrolu


- <kbd>Shift</kbd>+<kbd>M</kbd> Midpoint constraint
- <kbd>Alt</kbd>+<kbd>D</kbd> Dimension

:::tip

Parametrické objekty lze vytvářet jako sítě (extrudují se modifikátorem Solidify) nebo jako křivky (extrudují se v nastavení Geometry v Object Data Properties pro **křivky**).

:::

## Postup modelování v CAD Sketcheru pro tisk

- vybrání pracovní plochy
- vytvoření skicy
- vytažení a bevel
- boolean operace
- vyčištění, modifikátor Weld 0.1, v edit módu zkratka X, Limited Dissolve 0.1
- export STL
