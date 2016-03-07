module.exports= function($scope, $state, TestService){
		console.log('enter controller_532')
		$scope.test = TestService.getTest()
	}
