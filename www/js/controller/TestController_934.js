module.exports= function($scope, $state, TestService){
		console.log('enter controller_934')
		$scope.test = TestService.getTest()
	}
