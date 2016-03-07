module.exports= function($scope, $state, TestService){
		console.log('enter controller_412')
		$scope.test = TestService.getTest()
	}
