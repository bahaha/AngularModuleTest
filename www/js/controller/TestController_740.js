module.exports= function($scope, $state, TestService){
		console.log('enter controller_740')
		$scope.test = TestService.getTest()
	}
