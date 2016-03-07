module.exports= function($scope, $state, TestService){
		console.log('enter controller_730')
		$scope.test = TestService.getTest()
	}
