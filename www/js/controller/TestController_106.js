module.exports= function($scope, $state, TestService){
		console.log('enter controller_106')
		$scope.test = TestService.getTest()
	}
