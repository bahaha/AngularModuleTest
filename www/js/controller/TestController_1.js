module.exports= function($scope, $state, TestService){
		console.log('enter controller_1')
		$scope.test = TestService.getTest()
	}
