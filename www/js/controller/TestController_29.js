module.exports= function($scope, $state, TestService){
		console.log('enter controller_29')
		$scope.test = TestService.getTest()
	}
