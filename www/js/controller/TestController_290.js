module.exports= function($scope, $state, TestService){
		console.log('enter controller_290')
		$scope.test = TestService.getTest()
	}
