define([
  'jquery',
  'underscore',
  'backbone',
  'models/videos/videosModel',
  'collections/videos/VideosCollection',
  //'views/description/DescriptionView',
  'text!templates/description/descriptionTemplate.html'
], function($, _, Backbone, VideosModel, VideosCollection, descriptionTemplate){

  var ObraView = Backbone.View.extend({
    el: $("#page"),
    render: function(id){
      
      console.log(id);

      var videosCollection = new VideosCollection(id);  

      var data = {
        obra: videosCollection.models,
        _: _ 
      };
      
      console.log(data);
      var compiledTemplate = _.template( descriptionTemplate, data );
      //var videosListView = new VideosListView({ collection: videosCollection}); 
      this.$el.html( compiledTemplate ); 
      //videosListView.render(); 

    }
  });

  return ObraView;
});
