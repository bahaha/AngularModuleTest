module.exports= function($scope, $state, TestService){
		console.log('enter controller_596')
		$scope.test = TestService.getTest()
	}
