module.exports= function($scope, $state, TestService){
		console.log('enter controller_426')
		$scope.test = TestService.getTest()
	}
