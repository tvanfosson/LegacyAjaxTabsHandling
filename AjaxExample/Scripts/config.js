requirejs.config({
    baseUrl: "scripts",
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
        'jquery-ui': '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min',
        'bootstrap': '//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.'
    },
    shim: {
        /* Set bootstrap dependencies (just jQuery) */
        'bootstrap': ['jquery'],
        'jquery-ui': ['jquery']
    }
});