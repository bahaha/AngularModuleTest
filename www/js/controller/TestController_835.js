module.exports= function($scope, $state, TestService){
		console.log('enter controller_835')
		$scope.test = TestService.getTest()
	}
