module.exports= function($scope, $state, TestService){
		console.log('enter controller_200')
		$scope.test = TestService.getTest()
	}
