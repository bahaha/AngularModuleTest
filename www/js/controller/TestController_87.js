module.exports= function($scope, $state, TestService){
		console.log('enter controller_87')
		$scope.test = TestService.getTest()
	}
