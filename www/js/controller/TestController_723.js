module.exports= function($scope, $state, TestService){
		console.log('enter controller_723')
		$scope.test = TestService.getTest()
	}
