module.exports= function($scope, $state, TestService){
		console.log('enter controller_481')
		$scope.test = TestService.getTest()
	}
