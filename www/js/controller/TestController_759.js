module.exports= function($scope, $state, TestService){
		console.log('enter controller_759')
		$scope.test = TestService.getTest()
	}
