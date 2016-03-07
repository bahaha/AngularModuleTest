for f in {1..999}
do
	echo "angular.module('starter', [
	['js/service/TestService.js']
])
.controller('Controller_$f', ['\$scope', 'TestService', function (\$scope, TestService) {
	console.log('I\'m a controller')
	\$scope.test = TestService.getTest()
}])" > "TestController_$f.js"
done