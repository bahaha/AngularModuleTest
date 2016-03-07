module.exports= function($scope, $state, TestService){
		console.log('enter controller_472')
		$scope.test = TestService.getTest()
	}
