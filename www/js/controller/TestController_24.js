module.exports= function($scope, $state, TestService){
		console.log('enter controller_24')
		$scope.test = TestService.getTest()
	}
