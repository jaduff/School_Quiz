var mainApplicationModuleName = 'school_quiz';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'example']);

angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});
