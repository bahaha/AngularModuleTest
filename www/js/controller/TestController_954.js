module.exports= function($scope, $state, TestService){
		console.log('enter controller_954')
		$scope.test = TestService.getTest()
	}
