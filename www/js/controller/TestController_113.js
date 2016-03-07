module.exports= function($scope, $state, TestService){
		console.log('enter controller_113')
		$scope.test = TestService.getTest()
	}
