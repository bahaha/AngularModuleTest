module.exports= function($scope, $state, TestService){
		console.log('enter controller_607')
		$scope.test = TestService.getTest()
	}
