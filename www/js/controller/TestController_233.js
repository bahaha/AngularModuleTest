module.exports= function($scope, $state, TestService){
		console.log('enter controller_233')
		$scope.test = TestService.getTest()
	}
