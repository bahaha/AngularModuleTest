module.exports= function($scope, $state, TestService){
		console.log('enter controller_916')
		$scope.test = TestService.getTest()
	}
