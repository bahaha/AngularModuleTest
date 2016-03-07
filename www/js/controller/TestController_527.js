module.exports= function($scope, $state, TestService){
		console.log('enter controller_527')
		$scope.test = TestService.getTest()
	}
