module.exports= function($scope, $state, TestService){
		console.log('enter controller_239')
		$scope.test = TestService.getTest()
	}
