for f in {1..999}
do
	echo "angular.module('TestController_$f', ['TestService'])
	.controller('Controller_$f', function(\$scope, \$state, TestService){
		console.log('enter controller_$f')
		\$scope.test = TestService.getTest()
	})" > "TestController_$f.js"
done