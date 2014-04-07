define([
  'jquery',
  'underscore',
  'backbone',
  'models/videos/videosModel',
  'collections/videos/VideosCollection',
  'views/videos/VideosListView',
  'text!templates/videos/videosTemplate.html'
], function($, _, Backbone, VideosModel, VideosCollection, VideosListView, videosTemplate){

  var VideosView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(videosTemplate);

      var video0 = new VideosModel({artista: 'Alejandro Thornton y Paula Pellejero', titulo: 'Eva rebelde', residencia:'CABA, Buenos Aires'}); 
      var video1 = new VideosModel({artista:'Florencia Levy', titulo: 'El Baqueano', residencia:'CABA, Buenos Aires'}); 
      var video2 = new VideosModel({artista:'Paula Buontempo', titulo: 'Las instancias del vértigo', residencia:'La Plata, Buenos Aires'}); 
      var video3 = new VideosModel({artista:'Marcos Calvari', titulo: 'Compresión a noventa y nueve veces de lo Irreversible', residencia:'Bahía Blanca, Buenos Aires'});

      var aVideo = [video0, 
                    video1,
                    video2,
                    video3
                   ];

      var videosCollection = new VideosCollection(aVideo);  
      var videosListView = new VideosListView({ collection: videosCollection}); 
      
      videosListView.render(); 

    }
  });

  return VideosView;
});
