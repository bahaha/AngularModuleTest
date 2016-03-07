module.exports= function($scope, $state, TestService){
		console.log('enter controller_489')
		$scope.test = TestService.getTest()
	}
