module.exports= function($scope, $state, TestService){
		console.log('enter controller_922')
		$scope.test = TestService.getTest()
	}
