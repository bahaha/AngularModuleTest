module.exports= function($scope, $state, TestService){
		console.log('enter controller_506')
		$scope.test = TestService.getTest()
	}
