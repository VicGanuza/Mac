define([
  'jquery',
  'underscore',
  'backbone',
/*  'models/contacto/ContactoModel',
  'collections/contacto/ContactoCollection',*/
  'text!templates/contacto/contactoTemplate.html'
], function($, _, Backbone/*, ContactoModel, ContactoCollection*/, contactoTemplate){

  var ContactoView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      
      this.$el.html(contactoTemplate);

      }
     });

  return ContactoView;
});