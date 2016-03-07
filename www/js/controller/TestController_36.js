module.exports= function($scope, $state, TestService){
		console.log('enter controller_36')
		$scope.test = TestService.getTest()
	}
