module.exports= function($scope, $state, TestService){
		console.log('enter controller_2')
		$scope.test = TestService.getTest()
	}
