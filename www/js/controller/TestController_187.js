module.exports= function($scope, $state, TestService){
		console.log('enter controller_187')
		$scope.test = TestService.getTest()
	}
