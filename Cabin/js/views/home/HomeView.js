define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'views/projects/ProjectsView',
  'text!templates/home/homeTemplate.html',
  'router'
], function($, _, Backbone, SidebarView, ProjectsView ,homeTemplate, Router){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    events: {
      'click .search': 'searchCabin'
    },

    searchCabin: function(){
      var ini = $('#date_arr').val();
      var leave = $('#date_leav').val();
      var cant_pas = $('#cant_pas').val();
      var cant_mat = $('#plaz_mat').val();
      var cant_indv = $('#plaz_ind').val();

      var projectsView = new ProjectsView();
        projectsView.render();
      //this.router.navigate("users", true);

      //alert('Desde: ' + ini + ' hasta: '+ leave + '\n' + cant_pas + ' pasajeros ' + cant_mat + ' camas Matrimoniales \n' + cant_indv + ' camas individuales');
    },

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(homeTemplate);

     /* var sidebarView = new SidebarView();
      sidebarView.render();
 */
    }
    /*,

    initialize: function() {

      this.router = new Router.AppRouter;

     // backbone.history.start();
    }*/

  });

  return HomeView;
  
});
