define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, SidebarView, homeTemplate){

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

      alert('Desde: ' + ini + ' hasta: '+ leave + '\n' + cant_pas + ' pasajeros ' + cant_mat + ' camas Matrimoniales \n' + cant_indv + ' camas individuales');
    },

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(homeTemplate);

     /* var sidebarView = new SidebarView();
      sidebarView.render();
 */
    }

  });

  return HomeView;
  
});
