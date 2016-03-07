module.exports= function($scope, $state, TestService){
		console.log('enter controller_515')
		$scope.test = TestService.getTest()
	}
