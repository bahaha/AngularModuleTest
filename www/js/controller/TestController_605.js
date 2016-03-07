module.exports= function($scope, $state, TestService){
		console.log('enter controller_605')
		$scope.test = TestService.getTest()
	}
