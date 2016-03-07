module.exports= function($scope, $state, TestService){
		console.log('enter controller_780')
		$scope.test = TestService.getTest()
	}
