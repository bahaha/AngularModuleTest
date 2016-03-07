module.exports= function($scope, $state, TestService){
		console.log('enter controller_735')
		$scope.test = TestService.getTest()
	}
