module.exports= function($scope, $state, TestService){
		console.log('enter controller_16')
		$scope.test = TestService.getTest()
	}
