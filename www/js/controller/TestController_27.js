module.exports= function($scope, $state, TestService){
		console.log('enter controller_27')
		$scope.test = TestService.getTest()
	}
