var feelAtHomeApp = angular.module('feelAtHomeApp', []);

feelAtHomeApp.
    controller('ImagesController', function ($scope, $rootScope, $log) {

        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 360,
            gutter: 2
        });

        $grid.on( 'click', '.grid-item', function() {
            // change size of item via class
            $( this ).toggleClass('grid-item--gigante');
            // trigger layout
            $grid.masonry('reloadItems');
            $grid.masonry('layout')
        });

        $grid.on( 'layoutComplete', function( event, laidOutItems ) {
            console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
        });

        $scope.reorganize = function () {
            var $grid = $('.grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: 160,
                gutter: 2
            });
            $grid.masonry('reloadItems');
            $grid.masonry('layout')
        }

    });
