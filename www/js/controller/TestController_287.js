module.exports= function($scope, $state, TestService){
		console.log('enter controller_287')
		$scope.test = TestService.getTest()
	}
