module.exports= function($scope, $state, TestService){
		console.log('enter controller_415')
		$scope.test = TestService.getTest()
	}
