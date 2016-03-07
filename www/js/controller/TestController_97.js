module.exports= function($scope, $state, TestService){
		console.log('enter controller_97')
		$scope.test = TestService.getTest()
	}
