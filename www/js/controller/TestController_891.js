module.exports= function($scope, $state, TestService){
		console.log('enter controller_891')
		$scope.test = TestService.getTest()
	}
