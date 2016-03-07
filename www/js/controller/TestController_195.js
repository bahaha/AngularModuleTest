module.exports= function($scope, $state, TestService){
		console.log('enter controller_195')
		$scope.test = TestService.getTest()
	}
