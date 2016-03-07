module.exports= function($scope, $state, TestService){
		console.log('enter controller_845')
		$scope.test = TestService.getTest()
	}
