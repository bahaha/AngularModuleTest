module.exports= function($scope, $state, TestService){
		console.log('enter controller_673')
		$scope.test = TestService.getTest()
	}
