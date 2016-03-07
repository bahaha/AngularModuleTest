module.exports= function($scope, $state, TestService){
		console.log('enter controller_817')
		$scope.test = TestService.getTest()
	}
