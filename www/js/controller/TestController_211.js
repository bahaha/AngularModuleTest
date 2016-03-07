module.exports= function($scope, $state, TestService){
		console.log('enter controller_211')
		$scope.test = TestService.getTest()
	}
