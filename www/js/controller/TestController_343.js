module.exports= function($scope, $state, TestService){
		console.log('enter controller_343')
		$scope.test = TestService.getTest()
	}
