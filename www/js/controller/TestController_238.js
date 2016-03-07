module.exports= function($scope, $state, TestService){
		console.log('enter controller_238')
		$scope.test = TestService.getTest()
	}
