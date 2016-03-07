module.exports= function($scope, $state, TestService){
		console.log('enter controller_675')
		$scope.test = TestService.getTest()
	}
