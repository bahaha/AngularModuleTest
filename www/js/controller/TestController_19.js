module.exports= function($scope, $state, TestService){
		console.log('enter controller_19')
		$scope.test = TestService.getTest()
	}
