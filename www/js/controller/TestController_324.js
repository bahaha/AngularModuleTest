module.exports= function($scope, $state, TestService){
		console.log('enter controller_324')
		$scope.test = TestService.getTest()
	}
