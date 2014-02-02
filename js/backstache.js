var Backstache = (function($, Backbone, Handlebars) {
  var backstache = {};

  backstache._subViews = {};
  backstache.View = Backbone.View.extend({

    template: "",
    context: {},

    addSubView: function(name, view) {
      backstache._subViews[name] = view;
    },

    getTemplate: function() {
      return Handlebars.compile($('#' + this.template).html());
    },

    renderTemplate: function() {
      return this.getTemplate()(this.context);
    }

  });

  Handlebars.registerHelper("view", function(viewName) {
    var html = backstache._subViews[viewName].render();
    return new Handlebars.SafeString(html);
  });

  return backstache;

})($, Backbone, Handlebars);