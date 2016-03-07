module.exports= function($scope, $state, TestService){
		console.log('enter controller_7')
		$scope.test = TestService.getTest()
	}
