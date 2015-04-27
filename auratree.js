
app.directive("auratree", function() {

	return {
				scope : {
					input : "=",
					holderid : '@',	
					node : '@'
				},
				template : '<script type="text/ng-template" id="treeTemp">'
					+ '<li>'
					+'<div ng-include = "holderid"></div>'
					+ '<ul ng-show="item.children && item.children.length!=0 && item.showChildren">'
					+ '<li ng-repeat="item in item.children" ng-include="'
					+ "'treeTemp'"
					+ '"></li>'
					+ '</ul><div ng-show= "item.children && item.children.length!=0  && !item.showChildren" ng-include = "node" ></div></li>' + '</script>'
					+ '<ul ng-repeat="item in input" ng-include = "'
					+ "'treeTemp'" + '"></ul>',
				link : function(scope) {

				}
			};
});
