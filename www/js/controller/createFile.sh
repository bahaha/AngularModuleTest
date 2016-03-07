for f in {1..999}
do
	echo "define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_$f',['\$scope', '\$state', 'TestService', function(\$scope, \$state, TestService) {
    	console.log('this is controller $f');
    	\$scope.test = TestService.getTest()
    }]);
});" > "TestController_$f.js"
done