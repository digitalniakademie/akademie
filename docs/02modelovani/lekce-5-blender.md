---
id: lekce-5-blender
sidebar_position: 7
---

# Blender:  Materiálové uzly v Shader Editoru a Node Wrangler
Materiály můžeme vytvářet i měnit v hlavním okně Layout v sekci Vlastosti (Properties). V této části si ukážeme výhody práce s uzly v okně Shader Editor.

## Instalace a aktivace pluginu (Add-on)
Add-ony instaluješ z preferencí (Edit ‣ Preferences ‣ Add-ons) . Stažený plugin je zpravidla .zip — soubor vybereš a zaškrtnutím políčka vlevo aktivuješ. Pro aktivaci při dalším spuštění Blenderu ulož nastavení (hamburger menu vlevo dole).

### Node Wrangler
Node Wrangler je plugin (Add-on) který je součástí instalace Blender a je potřeba ho pouze aktivovat. Usnadňuje práci s uzly (zpravidla v sekci Shading)
## Jak pracovat s uzly
Pracovní režim pro uzly. Koncept uzlů se používá pro správu a programování složitějších struktur, v Blenderu také v sekcích Texture Node Editor, Compositor nebo Geometry Node Editor.

- přehlednost
- rychlost modifikací
- náhledy

## Základní zkratky pro Node Wrangler

- prohlédni výstup na daném uzlu <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Left Click</kbd>
- Texture Setup  <kbd>Ctrl</kbd>+<kbd>T</kbd> při vybraném uzlu
- Principled Texture Setup <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd>
- Rychlý mix (*Lazy Mix*) <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Right Click</kbd>+<kbd>Přetažení</kbd>, přetažením jednoho materiálového uzlu na druhý se vytvoří Mix uzel
- <kbd>Shift</kbd>+<kbd>P</kbd> zarámuje vybrané uzly, používá se pro přehlednost

Node Wrangler nabízí mnoho triků na urychlení práce z uzly, pro seznam všech funkcí si prostuduj aktuální dokumentaci.

## Node Arrange
- základní addon, který automaticky přehledně rozloží uzly na desce (po aktivaci ho nalezneš v postranním panelu v uzlových editorech)
- vhodný v kombinaci s add-onem Node Wrangler

:::note Poznámka

 Blender podporuje systém uzlů v programování materiálů, efektů i geometrie.

:::

Příklad nastavení u tabletu Wacom.
<Tabs
  groupId="jazykova-verze"
  defaultValue="czv"
  values={[
    {label: 'V české verzi', value: 'czv'},
    {label: 'V anglické verzi', value: 'env'},
  ]
}>
<TabItem value="czv">Upravit ‣ Předvolby ‣ Rozhraní ‣ Vstup</TabItem>
<TabItem value="env">Edit ‣ Preferences ‣ Interface ‣ Input</TabItem>
</Tabs>
Tady také nastavíš emulaci numerické klávesnice a v polních podmínkách ovládání pomocí touchpadu.
