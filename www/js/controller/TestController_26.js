module.exports= function($scope, $state, TestService){
		console.log('enter controller_26')
		$scope.test = TestService.getTest()
	}
