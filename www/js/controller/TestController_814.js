module.exports= function($scope, $state, TestService){
		console.log('enter controller_814')
		$scope.test = TestService.getTest()
	}
