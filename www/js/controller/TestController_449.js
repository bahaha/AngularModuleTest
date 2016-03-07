module.exports= function($scope, $state, TestService){
		console.log('enter controller_449')
		$scope.test = TestService.getTest()
	}
