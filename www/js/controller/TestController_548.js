module.exports= function($scope, $state, TestService){
		console.log('enter controller_548')
		$scope.test = TestService.getTest()
	}
