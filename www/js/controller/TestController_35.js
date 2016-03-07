module.exports= function($scope, $state, TestService){
		console.log('enter controller_35')
		$scope.test = TestService.getTest()
	}
