module.exports= function($scope, $state, TestService){
		console.log('enter controller_393')
		$scope.test = TestService.getTest()
	}
