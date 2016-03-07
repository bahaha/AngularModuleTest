module.exports= function($scope, $state, TestService){
		console.log('enter controller_108')
		$scope.test = TestService.getTest()
	}
