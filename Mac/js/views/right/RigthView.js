define([
  'jquery',
  'underscore',
  'backbone',
  'views/right/ContentRightView',
  'text!templates/right/rightMenuTemplate.html'
], function($, _, Backbone, ContentView, rightMenuTemplate){

  var RightView = Backbone.View.extend({
    el: $("#right_panel"),
    events: {
      'click .js-pane_top-open': 'abrir_panel_top',
      'click .js-pane_top-close': 'cerrar_panel_top',
      'click .js-pane_down-open': 'abrir_panel_down',
      'click .js-pane_down-close': 'cerrar_panel_down'
     // 'click .subir': 'subir'
    },

    abrir_panel_top: function(){
      $('#nivel1').removeClass('left_283');
      $('#icono_top').removeClass('content-nav--toggle-closed');
      $('#icono_top').removeClass('js-pane_top-open');
      $('#icono_top').addClass('js-pane_top-close');
    },

    cerrar_panel_top: function(){
      $('#nivel1').addClass('left_283');
      $('#icono_top').addClass('content-nav--toggle-closed');
      $('#icono_top').addClass('js-pane_top-open');
      $('#icono_top').removeClass('js-pane_top-close');
    },

    abrir_panel_down: function(){
      $('#nivel1_down').removeClass('left_283');
      $('#icono_down').removeClass('content-nav--toggle-closed');
      $('#icono_down').removeClass('js-pane_down-open');
      $('#icono_down').addClass('js-pane_down-close');
      var content_menu = new ContentView();
      content_menu.render();
    },

    cerrar_panel_down: function(){
      $('#nivel1_down').addClass('left_283');
      $('#icono_down').addClass('content-nav--toggle-closed');
      $('#icono_down').addClass('js-pane_down-open');
      $('#icono_down').removeClass('js-pane_down-close');
    },

    subir:function(){
      $('#footer .descripcion').removeClass('display_none');
      $('#footer h2').removeClass('display_none');
      $('#footer p').removeClass('display_none');
      $('.close').removeClass('display_none');
      $('.subir').addClass('display_none');
    },

    initialize: function() {

      /*
      var that = this;
      var options = {query: 'thomasdavis'}
     

      var onDataHandler = function(collection) {
          that.render();
      }

      this.model = new OwnerModel(options);
      this.model.fetch({ success : onDataHandler, dataType: "jsonp"});*/

    },

    render: function(){

      /*var data = {
          titulo : this.titulo,
          subtitulo : this.subtitulo,
          description: this.desc,
        _: _ 
      };*/

      var compiledTemplate = _.template( rightMenuTemplate);//, data 
      this.$el.html(compiledTemplate);
    }

  });

  return RightView;
  
});
