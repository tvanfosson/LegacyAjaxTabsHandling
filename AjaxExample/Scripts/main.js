requirejs.config({
    baseUrl: "content/scripts",
    paths: {
        'jquery': ['https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min', '/scripts/jquery-2.1.0'],
        'jquery-ui': ['https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min', '/scripts/jquery-ui-1.10.4.min'],
        'bootstrap': ['https://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min', '/scripts/bootstrap.min'],
        'jquery-validate': ['https://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate', '/scripts/jquery.validate.min'],
        'jquery-validate-unobtrusive': ['https://ajax.aspnetcdn.com/ajax/mvc/3.0/jquery.validate.unobtrusive', '/scripts/jquery.validate.unobtrusive.min']
    },
    shim: {
        'bootstrap': ['jquery'],
        'jquery-ui': ['jquery'],
        'jquery-validate': ['jquery'],
        'jquery-validate-unobtrusive': ['jquery-validate']
    }
});