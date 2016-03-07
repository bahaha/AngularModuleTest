module.exports= function($scope, $state, TestService){
		console.log('enter controller_971')
		$scope.test = TestService.getTest()
	}
