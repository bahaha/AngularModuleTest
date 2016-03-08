require.config({
    baseUrl: "js",
    paths: {
        'angularAMD': '../lib/angularAMD/angularAMD.min',
        'ionic': '../lib/ionic/js/ionic.bundle',
    },
    shim: {
    	'angularAMD': ['ionic']
    },
    deps: ['app']
});