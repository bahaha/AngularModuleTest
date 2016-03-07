module.exports= function($scope, $state, TestService){
		console.log('enter controller_67')
		$scope.test = TestService.getTest()
	}
