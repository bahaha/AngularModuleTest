module.exports= function($scope, $state, TestService){
		console.log('enter controller_234')
		$scope.test = TestService.getTest()
	}
