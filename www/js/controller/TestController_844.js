module.exports= function($scope, $state, TestService){
		console.log('enter controller_844')
		$scope.test = TestService.getTest()
	}
