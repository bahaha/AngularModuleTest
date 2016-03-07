module.exports= function($scope, $state, TestService){
		console.log('enter controller_56')
		$scope.test = TestService.getTest()
	}
