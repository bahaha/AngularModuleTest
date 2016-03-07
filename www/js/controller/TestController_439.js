module.exports= function($scope, $state, TestService){
		console.log('enter controller_439')
		$scope.test = TestService.getTest()
	}
