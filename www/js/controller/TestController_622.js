module.exports= function($scope, $state, TestService){
		console.log('enter controller_622')
		$scope.test = TestService.getTest()
	}
