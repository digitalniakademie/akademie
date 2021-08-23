---
id: utility-linux-windows-commands
title: Systémové utility
sidebar_position: 6
---

# Systémové utility

Užitečné programy, které nemusí přímo souviset s grafikou. Umožňují získávat informace o systému — softwaru a hardwaru — důležité pro optimální nastavení a hledání chyb.

## Linux
Aplikace s funkcí systémového monitoru jsou Gnome System Monitor (často předinstalovaný v systému), Stacer, Conky, Netdata ad. Další aplikace (mohou být předinstalované v systému):

### hardinfo
Informace o systému.
### htop
Interaktivní systémový monitor a prohlížeč běžících procesů.
### bpytop
Systémový monitor.
### lspci
Příkaz pro zobrazení PCI připojených zařízeních (užitečné např. pro zjištění typu bezdrátového zařízení).
### inxi
Systémové informace z příkazové řádky.

## Windows

Terminály **powershell**, **cmd** a **wt** (spouští se v uživatelském adresáři <kbd>Win</kbd>+<kbd>R</kbd>, nebo v aktuálním adresáři v navigačním podokně Průzkumníka souborů - Windows Explorer Address Bar)

Pokud chceš spustit Windows Terminál Powershell (wt) z aktuálního adresáře jako Powershell (powershell) a Command Prompt (cmd),
```
wt -d plná-cesta-do-aktuálního-adresáře
```

Powershell jako administrátor spustíš v okně <kbd>Win</kbd>+<kbd>R</kbd> s <kbd>Ctrl</kbd>+<kbd>Shift</kbd>, <kbd>Enter</kbd>.

### Informace o systému

:::tip

<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Esc</kbd> spustí Správce úloh (Task Manager), ve kterém se dají zjistit systémové informace (tab Výkon).

:::

Většinu důležitých základních informací ve Windows získáš z aplikace Správce úloh. Utility spustitelné z terminálů nebo zkratkami:

Systémové Informace:

```
systeminfo
```


### Procesor
Command Prompt:

```
wmic path Win32_Processor get Family,ThreadCount,CurrentClockSpeed,MaxClockSpeed
```
Powershell alternativa:

```
Get-WmiObject Win32_Processor
```

### Paměti
Informace o pamětích z terminálu na starších systémech (cmd):

```
wmic memorychip get banklabel, manufacturer, partnumber, speed, MemoryType, SMBIOSMemoryType, devicelocator
```
Hodnota MemoryType 0 je neznámý typ, 20 je DDR, 21 je DDR2, 22 je DDR2 FB-DIMM, 24 je DDR3, 26 je DDR4. Informaci je možné získat i z SMBIOSMemoryType.

Powershell alternativa:
```
Get-WmiObject win32_physicalmemory | Format-Table Banklabel,Manufacturer, Speed,Configuredclockspeed,Devicelocator,Capacity,MemoryType,SMBIOSMemoryType,Serialnumber -autosize
```

### Grafická karta

Command Prompt:
```
wmic path win32_VideoController get name,AdapterDACType,AdapterRAM
```
Powershell alternativa:

```
Get-WmiObject win32_VideoController
```

```
Get-WmiObject win32_VideoController | Format-Table Name,AdapterDACType,AdapterRAM,CurrentHorizontalResolution,CurrentVerticalResolution,CurrentRefreshRate,DriverVersion -autosize
```
## Virtualizace a testování systémů

### Ventoy

Spouštění live .iso operačních systémů

### Oracle VM VirtualBox
Virtualizace operačních systémů. Další podobné oblíbené programy jsou VMware (Windows, Linux) a GNOME Boxes (Linux).
