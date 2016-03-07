module.exports= function($scope, $state, TestService){
		console.log('enter controller_782')
		$scope.test = TestService.getTest()
	}
