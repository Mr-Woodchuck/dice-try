import { AddDice } from './AddDice.js';

Hooks.once('init', () => {
    const debouncedReload = foundry.utils.debounce(() => {
        window.location.reload();
    }, 100);

    game.settings.registerMenu("dice-try", "dice-try", {
        name: "DICETRY.config",
        label: "DICETRY.configTitle",
        hint: "DICETRY.configHint",
        // icon: "",
        type: AddDice,
        restricted: true
    });

    game.settings.register("dice-try", "dice-config", {
      name: "DICETRY.gmOnly",
      label: "DICETRY.gmOnlyTitle",
      hint: "DICETRY.gmOnlyHint",
      scope: "world",
      config: false,
      type: Object,
      default: AddDice.DEFAULT_OPTIONS
    })

});
