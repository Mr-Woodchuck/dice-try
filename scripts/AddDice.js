export class AddDice extends FormApplication {

   static get DEFAULT_OPTIONS() {
       return {
           enabled: true,
           showExtraDice: game.dice3d && game.dice3d.hasOwnProperty("defaultShowExtraDice") ? game.dice3d.defaultShowExtraDice : false,
           hideAfterRoll: true,
           timeBeforeHide: 2000,
           d2020: '20',
           autoscale: true,
           scale: 75,
           speed: 1,
           shadowQuality: 'high',
           bumpMapping: true,
           sounds: true,
           soundsSurface: 'felt',
           soundsVolume: 0.5,
           canvasZIndex: 'over',
           throwingForce: 'medium',
           useHighDPI: true,
           showOthersSFX: true,
           muteSoundSecretRolls:false,
           enableFlavorColorset:true
       };
   }

   static get defaultOptions() {
       return mergeObject(super.defaultOptions, {
           title: game.i18n.localize("DICETRY.configTitle"),
           id: "AddDice",
           template: "modules/dice-try/templates/AddDice.html",
           width: 650,
           height: "auto",
           closeOnSubmit: true,
           tabs: [
               { navSelector: ".tabs", contentSelector: "#config-tabs", initial: "general" },
               { navSelector: ".dsn-appearance-tabs", contentSelector: "#dsn-appearance-content", initial: "global" }
           ]
       })
   }
}
