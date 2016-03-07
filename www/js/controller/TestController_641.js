module.exports= function($scope, $state, TestService){
		console.log('enter controller_641')
		$scope.test = TestService.getTest()
	}
