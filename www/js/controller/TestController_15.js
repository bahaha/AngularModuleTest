module.exports= function($scope, $state, TestService){
		console.log('enter controller_15')
		$scope.test = TestService.getTest()
	}
