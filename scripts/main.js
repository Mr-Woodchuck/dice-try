import { AddDice } from './AddDice.js';

Hooks.once('init', () => {
    const debouncedReload = foundry.utils.debounce(() => {
        window.location.reload();
    }, 100);

    // game.settings.registerMenu("dice-try", "dice-try", {
    //     name: "DICETRY.config",
    //     label: "DICETRY.configTitle",
    //     hint: "DICETRY.configHint",
    //     // icon: "",
    //     type: AddDice,
    //     restricted: false
    // });
    //
    game.settings.register("dice-try", "imageFor20", {
        name: "The 20 is",
        hint: "Do you want an image or special text on the twenty?",
        scope: "client",
        type: String,
        default: "20",
        config: true,
        onChange: debouncedReload
    });

    game.settings.register("dice-try", "imageFor1", {
        name: "The 1 is",
        hint: "Do you want an image or special text on the one?",
        scope: "client",
        type: String,
        default: "1",
        config: true,
        onChange: debouncedReload
    });


    game.settings.register("dice-try", "imageForDfMinus", {
        name: "The - is",
        hint: "Do you want an image or special text on the Minus?",
        scope: "client",
        type: String,
        default: "-",
        config: true,
        onChange: debouncedReload
    });


    game.settings.register("dice-try", "imageForDfBlank", {
        name: "The blank is",
        hint: "Do you want an image or special text on the blank?",
        scope: "client",
        type: String,
        default: "",
        config: true,
        onChange: debouncedReload
    });


    game.settings.register("dice-try", "imageForDfPlus", {
        name: "The + is",
        hint: "Do you want an image or special text on the Plus?",
        scope: "client",
        type: String,
        default: "+",
        config: true,
        onChange: debouncedReload
    });


});
