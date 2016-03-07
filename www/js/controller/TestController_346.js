module.exports= function($scope, $state, TestService){
		console.log('enter controller_346')
		$scope.test = TestService.getTest()
	}
