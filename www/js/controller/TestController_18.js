module.exports= function($scope, $state, TestService){
		console.log('enter controller_18')
		$scope.test = TestService.getTest()
	}
