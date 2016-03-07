module.exports= function($scope, $state, TestService){
		console.log('enter controller_517')
		$scope.test = TestService.getTest()
	}
