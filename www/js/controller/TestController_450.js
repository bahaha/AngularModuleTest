module.exports= function($scope, $state, TestService){
		console.log('enter controller_450')
		$scope.test = TestService.getTest()
	}
