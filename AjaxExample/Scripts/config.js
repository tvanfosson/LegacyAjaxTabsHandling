requirejs.config({
    baseUrl: "scripts",
    paths: {
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/2.1/jquery.min', 'jquery-2.1.0'],
        'jquery-ui': ['//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min', 'jquery-ui-1.10.4.min'],
        'bootstrap': ['//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min', 'bootstrap.min'],
        'jquery.validate': ['//ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate', 'jquery.validate.min'],
        'jquery.validate.unobtrusive': ['//ajax.aspnetcdn.com/ajax/mvc/3.0/jquery.validate.unobtrusive', 'jquery.validate.unobtrusive']
    },
    shim: {
        'bootstrap': ['jquery'],
        'jquery-ui': ['jquery'],
        'jquery-validate': ['jquery'],
        'jquery-validate-unobtrusive': ['jquery-validate']
    }
});