module.exports= function($scope, $state, TestService){
		console.log('enter controller_77')
		$scope.test = TestService.getTest()
	}
