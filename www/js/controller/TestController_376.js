module.exports= function($scope, $state, TestService){
		console.log('enter controller_376')
		$scope.test = TestService.getTest()
	}
