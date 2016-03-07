module.exports= function($scope, $state, TestService){
		console.log('enter controller_910')
		$scope.test = TestService.getTest()
	}
