module.exports= function($scope, $state, TestService){
		console.log('enter controller_51')
		$scope.test = TestService.getTest()
	}
