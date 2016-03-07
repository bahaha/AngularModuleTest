module.exports= function($scope, $state, TestService){
		console.log('enter controller_264')
		$scope.test = TestService.getTest()
	}
