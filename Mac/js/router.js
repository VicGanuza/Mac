// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/sonoros/SonorosView',
  'views/videos/VideosView',
  'views/contacto/ContactoView',
  'views/loggin/LogginView'
  // 'views/footer/FooterView'
], function($, _, Backbone, HomeView, SonorosView, VideosView, ContactoView, LogginView/*, FooterView*/) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'sonoros': 'showSonoros',
      'video':'showVideos',
      'contacto':'showContacto',
      'log_in':'showLoggin',
     // 'users': 'showContributors',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showSonoros', function(){
   
        // Call render on the module we loaded in via the dependency array
        var sonorosView = new SonorosView();
        sonorosView.render();

    });

    app_router.on('route:showVideos', function(){
   
        // Call render on the module we loaded in via the dependency array
        var videosView = new VideosView();
        videosView.render();

    });
    app_router.on('route:showContacto', function(){
   
        // Call render on the module we loaded in via the dependency array
        var contactoView = new ContactoView();
        contactoView.render();

    });

    app_router.on('route:showLoggin', function(){
   
        // Call render on the module we loaded in via the dependency array
        var logginView = new LogginView();
        logginView.render();

    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });

    // var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
