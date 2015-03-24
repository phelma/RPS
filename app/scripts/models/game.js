/*global Xoxo, Backbone*/

Xoxo.Models = Xoxo.Models || {};

(function () {
    'use strict';

    Xoxo.Models.Game = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
