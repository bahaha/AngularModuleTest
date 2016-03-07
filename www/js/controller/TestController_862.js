module.exports= function($scope, $state, TestService){
		console.log('enter controller_862')
		$scope.test = TestService.getTest()
	}
