define([
  'jquery',
  'underscore',
  'backbone',
  'models/videos/VideosModel'
], function($, _, Backbone, VideosModel){
  var VideosCollection = Backbone.Collection.extend({
    model: VideosModel,
    
    initialize: function(){

      //this.add([project0, project1, project2, project3, project4]);

    }

  });
 
  return VideosCollection;
});
