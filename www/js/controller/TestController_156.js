module.exports= function($scope, $state, TestService){
		console.log('enter controller_156')
		$scope.test = TestService.getTest()
	}
