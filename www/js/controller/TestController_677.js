module.exports= function($scope, $state, TestService){
		console.log('enter controller_677')
		$scope.test = TestService.getTest()
	}
