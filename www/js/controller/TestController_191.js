module.exports= function($scope, $state, TestService){
		console.log('enter controller_191')
		$scope.test = TestService.getTest()
	}
