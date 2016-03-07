module.exports= function($scope, $state, TestService){
		console.log('enter controller_598')
		$scope.test = TestService.getTest()
	}
