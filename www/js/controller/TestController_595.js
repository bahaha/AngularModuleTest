module.exports= function($scope, $state, TestService){
		console.log('enter controller_595')
		$scope.test = TestService.getTest()
	}
