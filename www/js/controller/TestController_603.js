module.exports= function($scope, $state, TestService){
		console.log('enter controller_603')
		$scope.test = TestService.getTest()
	}
