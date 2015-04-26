
app.directive("auratree", function() {

	return {
		scope : {
			input : "=",
			holderid : '@',
		},
		template : function(element) {
			return '<script type="text/ng-template" id="treeTemp">'
					+ '<li><div ng-include = "holderid"></div>'
					+ '<ul ng-if="item.children">'
					+ '<li ng-repeat="item in item.children" ng-include="'
					+ "'treeTemp'"
					+ '"><div ng-include = "holderid"></div></li>'
					+ '</ul></li>' + '</script>'
					+ '<ul ng-repeat="item in input" ng-include = "'
					+ "'treeTemp'" + '"></ul>';
		},
		link : function(scope) {
		}
	};
});
