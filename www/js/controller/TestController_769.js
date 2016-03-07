module.exports= function($scope, $state, TestService){
		console.log('enter controller_769')
		$scope.test = TestService.getTest()
	}
