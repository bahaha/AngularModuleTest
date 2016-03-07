module.exports= function($scope, $state, TestService){
		console.log('enter controller_4')
		$scope.test = TestService.getTest()
	}
