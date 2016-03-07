module.exports= function($scope, $state, TestService){
		console.log('enter controller_856')
		$scope.test = TestService.getTest()
	}
