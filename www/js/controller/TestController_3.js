module.exports= function($scope, $state, TestService){
		console.log('enter controller_3')
		$scope.test = TestService.getTest()
	}
