module.exports= function($scope, $state, TestService){
		console.log('enter controller_661')
		$scope.test = TestService.getTest()
	}
