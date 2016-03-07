module.exports= function($scope, $state, TestService){
		console.log('enter controller_148')
		$scope.test = TestService.getTest()
	}
