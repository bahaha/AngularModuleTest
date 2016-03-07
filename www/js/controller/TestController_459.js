module.exports= function($scope, $state, TestService){
		console.log('enter controller_459')
		$scope.test = TestService.getTest()
	}
