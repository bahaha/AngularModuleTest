module.exports= function($scope, $state, TestService){
		console.log('enter controller_358')
		$scope.test = TestService.getTest()
	}
