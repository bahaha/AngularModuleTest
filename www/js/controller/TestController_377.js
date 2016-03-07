module.exports= function($scope, $state, TestService){
		console.log('enter controller_377')
		$scope.test = TestService.getTest()
	}
