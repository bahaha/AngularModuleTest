module.exports= function($scope, $state, TestService){
		console.log('enter controller_640')
		$scope.test = TestService.getTest()
	}
