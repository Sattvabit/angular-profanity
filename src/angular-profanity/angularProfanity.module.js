(function (angular, $) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
	angular.module('angularProfanity.config', [])
		.value('angularProfanity.config', {
			debug: true
		});

	// Modules
	angular.module('angularProfanity.directives', [])
		.directive('profanityFilter', function() {
			
			function link(scope, element, attrs){
				// console.log('element', element);
				// console.log('attrs: ', attrs, scope[attrs.customSwears]);
				var defaultOptions = {
					replaceWith: '*',
					customSwears: []
				};
				
				var options = angular.extend(defaultOptions, attrs);
				angular.extend(options, { customSwears: scope.customSwears || []});
				angular.extend(options, { replaceWith: scope.replaceWith || '*'});
				angular.extend(options, { filter: scope.filter===undefined?false:scope.filter });
				
				if(scope.profaneText()) {
					options.profaneText = function(data) {
						scope.profaneText()(data, element);	
					};
				}

				// if(!!options.externalSwears) {
				// 	$(element).profanityFilter({
				// 		externalSwears: attrs.externalSwears,
				// 		customSwears: options.customSwears,
				// 		replaceWith: options.replaceWith
				// 	});
				// } else {
					$(element).profanityFilter(options);
				// }
			}

			return {
				link: link,
				scope: {
					customSwears: '=',
					replaceWith: '=',
					filter: '=',
					profaneText: '&'
				}
			};
		});
	angular.module('angularProfanity',
		[
			'angularProfanity.config',
			'angularProfanity.directives'
		]);

})(angular, $);
