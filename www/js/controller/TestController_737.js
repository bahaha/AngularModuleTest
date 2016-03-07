module.exports= function($scope, $state, TestService){
		console.log('enter controller_737')
		$scope.test = TestService.getTest()
	}
