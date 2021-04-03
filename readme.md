# Material Design Theme for phpBB 3.3
Dieses Foren-Theme wurde mit einem mobilgerechten Design im Hintergrund erstellt. Das heißt, jede Komponente wurde in erster Linie für Mobilgeräte optimiert.

## Abhängigkeiten
Das Look & Feel wurde auf Basis von Material Design erstellt. Dafür kommt das CSS Framework [muicss]([muicss](https://www.muicss.com/)) zum Einsatz.

Die JavaScript Komponenten werden durch die Script Bibliotheken von muicss unterstützt, aber ich plane diese komplett zu ersetzen.

## Philosophie

Ziel ist es, so wenig Code wie nötig im Frontent zu nutzen. Deshalb werden ES6 Module idealerweise ohne irgendein Framework verwendet.

Auch ohne JavaScript-Integration muss das Theme funktionieren und seinen Zweck erfüllen.

## Roadmap

- [X] jQuery raus
- [X] IE9+ Unterstützung raus
- [ ] modulare Neustrukturierung
- [ ] muicss Script components raus

**IE wird nicht unterstützt!** Wenn jemand sich berufen fühlt, seine Zeit mit einem Browser zu verschwenden, dessen Userbasis (zumindest statistisch auf meinem eigenen Server) bei unter 1% liegt, dann klone das Repo und veröffentliche es.

## Architecture

* `theme/style.scss` enthält Referenzen auf `muicss`, `material-icons` und den Theme-eigenen Komponenten und Styles
* `<GLOBAL_STYLE>` im `assets/` Verzeichnis wird immer mit einem Underscore _ gestartet.
* `<COMPONENT_NAME>` ist ein beliebiger Name einer Komponente

```
theme/
  style.scss
  assets/
    _<GLOBAL_STYLE>.scss
    <COMPONENT_NAME>/
      <COMPONENT_NAME>.js
      <COMPONENT_NAME>.scss
```

Im HTML wird der Component-Rahmen mit einem führenden _ deklariert, damit sie oben in der Datei-Hierarchie erscheinen und einen Einstieg bieten für andere Entwickler bieten.

```
templace/
  <COMPONENT_NAME>/
    _<COMPONENT_NAME>.html
    <COMPONENT_NAME>_<FEATURE_DESCRIPTION>.html
```