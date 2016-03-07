module.exports= function($scope, $state, TestService){
		console.log('enter controller_435')
		$scope.test = TestService.getTest()
	}
