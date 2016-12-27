requirejs.config({
    baseUrl: "js/app",
    paths: {
        lib: "../lib"
    },
    shim: {
        "lib/howler": {
            exports: "howler"
        },
        "lib/p2": {
            exports: "p2"
        }
    }
});