module.exports= function($scope, $state, TestService){
		console.log('enter controller_935')
		$scope.test = TestService.getTest()
	}
