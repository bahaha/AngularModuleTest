module.exports= function($scope, $state, TestService){
		console.log('enter controller_6')
		$scope.test = TestService.getTest()
	}
