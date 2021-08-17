---
id: linux-distro
title: Linux
sidebar_position: 2
---

# Linux a kreativní software

Všechny programy v kurzech běží také na Linuxu (distribucí je mnoho set). Distribuce v článku jsou vybrané i s ohledem na snadnost instalace nejnovějších verzí grafických programů (proto tam není např. Linux Mint nepodporující Ubuntu Snap). Ideálně by měly distribuce běžet dobře na desktopu — i na laptopu a konvertibilních zařízeních (2v1), používaných často při grafické práci. Poznámky se týkají **základních** instalací (protože mnoho funkcí se dá v Linuxu upravit, doinstalovat nebo vyměnit).

Důležité hledisko je také snadná instalace správců balíčků (snap, flatpak) umožňující **jednoduchou instalaci aplikací z terminálu**. Přestože mnoho distribucí obsahuje různé verze prohlížečů, softwarových center a instalátorů aplikací, obecně se v nich špaatně vyhledává podle filtrů a aplikace nejsou nejaktuálnější.

## Distribuce Linuxu

Doporučené distribuce Linuxu pro design s ohledem na:

- jednoduchost ovládání
- práci na desktopu
- univerzálnost
- výkon a náročnost na HW
- vertikální zobrazení
- konvertibilní zařízení, 2v1
- ovládání hybridní grafiky
- tablet a dotykový display
- funkčnost grafického tabletu
- práce s videem a 3D grafikou

### KDE Neon

- základ s desktopem Plasma
- možnosti nastavení

### Zorin

- univerzální distribuce
- nejlepší podpora konvertibilních zařízení
- autorotace
- alternativy layoutu desktopu
- frakční škálování pouze experimentální verze
- snap i flatpak v základní instalaci

### Kubuntu

- univerzální a svižné
- základní instalace velice dobrá

### Peppermint

- efektivní a rychlé
- jednoduché ovládání

### Pop!_OS

- jednoduché a stylové
- atraktivní ovládání

### elementary OS

- efektní a rychlé
- autorotace
- minimalizace oken nestandartní

### Ubuntu Studio
Ambiciózní distribuce, obsahující předinstalované kreativní programy pro grafiku i multimedia.

- specializace na multimedia
- nastavení JACK audio

### Ostatní distribuce
Programy běží samozřejmě i na jiných distribucích. U některých je někdy potřeba nastavit např. grafiku kvůli možným problémům s ovladači grafické karty (screen tearing, scroll tearing) nebo jiné ovladače manuálně. Některé v základním repositáři neobsahují aktuální verze programů, nebo mají komplikovanou instalaci správců balíčků a repozitářů pro nezkušeného uživatele. Distribuce Linuxu se často posuzují podle vzhledu, který ale tvoří **desktopové prostředí** (*Desktop Environment, DE*). Jádro samotné distribuce může být ale důležitější pro danou aplikaci/e.

Další kvalitní distribuce jsou například základní Ubuntu, Mageia, Debian 11, deepin, MATE, Solus, Fedora atd.

## Srovnání s Windows 11

Windows jsou lépe využitelné na konvertibilních zařízeních a laptopech (především podpora hybridní grafiky je bezproblémová). Desktopové prostředí je plynulejší, systém ale vyžaduje mnohem více prostředků. Zobrazovací funkce jako frakční škálování (umožňující zobrazovat desktop např. ve zvětšení 1.25) jsou lépe vyřešené a funkční ve Windows. Také funkce  přístupnosti (Accesibility), onscreen klávesnice, ovládání hlasem (diktování) a pomocí gest na touchcreenu a touchpadu.

Obecně lze říci, že Windows jsou vhodné pro nejširší spektrum aplikací a zařízení, zpravidla s výkonnějším hardwarem. Linux distribuce jsou vynikající pro specifické aplikace (a určité programátorské zázemí uživatele je výhodou). Některé aplikace běží v určitých sestavách na Linuxu lépe (Kdenlive). Žádná distribuce Linuxu ale zatím (srpen 2021) nepodporuje **plně** konvertibilní zařízení, především kvůli funkčnosti **onscreen klávesnice** a ovladačům autorotace displeje.

## Seznam vybraných distribucí

| Distribuce        | Package Manager    | Odkaz                                       |
|-------------------|--------------------|---------------------------------------------|
|                   |                    |                                             |
| **Zorin**         | snap, flatpak, apt | https://zorinos.com/download/               |
| **Kubuntu**       | snap               | https://kubuntu.org/getkubuntu/             |
| **Peppermint**    | snap               | https://peppermintos.com/guide/downloading/ |
| **Ubuntu Studio** | snap, apt          | https://ubuntustudio.org/download/          |
| **elementary OS** | snap*              | https://elementary.io/                      |
| **Pop!_OS**       | snap*              | https://pop.system76.com/                   |
| **KDE Neon**      | snap*              | https://neon.kde.org/download               |
| **deepin**        | snap*, dpkg, apt   | https://www.deepin.org/en/download/         |
| **Mageia**        | snap*, urpmi, rpm  | https://www.mageia.org/en/downloads/        |
|                   |                    |                                             |

Uvedený Package Manager je pro řízení instalace aplikací, ne systémových balíčků. Označené položky je možné na systému doinstalovat.

## Struktura Linuxových systémů

- Linuxové jádro (kernel)
- Základní verze, distribuce, distro (např. Ubuntu, Debian, Arch Linux). Distribuce jsou i odvozené verze, deriváty, např. Manjaro je derivát Arch Linuxu, Red Hat Enterprise Linux (RHEL) je derivát Fedora, CentOS je derivát RHEL, AlmaLinux je derivát CentOS.
- Desktop Environment (např. KDE Plasma, GNOME,  Xfce, LXDE)
- Window Manager (např. Fluxbox, IceWM) pro X Window System (X11) grafického uživatelského rozhraní (např. KDE)
- Compositor (např. Wayland)
- Display Manager, např. GDM (používaný GNOME), SDDM (používaný KDE)
- Package Manager, systém pro správu systémových balíčků a/nebo instalaci aplikací (např. Apt, Flatpak, Ubuntu Snap). Mohou mít GUI, např Synaptic je GUI pro Apt.
