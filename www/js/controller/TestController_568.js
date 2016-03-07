module.exports= function($scope, $state, TestService){
		console.log('enter controller_568')
		$scope.test = TestService.getTest()
	}
