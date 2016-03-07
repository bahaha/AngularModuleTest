module.exports= function($scope, $state, TestService){
		console.log('enter controller_152')
		$scope.test = TestService.getTest()
	}
