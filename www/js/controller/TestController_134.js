module.exports= function($scope, $state, TestService){
		console.log('enter controller_134')
		$scope.test = TestService.getTest()
	}
