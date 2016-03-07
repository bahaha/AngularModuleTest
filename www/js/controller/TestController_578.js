module.exports= function($scope, $state, TestService){
		console.log('enter controller_578')
		$scope.test = TestService.getTest()
	}
