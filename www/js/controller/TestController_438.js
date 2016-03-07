module.exports= function($scope, $state, TestService){
		console.log('enter controller_438')
		$scope.test = TestService.getTest()
	}
