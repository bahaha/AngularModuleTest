module.exports= function($scope, $state, TestService){
		console.log('enter controller_941')
		$scope.test = TestService.getTest()
	}
