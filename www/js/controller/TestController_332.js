module.exports= function($scope, $state, TestService){
		console.log('enter controller_332')
		$scope.test = TestService.getTest()
	}
