module.exports= function($scope, $state, TestService){
		console.log('enter controller_78')
		$scope.test = TestService.getTest()
	}
