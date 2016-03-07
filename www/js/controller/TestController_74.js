module.exports= function($scope, $state, TestService){
		console.log('enter controller_74')
		$scope.test = TestService.getTest()
	}
