module.exports= function($scope, $state, TestService){
		console.log('enter controller_561')
		$scope.test = TestService.getTest()
	}
