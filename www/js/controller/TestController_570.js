module.exports= function($scope, $state, TestService){
		console.log('enter controller_570')
		$scope.test = TestService.getTest()
	}
