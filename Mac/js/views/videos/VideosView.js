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
      
      this.$el.html(videosTemplate);

      var videosCollection = new VideosCollection();  
      var videosListView = new VideosListView({ collection: videosCollection}); 
      
      videosListView.render(); 

    }
  });

  return VideosView;
});
