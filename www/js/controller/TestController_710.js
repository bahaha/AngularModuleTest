module.exports= function($scope, $state, TestService){
		console.log('enter controller_710')
		$scope.test = TestService.getTest()
	}
