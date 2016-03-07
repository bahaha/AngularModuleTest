module.exports= function($scope, $state, TestService){
		console.log('enter controller_320')
		$scope.test = TestService.getTest()
	}
