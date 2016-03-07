module.exports= function($scope, $state, TestService){
		console.log('enter controller_752')
		$scope.test = TestService.getTest()
	}
