$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 60);

  //var app = $.spapp({pageNotFound : 'error_404'}); // initialize

  var app = $.spapp({
    defaultView  : "#main",
    templateDir  : "./tpl/",
    //pageNotFound : "error_404"
  });

  // define routes
  app.route({
    view: 'main',
    onCreate: function() {},
    onReady: function() { },
    load: "index.html"
  });
  
  app.route({view: 'login', load: 'login.html' });
  app.route({view: 'items', load: 'items.html' });
  app.route({view: 'warehouses', load: 'warehouses.html' });
  app.route({view: 'orders', load: 'orders.html' });
  app.route({view: 'suppliers', load: 'suppliers.html' });
  app.route({view: 'istatus', load: 'items_status.html' });

  app.run();
});