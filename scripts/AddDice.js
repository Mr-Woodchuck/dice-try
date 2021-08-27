export class AddDice extends FormApplication {

   static get DEFAULT_OPTIONS() {
       return {
        //  minusText: game.settings.get("dice-try", "imageForDfMinus"),
       	// blankText: game.settings.get("dice-try", "imageForDfBlank"),
       	// plusText: game.settings.get("dice-try", "imageForDfPlus"),
        // imageFor1: game.settings.get("dice-try", "imageFor1"),
        // imageFor20: game.settings.get("dice-try", "imageFor20")
        imageForDfMinus: '-',
        imageForDfBlank: '',
        imageForDfPlus: '+',
        imageFor1: '1',
        imageFor20: '20'
       };
   }

   static CONFIG(user = game.user) {
       let userSettings = user.getFlag("dice-try", "settings") ? duplicate(user.getFlag("dice-try", "settings")) : null;
       let config = mergeObject(AddDice.DEFAULT_OPTIONS, userSettings);
       // mergeObject(config);
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

     await game.user.setFlag('dice-try', 'settings', settings);

     	let minusText = formData.imageForDfMinus;
     	let blankText = formData.imageForDfBlank;
     	let plusText = formData.imageForDfPlus;

     	// game.dice3d.addDicePreset({
     	// 	type:"df",
     	// 	labels:[
     	// 		minusText,
     	// 		blankText,
     	// 		plusText
     	// 	],
     	// system:"UserDefined"
     	// });

      debouncedReload();
   }

   async getData(options) {
     let data = mergeObject({},
       AddDice.CONFIG());
     return data
   }
}
