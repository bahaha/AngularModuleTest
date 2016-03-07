module.exports= function($scope, $state, TestService){
		console.log('enter controller_319')
		$scope.test = TestService.getTest()
	}
