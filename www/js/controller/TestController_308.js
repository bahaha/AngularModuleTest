module.exports= function($scope, $state, TestService){
		console.log('enter controller_308')
		$scope.test = TestService.getTest()
	}
