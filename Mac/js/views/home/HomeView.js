define([
  'jquery',
  'underscore',
  'backbone',
  'views/footer/FooterView',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, FooterView, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.izquierda li').removeClass('active');
      $('.izquierda li a[href="#"]').parent().addClass('active');
      this.$el.html(homeTemplate);
      var footerView = new FooterView("home");
      footerView.render();


    }
    
  });

  return HomeView;
  
});
