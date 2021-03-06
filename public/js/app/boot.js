"use strict";
///<reference path="../../typings.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var app_component_1 = require("./app.component");
var message_service_1 = require("./messages/message.service");
var auth_service_1 = require("./auth/auth.service");
var error_service_1 = require("./errors/error.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [message_service_1.MessageService, auth_service_1.AuthService, error_service_1.ErrorService, router_1.ROUTER_PROVIDERS, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), http_1.HTTP_PROVIDERS]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5QztBQUN6Qyx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCx1QkFBaUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRCxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFDekUscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELDZCQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2xELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXRELG9DQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLGdDQUFjLEVBQUUsMEJBQVcsRUFBRyw0QkFBWSxFQUFFLHlCQUFnQixFQUFFLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLEVBQUUscUJBQWMsQ0FBQyxDQUFFLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MuZC50c1wiLz5cbmltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vbWVzc2FnZXMvbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbTWVzc2FnZVNlcnZpY2UsIEF1dGhTZXJ2aWNlICwgRXJyb3JTZXJ2aWNlLCBST1VURVJfUFJPVklERVJTLCBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9KSwgSFRUUF9QUk9WSURFUlNdICk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
