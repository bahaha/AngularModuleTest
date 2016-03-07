module.exports= function($scope, $state, TestService){
		console.log('enter controller_846')
		$scope.test = TestService.getTest()
	}
