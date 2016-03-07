module.exports= function($scope, $state, TestService){
		console.log('enter controller_781')
		$scope.test = TestService.getTest()
	}
