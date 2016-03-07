module.exports= function($scope, $state, TestService){
		console.log('enter controller_715')
		$scope.test = TestService.getTest()
	}
