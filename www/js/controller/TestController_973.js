module.exports= function($scope, $state, TestService){
		console.log('enter controller_973')
		$scope.test = TestService.getTest()
	}
