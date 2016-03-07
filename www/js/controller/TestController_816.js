module.exports= function($scope, $state, TestService){
		console.log('enter controller_816')
		$scope.test = TestService.getTest()
	}
