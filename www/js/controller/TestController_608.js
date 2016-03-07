module.exports= function($scope, $state, TestService){
		console.log('enter controller_608')
		$scope.test = TestService.getTest()
	}
