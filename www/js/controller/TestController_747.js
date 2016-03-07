module.exports= function($scope, $state, TestService){
		console.log('enter controller_747')
		$scope.test = TestService.getTest()
	}
