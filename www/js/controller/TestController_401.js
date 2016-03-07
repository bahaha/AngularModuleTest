module.exports= function($scope, $state, TestService){
		console.log('enter controller_401')
		$scope.test = TestService.getTest()
	}
