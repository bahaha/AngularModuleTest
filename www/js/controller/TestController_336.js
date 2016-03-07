module.exports= function($scope, $state, TestService){
		console.log('enter controller_336')
		$scope.test = TestService.getTest()
	}
