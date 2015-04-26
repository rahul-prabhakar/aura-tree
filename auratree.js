//console.clear();

var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
	$scope.input = [ {
		name : 'Vito',
		years : '1892-1954',
		img :'http://cs419826.vk.me/v419826799/786e/Xrlf8yKd2mo.jpg',
		children : [ {
			name : 'Michael',
			years : '1920-1997',
			img:'http://www.msnbc.com/sites/msnbc/files/2012/11/michael-corleone-men-style-fashion-hat-godfather-style_1.jpeg',
			children : [ {
				name : 'Anthony',
				years : '1951-',
				img:'http://upload.wikimedia.org/wikipedia/it/thumb/d/d5/AnthonyC.jpg/280px-AnthonyC.jpg'
			}, {
				name : 'Mary',
				years : '1953-1979',
						img:'http://vignette3.wikia.nocookie.net/padrino/images/a/aa/Mary.png/revision/latest?cb=20130329123801&path-prefix=it'
			} ]
		}, {
			name : 'Santino',
			years : '1916-1948',
			img:'http://vignette4.wikia.nocookie.net/godfather/images/9/99/Vlcsnap-2010-06-03-17h32m27s34.png/revision/latest?cb=20100705215340',
			children : [ {
				name : 'Vincent',
				years : '1948-',
				img:'http://upload.wikimedia.org/wikipedia/it/thumb/4/4b/Vinnie.jpg/280px-Vinnie.jpg'
			}, {
				name : 'Santino Jr.',
				years : '1945-'
			}, {
				name : 'Frank',
				years : '1940-'
			} ]
		}, {
			name : 'Connie',
			years : '1927-',
			img:'http://www.destinationhollywood.com/movies/godfather/images/f_multi_conniecorleone_01.jpg',
			children : [ {
				name : 'Victor',
				years : '1949-'
			}, {
				name : 'Francis',
				years : '1954-'
			} ]
		}, {
			name : 'Fredo',
			years : '1919-1959',
			img:'https://d166p16y7lrz7l.cloudfront.net/media/6018a8d831ffb76e7edb7198e8cd6ab8.jpg'
		} ]
	} ];
});

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
