!function(){"use strict";function e(e){e.state("app.pages",{abstract:!0,url:"/pages"}).state("app.pages.403",{url:"/403",views:{"@":{templateUrl:"home/pages/403.html"}}}).state("app.pages.404",{url:"/404",views:{"@":{templateUrl:"home/pages/404.html"}}}).state("app.pages.500",{url:"/500",views:{"@":{templateUrl:"home/pages/500.html"}}})}angular.module("app.pages").config(e),e.$inject=["$stateProvider"]}();