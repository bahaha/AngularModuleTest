module.exports= function($scope, $state, TestService){
		console.log('enter controller_633')
		$scope.test = TestService.getTest()
	}
