module.exports= function($scope, $state, TestService){
		console.log('enter controller_121')
		$scope.test = TestService.getTest()
	}
