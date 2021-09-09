export class AddDice extends FormApplication {

   static get DEFAULT_OPTIONS() {
       return {
        imageForDfMinus: '-',
        imageForDfPlus: '+',
        imageForDcH: "👤",
        imageForDcT: "🪱", // worm looks like a tail?
        imageForD21: "1",
        imageForD22: "1",
        imageForD41: "1",
        imageForD44: "4",
        imageForD61: "1",
        imageForD66: "6",
        imageForD81: "🛑",
        imageForD88: "🐙",
        imageForD1001: "1",
        imageForD1000: "0",
        imageForD10010: "10",
        imageForD10000: "00",
        imageForD1201: "1",
        imageForD1212: "12",
        imageForD2001: "1",
        imageForD2020: "🐉"
       };
   }

   static CONFIG() {
       let settings = game.settings.get("dice-try", "dice-config") ? duplicate(game.settings.get("dice-try", "dice-config")) : null;
       let config = mergeObject(AddDice.DEFAULT_OPTIONS, settings);
       return config;
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

   async _updateObject(event, formData) {
     const debouncedReload = foundry.utils.debounce(() => {
         window.location.reload();
     }, 100);

     let settings = mergeObject(AddDice.CONFIG(), formData, { insertKeys: false, insertValues: false });

     await game.settings.set('dice-try', 'dice-config', settings);

      debouncedReload();
   }

   async getData(options) {
     let data = mergeObject({},
       AddDice.CONFIG());
     return data
   }
}
