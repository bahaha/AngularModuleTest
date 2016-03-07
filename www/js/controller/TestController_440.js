module.exports= function($scope, $state, TestService){
		console.log('enter controller_440')
		$scope.test = TestService.getTest()
	}
