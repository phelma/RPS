/*global Xoxo, Backbone*/

Xoxo.Collections = Xoxo.Collections || {};

(function () {
    'use strict';

    Xoxo.Collections.Games = Backbone.Collection.extend({

        model: Xoxo.Models.Games

    });

})();
