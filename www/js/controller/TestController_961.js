module.exports= function($scope, $state, TestService){
		console.log('enter controller_961')
		$scope.test = TestService.getTest()
	}
