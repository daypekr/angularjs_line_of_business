/**
*  Module
*
* Description
*/

(function(){
	"use strict";
	var app=angular.module('production', []);
	app.controller('ProductListCtrl', ProductListCtrl );
	
function ProductListCtrl(){
		var vm=this;
		vm.products=[
{image:"images/1.jpg",
name:"Maya1"},
{image:"images/2.jpg",
name:"Maya2"}
		];

		vm.isShowImage=false;
		vm.showHideImage=function(){
			vm.isShowImage=!vm.isShowImage;
		}
	}

}());