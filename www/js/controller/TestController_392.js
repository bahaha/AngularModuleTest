module.exports= function($scope, $state, TestService){
		console.log('enter controller_392')
		$scope.test = TestService.getTest()
	}
