module.exports= function($scope, $state, TestService){
		console.log('enter controller_909')
		$scope.test = TestService.getTest()
	}
