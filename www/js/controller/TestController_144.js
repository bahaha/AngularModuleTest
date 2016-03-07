module.exports= function($scope, $state, TestService){
		console.log('enter controller_144')
		$scope.test = TestService.getTest()
	}
