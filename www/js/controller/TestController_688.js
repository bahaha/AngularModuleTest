module.exports= function($scope, $state, TestService){
		console.log('enter controller_688')
		$scope.test = TestService.getTest()
	}
