module.exports= function($scope, $state, TestService){
		console.log('enter controller_22')
		$scope.test = TestService.getTest()
	}
