module.exports= function($scope, $state, TestService){
		console.log('enter controller_746')
		$scope.test = TestService.getTest()
	}
