(function() {
    var app = angular.module('product-directives', []);

    app.directive('productTitle',function(){
        // Return a configuration object defining how the directive will work
        return {
            restrict: 'E', // Type of Directive (E for Element)
            templateUrl: '../product-title.html' // Url of a template
        };
    });

    app.directive("productTabs", function(){
        return {
            restrict: 'E',
            templateUrl: "product-tabs.html",
            controller:function(){

                this.tab = 1;

                this.isSet = function(checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function(setTab) {
                    this.tab = setTab;
                };
            },
            controllerAs: 'tab'
        };
    });
})();