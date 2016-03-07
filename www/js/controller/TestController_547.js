module.exports= function($scope, $state, TestService){
		console.log('enter controller_547')
		$scope.test = TestService.getTest()
	}
