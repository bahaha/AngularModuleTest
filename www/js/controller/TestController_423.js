module.exports= function($scope, $state, TestService){
		console.log('enter controller_423')
		$scope.test = TestService.getTest()
	}
