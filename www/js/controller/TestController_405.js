module.exports= function($scope, $state, TestService){
		console.log('enter controller_405')
		$scope.test = TestService.getTest()
	}
