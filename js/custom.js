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
  
  app.route({
    view: 'login', 
    load: 'login.html'
  });

  app.route({
    view: 'register', 
    load: 'register.html'
  });

  app.route({
    view: 'items', 
    load: 'items.html',
    onCreate: function() {
      var datatablesSimple = document.getElementById('datatablesSimple');
      if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
      }
    },
    onReady: function() {
      var datatablesSimple = document.getElementById('datatablesSimple');
      if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
      }
    } 
  });

  app.route({
    view: 'warehouses', 
    load: 'warehouses.html',
    onCreate: function() {
      var datatablesSimple = document.getElementById('datatablesSimple');
      if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
      }
    },
    onReady: function() {
      var datatablesSimple = document.getElementById('datatablesSimple');
      if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
      }
    } 
  });

  app.route({
    view: 'orders', 
    load: 'orders.html',
    onCreate: function() {
      var datatablesSimple = document.getElementById('datatablesSimple');
      if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
      }
    },
    onReady: function() {
      var datatablesSimple = document.getElementById('datatablesSimple');
      if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
      }
    } 
  });

  app.route({
    view: 'suppliers', 
    load: 'suppliers.html',
    onCreate: function() {
      var datatablesSimple = document.getElementById('datatablesSimple');
      if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
      }
    },
    onReady: function() {
      var datatablesSimple = document.getElementById('datatablesSimple');
      if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
      }
    } 
  });

  app.route({
    view: 'istatus', 
    load: 'items_status.html',
    onCreate: function() {
      var datatablesSimple = document.getElementById('datatablesSimple');
      if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
      }
    },
    onReady: function() {
      var datatablesSimple = document.getElementById('datatablesSimple');
      if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
      }
    } 
  });

  app.run();
});

function loginUser() {
  let xhttp = new XMLHttpRequest();
  let filename = "userdata.json";
  xhttp.open("GET", filename);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let username = document.getElementById("inputEmail");
      let password = document.getElementById("inputPassword");
      let jsonObj = JSON.parse(xhttp.responseText);
      if (username.value !== jsonObj.username || 
        password.value !== jsonObj.password) {
          alert("Wrong credentials!");
      } else {
          alert("Successfully logged in! Redirecting to dashboard.");
          window.location.replace("#main");
      }
    }
  };
  xhttp.send();
}

