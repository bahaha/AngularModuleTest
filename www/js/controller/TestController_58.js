module.exports= function($scope, $state, TestService){
		console.log('enter controller_58')
		$scope.test = TestService.getTest()
	}
