module.exports= function($scope, $state, TestService){
		console.log('enter controller_969')
		$scope.test = TestService.getTest()
	}
