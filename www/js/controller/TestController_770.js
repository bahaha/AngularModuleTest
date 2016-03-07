module.exports= function($scope, $state, TestService){
		console.log('enter controller_770')
		$scope.test = TestService.getTest()
	}
