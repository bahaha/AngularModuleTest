module.exports= function($scope, $state, TestService){
		console.log('enter controller_208')
		$scope.test = TestService.getTest()
	}
