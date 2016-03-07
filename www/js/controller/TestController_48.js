module.exports= function($scope, $state, TestService){
		console.log('enter controller_48')
		$scope.test = TestService.getTest()
	}
