module.exports= function($scope, $state, TestService){
		console.log('enter controller_124')
		$scope.test = TestService.getTest()
	}
