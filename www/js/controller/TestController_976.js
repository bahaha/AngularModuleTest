module.exports= function($scope, $state, TestService){
		console.log('enter controller_976')
		$scope.test = TestService.getTest()
	}
