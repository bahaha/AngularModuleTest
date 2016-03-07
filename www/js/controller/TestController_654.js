module.exports= function($scope, $state, TestService){
		console.log('enter controller_654')
		$scope.test = TestService.getTest()
	}
