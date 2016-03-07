module.exports= function($scope, $state, TestService){
		console.log('enter controller_427')
		$scope.test = TestService.getTest()
	}
