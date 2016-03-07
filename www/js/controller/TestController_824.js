module.exports= function($scope, $state, TestService){
		console.log('enter controller_824')
		$scope.test = TestService.getTest()
	}
