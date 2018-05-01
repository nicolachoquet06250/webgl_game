"use strict";

class Game {
    constructor(canvasId) {
        // Canvas et engine défini ici
        let canvas = document.querySelector(`#${canvasId}`);
        let engine = new BABYLON.Engine(canvas, true);
        let _this = this;
        // On initie la scène avec une fonction associé à l'objet Game
        this.scene = this._initScene(engine);
        // Permet au jeu de tourner
        let _player = new Player(_this, canvas);
        let _arena = new Arena(_this);
        engine.runRenderLoop(function () {
            _this.scene.render();
        });
        // Ajuste la vue 3D si la fenetre est agrandi ou diminué
        window.addEventListener("resize", function () {
            if (engine) {
                engine.resize();
            }
        }, false);
    }

    _initScene(engine) {
        let scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        return scene;
    }

}