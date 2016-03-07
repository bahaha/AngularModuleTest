module.exports= function($scope, $state, TestService){
		console.log('enter controller_940')
		$scope.test = TestService.getTest()
	}
