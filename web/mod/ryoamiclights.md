---
versions: # 多版本模式
  id: "ryoamic"
  vanilla: "1.20.4"
  loaders:
    - text: "NeoForge"
      loader: "neoforge"
    - text: "Fabric"
      loader: "fabric"
---


# RyoamicLights

[![GitHub license](https://img.shields.io/github/license/ThinkingStudios/RyoamicLights?style=flat-square)](https://raw.githubusercontent.com/ThinkingStudios/RyoamicLights/1.20.4-architectury/LICENSE)
![Environment: Client](https://img.shields.io/badge/environment-client-1976d2?style=flat-square)

[LambDynamicLights](https://github.com/LambdAurora/LambDynamicLights) unofficial architectury port.

A dynamic lights mod for Minecraft.

<img alt="forge" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/supported/forge_vector.svg">
<img alt="fabric" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/supported/fabric_vector.svg">

## What's this mod?

This mod adds dynamic lights to Minecraft. Dynamic lights are lights created by an entity holding an
item which makes light as a block, or created by an entity on fire, etc.

Searching other mods to replace OptiFine?
[Check out this list!](https://lambdaurora.dev/optifine_alternatives)

## Usage

Using this mod is very simple!

Install it in your mods folder along with [ObsidianUI](https://modrinth.com/mod/obsidianui), (and [Sodium (Fabric/Quilt)](https://modrinth.com/mod/sodium)/[Embeddium (Fabric/Forge/NeoForge)](https://modrinth.com/mod/embeddium) if wanted for better performances).

You will notice nothing at first but if you go into the video options or into the settings screen of the mod via Forge's Mod List, you will notice an option called Dynamic Lights which is by default off, choose the wanted configuration and enjoy!
You can also configure the mod by editing the file in `config/ryoamiclights.toml`.

## Build

Just do `./gradlew build` and everything should build just fine!

## How does it work internally?

Check [this documentation](https://github.com/LambdAurora/LambDynamicLights/blob/1.20/HOW_DOES_IT_WORK.md).

## Is there an API? How to use it as a developer?

Check [this documentation](/docs/ryoamiclights/api).

## Compatibility

- [Sodium (Fabric/Quilt)](https://modrinth.com/mod/sodium)/[Embeddium (Fabric/Forge/NeoForge)](https://modrinth.com/mod/embeddium) is recommended for better performances.
- **OptiFine/OptiForge/OptiFabric is obviously incompatible.**
- [Incompatible list](/docs/ryoamiclights/incompatible-mods)
