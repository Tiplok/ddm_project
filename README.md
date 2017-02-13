# DDM PROJECT

A project to learn AngularJS with a great course from [Code School](https://www.codeschool.com/courses/shaping-up-with-angular-js) and maybe more.

# AngularJS Learning

## Directives - HTML annotations that trigger Javascript behaviors  
ng-app - attach the Application Module to the page  
```
<html ng-app="store">
```
ng-controller - attach a Controller function to the page
```
<body ng-controller="StoreController as store">
```
ng-show / ng-hide - display a section based on an Expression (if true)
```
<h1 ng-show="name"> Hello, {{name}}! </h1>
```
ng-repeat - repeat a section for each item in an Array
```
<li ng-repeat="product in store.products"> {{product.name}} </li>
```

ng-src - replace src attribute for an image
```
<img ng-src="{{product.images[0].full}}"/>
```

ng-init - initialize an Expression in the current scope (rarely used cause we put this in controller)
```
<section ng-init="tab = 1">
```

ng-class - set a class to an element if Expression is true
```
<!-- li got class="active" if tab === 1 -->
<li ng-class="{ active:tab === 1 }">
```

ng-model - binds a element value to the property specified by the Expression
```
<!-- review.author has the same value of that input -->
<input ng-model="review.author" type="email"/>
```

ng-submit - call a function when the form is submitted
```
<!-- reviewForm.$valid is to make sure the form is valid before allowing the submission -->
<!-- In this case, the function addReview of reviewCtrl is called when the form is submitted -->
<form ng-submit="reviewForm.$valid && reviewCtrl.addReview(product)"></form>
```

ng-include - include a file specified by the Expression inside an element
```
<!-- ng-include is expecting a variable with the name of the file to include. -->
<!-- To pass the name directly as a string, use single quotes ('...'). -->
<!-- The generated HTML adds ng-scope and ng-binding to the attribute class of elements. -->
<!-- The file is added by an AJAX request to the server after the first request so it's better to use custom directive. -->
<h3 ng-include="'product-title.html'"></h3>
```

Custom Directive
```
// In javascript, a custom directive named productTitle
app.directive('productTitle',function(){
    // Return a configuration object defining how the directive will work
   return {
       restrict: 'E', // Type of Directive (E for Element)
       templateUrl: 'product-title.html' // Url of a template
   };
});

<!-- Element directive -->
<!-- Don't use self-closing tag <product-title/> some browsers don't like self-closing tag -->
<product-title></product-title>

<!-- Attribute directive -->
<h3 product-title></h3>

<!-- Use Element Directives for UI widgets and Attribute Directives for mixin behaviors... like a tooltip. -->
```

## Modules - Where our application components live  
```
// In javascript, a module named gemStore  
var app = angular.module('gemStore', []);

<!-- In HTML, we attach our module to the page -->
<html ng-app="gemStore">
    ...
</html>
```

## Controllers - Where we add application behavior  
```
// In javascript
app.controller('StoreController', function(){
    // this.products is a property of our controller
    this.products = gems;
});
    
<!-- In HTML -->
<div class="list-group" ng-controller="StoreController as store">
    <!-- the content of this div is the scope of the controller StoreController -->
</div>
```

## Expressions - How values get displayed within the page 
```
<!-- In HTML -->
{{ "AngularJS Expression" }}
```

## Filters
Our Recipe `{{ data* | filter:options* }}` 
 
date  
`{{ '1388123412323' | date:'MM/dd/yyyy @ h:mma'}}` 12/27/2013 @ 12:50AM 

uppercase & lowercase  
`{{'octagon gem' | uppercase}}` OCTAGON GEM

limitTo  
`{{'My Description' | limitTo:8 }}` My Descr  
`<li ng-repeat="product in store.prodcuts | limitTo:3">`  
Display first three products

orderBy  
`<li ng-repeat="product in store.prodcuts | orderBy:'-price'">`  
Will list products by descending price. Without the - products would list in ascending order.

currency  
`{{ product.price | currency }}` $2.95


