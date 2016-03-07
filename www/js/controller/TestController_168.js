module.exports= function($scope, $state, TestService){
		console.log('enter controller_168')
		$scope.test = TestService.getTest()
	}
