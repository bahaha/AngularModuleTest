module.exports= function($scope, $state, TestService){
		console.log('enter controller_487')
		$scope.test = TestService.getTest()
	}
