module.exports= function($scope, $state, TestService){
		console.log('enter controller_158')
		$scope.test = TestService.getTest()
	}
