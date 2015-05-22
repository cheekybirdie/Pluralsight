var App = Ember.Application.create();

// Router
function setRouting() {
    // a list of tables
    this.resource('tables'); // '/#/tables'
}

App.Router.map(setRouting);