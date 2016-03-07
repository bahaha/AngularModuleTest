module.exports= function($scope, $state, TestService){
		console.log('enter controller_523')
		$scope.test = TestService.getTest()
	}
