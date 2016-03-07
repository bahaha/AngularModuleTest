module.exports= function($scope, $state, TestService){
		console.log('enter controller_280')
		$scope.test = TestService.getTest()
	}
