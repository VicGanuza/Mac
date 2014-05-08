define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/footer/footerTemplate.html'
], function($, _, Backbone, footerTemplate){

  var FooterView = Backbone.View.extend({
    el: $("#footer"),
    events: {
      'click .close': 'cerrar',
      'click .subir': 'subir'
    },

    cerrar: function(){
        $('#footer .descripcion').addClass('display_none');
        $('#footer h2').addClass('display_none');
        $('#footer p').addClass('display_none');
        $('.close').addClass('display_none');
        $('.subir').removeClass('display_none');
    },

    subir:function(){
      $('#footer .descripcion').removeClass('display_none');
      $('#footer h2').removeClass('display_none');
      $('#footer p').removeClass('display_none');
      $('.close').removeClass('display_none');
      $('.subir').addClass('display_none');
    },

    initialize: function(id) {

      if (id="home") {
        this.titulo = "Son Digitales";
        this.subtitulo = "Plataforma para la conservaci&oacute;n de obras de arte digitales";
        this.desc = "La tecnolog&iacute;a es el gran ret de la conservaci&oacute;n de patrimonio ast&iacute;stico del siglo XX y de nuetro tiempo. asdklasdfklasjkdjkasfkadjasdflñjfkad kahdfjkasdhljahjksfhlafsjk lsdlskafs kh alhdfaskklas dkjfhl fksahlas jkfhl hsdfjkh afhawefjkn kfuieh kahdfjkasdhljahjksfhlafsjksky ioah fksy uiwrfksawei";
      }

      
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

      var data = {
          titulo : this.titulo,
          subtitulo : this.subtitulo,
          description: this.desc,
        _: _ 
      };

      var compiledTemplate = _.template( footerTemplate, data );
      this.$el.html(compiledTemplate);
    }

  });

  return FooterView;
  
});
