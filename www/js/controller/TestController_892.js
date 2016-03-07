module.exports= function($scope, $state, TestService){
		console.log('enter controller_892')
		$scope.test = TestService.getTest()
	}
