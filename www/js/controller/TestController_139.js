module.exports= function($scope, $state, TestService){
		console.log('enter controller_139')
		$scope.test = TestService.getTest()
	}
